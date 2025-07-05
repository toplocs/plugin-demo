<template>
  <Container>
    <Title>⚙️ Secure Demo Plugin Settings</Title>
    
    <!-- Plugin Information -->
    <Card class="mb-4">
      <h3 class="text-lg font-semibold mb-3">📋 Plugin Information</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label class="text-sm font-medium">Plugin Name:</label>
          <div class="mt-1 p-2 bg-gray-50 rounded">Secure Demo Plugin</div>
        </div>
        <div>
          <label class="text-sm font-medium">Version:</label>
          <div class="mt-1 p-2 bg-gray-50 rounded">1.0.0</div>
        </div>
        <div>
          <label class="text-sm font-medium">Plugin ID:</label>
          <div class="mt-1 p-2 bg-gray-50 rounded text-xs font-mono">secure-demo-plugin</div>
        </div>
        <div>
          <label class="text-sm font-medium">Author Public Key:</label>
          <div class="mt-1 p-2 bg-gray-50 rounded text-xs font-mono">
            {{ pluginKeys?.pub.substring(0, 20) }}...
          </div>
        </div>
      </div>
    </Card>

    <!-- Security Settings -->
    <Card class="mb-4">
      <h3 class="text-lg font-semibold mb-3">🔐 Security Settings</h3>
      <div class="space-y-4">
        
        <!-- Default Encryption Level -->
        <div>
          <label class="text-sm font-medium mb-2 block">Default Encryption Level:</label>
          <SelectInput 
            v-model="settings.defaultEncryption"
            :options="encryptionOptions"
            @change="updateSettings"
          />
          <p class="text-xs text-gray-500 mt-1">
            How new data should be encrypted by default
          </p>
        </div>
        
        <!-- Auto-sign Public Data -->
        <div class="flex items-center space-x-3">
          <input 
            type="checkbox" 
            v-model="settings.autoSignPublicData"
            @change="updateSettings"
            class="rounded"
          />
          <div>
            <label class="text-sm font-medium">Auto-sign Public Data</label>
            <p class="text-xs text-gray-500">
              Automatically sign all public data with plugin key
            </p>
          </div>
        </div>
        
        <!-- Verify Signatures -->
        <div class="flex items-center space-x-3">
          <input 
            type="checkbox" 
            v-model="settings.verifySignatures"
            @change="updateSettings"
            class="rounded"
          />
          <div>
            <label class="text-sm font-medium">Verify All Signatures</label>
            <p class="text-xs text-gray-500">
              Automatically verify signatures on all incoming data
            </p>
          </div>
        </div>
        
        <!-- Enable Content Addressing -->
        <div class="flex items-center space-x-3">
          <input 
            type="checkbox" 
            v-model="settings.enableContentAddressing"
            @change="updateSettings"
            class="rounded"
          />
          <div>
            <label class="text-sm font-medium">Enable Content Addressing</label>
            <p class="text-xs text-gray-500">
              Store data with content-based identifiers (CIDs)
            </p>
          </div>
        </div>
      </div>
    </Card>

    <!-- Permission Management -->
    <Card class="mb-4">
      <h3 class="text-lg font-semibold mb-3">🔑 Permission Management</h3>
      
      <div v-if="userCapabilities.size === 0" class="text-gray-500 text-center py-8">
        No permissions granted yet
      </div>
      
      <div v-else class="space-y-3">
        <div 
          v-for="[userPub, capabilities] in userCapabilities" 
          :key="userPub"
          class="p-3 border rounded-lg"
        >
          <div class="flex justify-between items-start mb-2">
            <div>
              <div class="font-medium text-sm">User: {{ userPub.substring(0, 16) }}...</div>
              <div class="text-xs text-gray-500">
                {{ capabilities.length }} permission(s) granted
              </div>
            </div>
            <SubmitButton 
              @click="revokeAllPermissions(userPub)"
              variant="danger" 
              size="xs"
            >
              Revoke All
            </SubmitButton>
          </div>
          
          <div class="space-y-1">
            <div 
              v-for="capability in capabilities" 
              :key="`${capability.capability}-${capability.namespace}`"
              class="flex justify-between items-center text-xs"
            >
              <span class="bg-blue-100 text-blue-800 px-2 py-1 rounded">
                {{ capability.capability }}:{{ capability.namespace }}
              </span>
              <span class="text-gray-500">
                {{ new Date(capability.requestedAt).toLocaleDateString() }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Card>

    <!-- Data Management -->
    <Card class="mb-4">
      <h3 class="text-lg font-semibold mb-3">💾 Data Management</h3>
      <div class="space-y-3">
        
        <!-- Data Statistics -->
        <div class="grid grid-cols-3 gap-4 text-center">
          <div class="p-3 bg-green-50 rounded">
            <div class="text-2xl font-bold text-green-600">{{ encryptedCount }}</div>
            <div class="text-sm text-green-700">Encrypted Items</div>
          </div>
          <div class="p-3 bg-blue-50 rounded">
            <div class="text-2xl font-bold text-blue-600">{{ publicCount }}</div>
            <div class="text-sm text-blue-700">Public Items</div>
          </div>
          <div class="p-3 bg-purple-50 rounded">
            <div class="text-2xl font-bold text-purple-600">{{ cidCount }}</div>
            <div class="text-sm text-purple-700">CID Items</div>
          </div>
        </div>
        
        <Divider />
        
        <!-- Data Actions -->
        <div class="flex gap-2 flex-wrap">
          <SubmitButton @click="exportAllData" variant="outline" size="sm">
            📤 Export Data
          </SubmitButton>
          
          <SubmitButton @click="validateAllData" variant="outline" size="sm">
            ✅ Validate Data
          </SubmitButton>
          
          <SubmitButton 
            @click="clearAllData" 
            variant="danger" 
            size="sm"
            v-if="isDev"
          >
            🗑️ Clear All Data
          </SubmitButton>
        </div>
      </div>
    </Card>

    <!-- Advanced Settings -->
    <Card v-if="isDev">
      <h3 class="text-lg font-semibold mb-3">🛠️ Advanced Settings (Dev Mode)</h3>
      <div class="space-y-4">
        
        <!-- Debug Mode -->
        <div class="flex items-center space-x-3">
          <input 
            type="checkbox" 
            v-model="settings.debugMode"
            @change="updateSettings"
            class="rounded"
          />
          <div>
            <label class="text-sm font-medium">Debug Mode</label>
            <p class="text-xs text-gray-500">
              Enable detailed console logging for development
            </p>
          </div>
        </div>
        
        <!-- Custom Gun Peers -->
        <div>
          <label class="text-sm font-medium mb-2 block">Custom Gun Peers:</label>
          <TextArea 
            v-model="settings.customPeers"
            @input="updateSettings"
            placeholder="http://localhost:3000/gun&#10;https://gun.peer.com/gun"
            rows="3"
          />
          <p class="text-xs text-gray-500 mt-1">
            One peer URL per line (leave empty for default)
          </p>
        </div>
        
        <!-- Force Signature Verification -->
        <div class="flex items-center space-x-3">
          <input 
            type="checkbox" 
            v-model="settings.strictMode"
            @change="updateSettings"
            class="rounded"
          />
          <div>
            <label class="text-sm font-medium">Strict Security Mode</label>
            <p class="text-xs text-gray-500">
              Reject all unsigned data and unverified plugins
            </p>
          </div>
        </div>
      </div>
    </Card>
  </Container>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { useSecureDemo } from '../composables/secureProvider';
import gun from '../gun';

import Container from './common/Container.vue';
import Card from './common/Card.vue';
import Title from './common/Title.vue';
import SubmitButton from './common/SubmitButton.vue';
import SelectInput from './common/SelectInput.vue';
import TextArea from './common/TextArea.vue';
import Divider from './common/Divider.vue';

const { demoData, pluginKeys, userCapabilities } = useSecureDemo();

const isDev = import.meta.env.DEV;

// Settings
const settings = ref({
  defaultEncryption: 'private',
  autoSignPublicData: true,
  verifySignatures: true,
  enableContentAddressing: false,
  debugMode: false,
  customPeers: '',
  strictMode: false
});

const encryptionOptions = [
  { value: 'private', label: 'Private (User encrypted)' },
  { value: 'shared', label: 'Shared (Group encrypted)' },
  { value: 'public', label: 'Public (Signed only)' }
];

// Computed stats
const encryptedCount = computed(() => 
  demoData.value.filter(item => item.encrypted).length
);

const publicCount = computed(() => 
  demoData.value.filter(item => item.verified).length
);

const cidCount = computed(() => 
  demoData.value.filter(item => item.type === 'content-addressed').length
);

// Methods
const updateSettings = () => {
  // Save settings to user's encrypted storage
  if (gun.user().is) {
    gun.user().get('plugin-settings').get('secure-demo-plugin').put(settings.value);
  }
  
  console.log('🔧 Settings updated:', settings.value);
};

const revokeAllPermissions = (userPub: string) => {
  if (confirm(`Revoke all permissions for user ${userPub.substring(0, 8)}...?`)) {
    userCapabilities.value.delete(userPub);
    console.log(`🚫 Revoked all permissions for ${userPub}`);
  }
};

const exportAllData = () => {
  const exportData = {
    timestamp: new Date().toISOString(),
    plugin: 'secure-demo-plugin',
    settings: settings.value,
    stats: {
      encrypted: encryptedCount.value,
      public: publicCount.value,
      cid: cidCount.value,
      permissions: userCapabilities.value.size
    },
    // Export metadata only, not encrypted content
    dataMetadata: demoData.value.map(item => ({
      id: item.id,
      type: item.type,
      timestamp: item.timestamp,
      encrypted: !!item.encrypted,
      verified: !!item.verified
    }))
  };
  
  const blob = new Blob([JSON.stringify(exportData, null, 2)], {
    type: 'application/json'
  });
  
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `secure-demo-settings-${Date.now()}.json`;
  a.click();
  URL.revokeObjectURL(url);
};

const validateAllData = async () => {
  let validCount = 0;
  let invalidCount = 0;
  
  for (const item of demoData.value) {
    if (item.signature && item.author) {
      const isValid = await gun.secure.verifyPlugin({
        data: item.data || item,
        signature: item.signature,
        author: item.author
      });
      
      if (isValid) validCount++;
      else invalidCount++;
    }
  }
  
  alert(`Data validation complete:\n✅ Valid: ${validCount}\n❌ Invalid: ${invalidCount}`);
};

const clearAllData = () => {
  if (isDev && confirm('⚠️ Clear all plugin data? This cannot be undone.')) {
    gun.debug?.clearPluginData('secure-demo-plugin');
    demoData.value.length = 0;
    userCapabilities.value.clear();
    alert('🗑️ All data cleared');
  }
};

// Load settings on mount
onMounted(() => {
  if (gun.user().is) {
    gun.user().get('plugin-settings').get('secure-demo-plugin').once((savedSettings) => {
      if (savedSettings) {
        settings.value = { ...settings.value, ...savedSettings };
      }
    });
  }
});
</script>