import Gun from 'gun';
import 'gun/sea'; // Security, Encryption, Authorization
import 'gun/lib/radix';
import 'gun/lib/radisk';
import 'gun/lib/store';

// Connect to TopLocs Gun network
const gun = Gun(['http://localhost:3000/gun']);

// Add custom methods for plugin development
gun.secure = {
  // Verify plugin signatures
  async verifyPlugin(pluginData: any): Promise<boolean> {
    try {
      const { data, signature, author } = pluginData;
      const verified = await gun.SEA.verify(signature, author);
      return verified === data;
    } catch {
      return false;
    }
  },

  // Create content hash (simplified CID)
  async createCID(data: any): Promise<string> {
    const contentString = JSON.stringify(data);
    const hash = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(contentString));
    return Array.from(new Uint8Array(hash))
      .map(b => b.toString(16).padStart(2, '0'))
      .join('');
  },

  // Check if user has capability for plugin action
  async hasCapability(
    userPub: string, 
    pluginId: string, 
    capability: string
  ): Promise<boolean> {
    const capabilities = await gun.get('user-capabilities')
      .get(userPub)
      .get(pluginId)
      .then();
    
    return capabilities?.includes(capability) || false;
  }
};

// Plugin debugging utilities (dev mode only)
if (import.meta.env.DEV) {
  gun.debug = {
    // Show plugin data
    showPluginData: (pluginId: string) => {
      console.group(`🔌 Plugin Data: ${pluginId}`);
      gun.get(`plugin-${pluginId}`).map().once((data, key) => {
        console.log(key, data);
      });
      console.groupEnd();
    },

    // Show encrypted user data
    showUserData: async () => {
      if (!gun.user().is) {
        console.warn('User not authenticated');
        return;
      }
      
      console.group('🔐 User Encrypted Data');
      gun.user().map().once((data, key) => {
        console.log(key, data);
      });
      console.groupEnd();
    },

    // Clear plugin data (dev only)
    clearPluginData: (pluginId: string) => {
      if (confirm(`Clear all data for ${pluginId}?`)) {
        gun.get(`plugin-${pluginId}`).map().once((data, key) => {
          gun.get(`plugin-${pluginId}`).get(key).put(null);
        });
      }
    }
  };
}

export default gun;