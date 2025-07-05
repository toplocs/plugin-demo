import { ref, inject, provide, onMounted } from 'vue';
import gun from '../gun';
import SEA from 'gun/sea';

/**
 * Secure Demo Plugin Provider
 * Demonstrates all TopLocs plugin security mechanisms
 */
export function secureProvider(instance: string) {
  const demoData = ref([]);
  const pluginKeys = ref(null);
  const userCapabilities = ref(new Map());

  // 1. Plugin Identity & Signing
  const initializePluginIdentity = async () => {
    // Plugin has its own cryptographic identity
    pluginKeys.value = await SEA.pair();
    
    // Register plugin in Gun with signature
    const pluginInfo = {
      id: 'secure-demo-plugin',
      name: 'Secure Demo Plugin',
      version: '1.0.0',
      author: pluginKeys.value.pub,
      description: 'Demonstrates secure P2P plugin patterns',
      timestamp: Date.now()
    };
    
    const signature = await SEA.sign(pluginInfo, pluginKeys.value);
    const signedPlugin = { ...pluginInfo, signature };
    
    gun.get('plugins').get('secure-demo-plugin').put(signedPlugin);
  };

  // 2. User Permission System
  const requestUserPermission = async (capability: string, namespace: string) => {
    if (!gun.user().is) {
      throw new Error('User must be authenticated');
    }

    // Create permission request
    const permissionRequest = {
      pluginId: 'secure-demo-plugin',
      capability,
      namespace,
      requestedAt: Date.now(),
      grantedBy: gun.user().is.pub
    };

    // User signs the permission grant
    const signature = await gun.user()._.sea.sign(permissionRequest);
    const signedPermission = { ...permissionRequest, signature };

    // Store user's capability grant
    const userPub = gun.user().is.pub;
    const existingCapabilities = userCapabilities.value.get(userPub) || [];
    userCapabilities.value.set(userPub, [...existingCapabilities, signedPermission]);

    return signedPermission;
  };

  // 3. Encrypted Data Storage
  const storeEncryptedData = async (data: any, isPrivate: boolean = true) => {
    const id = crypto.randomUUID();
    
    if (isPrivate) {
      // Encrypted in user's private space
      const encryptedData = await gun.user()._.sea.encrypt(data, gun.user()._.sea);
      gun.user().get(`secure-demo/${id}`).put({
        data: encryptedData,
        timestamp: Date.now(),
        type: 'private'
      });
    } else {
      // Signed public data
      const signedData = await SEA.sign(data, pluginKeys.value);
      gun.get(`secure-demo-public/${id}`).put({
        data,
        signature: signedData,
        author: pluginKeys.value.pub,
        timestamp: Date.now(),
        type: 'public'
      });
    }
    
    return id;
  };

  // 4. Group Encryption (Shared Secrets)
  const shareWithGroup = async (data: any, groupMembers: string[]) => {
    const id = crypto.randomUUID();
    
    for (const memberPub of groupMembers) {
      try {
        // Derive shared secret with each group member
        const sharedSecret = await SEA.secret(gun.user()._.sea.epub, memberPub);
        const encryptedData = await SEA.encrypt(data, sharedSecret);
        
        gun.get(`secure-demo-shared/${memberPub}/${id}`).put({
          data: encryptedData,
          from: gun.user().is.pub,
          timestamp: Date.now(),
          type: 'shared'
        });
      } catch (error) {
        console.warn(`Failed to share with ${memberPub}:`, error);
      }
    }
    
    return id;
  };

  // 5. Data Verification
  const verifyData = async (signedData: any): Promise<boolean> => {
    try {
      const verified = await SEA.verify(signedData.signature, signedData.author);
      return verified === signedData.data;
    } catch {
      return false;
    }
  };

  // 6. Content-Addressed Storage Simulation
  const storeWithContentId = async (data: any) => {
    // Create content hash (simplified - in real implementation use IPFS CID)
    const contentString = JSON.stringify(data);
    const hash = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(contentString));
    const cid = Array.from(new Uint8Array(hash))
      .map(b => b.toString(16).padStart(2, '0'))
      .join('');
    
    // Store with content-addressable key
    gun.get(`content/${cid}`).put({
      data,
      cid,
      timestamp: Date.now(),
      type: 'content-addressed'
    });
    
    return cid;
  };

  // 7. Plugin-to-Plugin Encrypted Communication
  const sendToPlugin = async (targetPluginId: string, message: any) => {
    // Get target plugin's public key
    const targetPlugin = await gun.get('plugins').get(targetPluginId).then();
    if (!targetPlugin?.author) {
      throw new Error('Target plugin not found');
    }
    
    // Encrypt message for target plugin
    const secret = await SEA.secret(pluginKeys.value.epub, targetPlugin.author);
    const encryptedMessage = await SEA.encrypt(message, secret);
    
    gun.get('plugin-messages')
       .get(targetPluginId)
       .get('secure-demo-plugin')
       .put({
         message: encryptedMessage,
         from: 'secure-demo-plugin',
         timestamp: Date.now()
       });
  };

  // Initialize on mount
  onMounted(async () => {
    await initializePluginIdentity();
    
    // Load user's data
    if (gun.user().is) {
      gun.user().get('secure-demo')
        .map()
        .once(async (data, key) => {
          if (data && data.type === 'private') {
            try {
              const decrypted = await gun.user()._.sea.decrypt(data.data, gun.user()._.sea);
              demoData.value.push({ id: key, ...decrypted, encrypted: true });
            } catch (error) {
              console.warn('Failed to decrypt data:', error);
            }
          }
        });
    }
    
    // Load public data
    gun.get('secure-demo-public')
      .map()
      .once(async (data, key) => {
        if (data && await verifyData(data)) {
          demoData.value.push({ id: key, ...data.data, verified: true });
        }
      });
  });

  provide('secureDemo', {
    demoData,
    pluginKeys,
    userCapabilities,
    requestUserPermission,
    storeEncryptedData,
    shareWithGroup,
    verifyData,
    storeWithContentId,
    sendToPlugin
  });
}

export function useSecureDemo() {
  const data = inject('secureDemo');
  if (!data) {
    throw new Error('Composable must have a secureDemo provider.');
  }
  return data;
}