<template>
  <div class="p-4 space-y-4">
    <div class="text-lg font-semibold">🔐 Security Demo</div>
    
    <!-- Quick Stats -->
    <div class="space-y-2">
      <div class="flex justify-between text-sm">
        <span>Encrypted Items:</span>
        <span class="font-mono">{{ encryptedCount }}</span>
      </div>
      <div class="flex justify-between text-sm">
        <span>Public Items:</span>
        <span class="font-mono">{{ publicCount }}</span>
      </div>
      <div class="flex justify-between text-sm">
        <span>Permissions:</span>
        <span class="font-mono">{{ permissionCount }}</span>
      </div>
    </div>
    
    <Divider />
    
    <!-- Quick Actions -->
    <div class="space-y-2">
      <SubmitButton 
        @click="showSecurityStatus"
        variant="outline" 
        size="sm" 
        class="w-full"
      >
        🔍 Security Status
      </SubmitButton>
      
      <SubmitButton 
        @click="exportData"
        variant="outline" 
        size="sm" 
        class="w-full"
      >
        📤 Export Data
      </SubmitButton>
      
      <SubmitButton 
        @click="clearDemoData"
        variant="danger" 
        size="sm" 
        class="w-full"
        v-if="isDev"
      >
        🗑️ Clear Demo Data
      </SubmitButton>
    </div>
    
    <Divider />
    
    <!-- Security Indicators -->
    <div class="space-y-3">
      <div class="text-sm font-medium">Security Features Active:</div>
      
      <div class="space-y-2 text-xs">
        <div class="flex items-center gap-2">
          <span class="w-2 h-2 bg-green-500 rounded-full"></span>
          <span>End-to-End Encryption</span>
        </div>
        
        <div class="flex items-center gap-2">
          <span class="w-2 h-2 bg-green-500 rounded-full"></span>
          <span>Digital Signatures</span>
        </div>
        
        <div class="flex items-center gap-2">
          <span class="w-2 h-2 bg-green-500 rounded-full"></span>
          <span>Content Addressing</span>
        </div>
        
        <div class="flex items-center gap-2">
          <span class="w-2 h-2 bg-green-500 rounded-full"></span>
          <span>Permission System</span>
        </div>
        
        <div class="flex items-center gap-2">
          <span :class="[
            'w-2 h-2 rounded-full',
            gun.user().is ? 'bg-green-500' : 'bg-gray-400'
          ]"></span>
          <span>User Authentication</span>
        </div>
      </div>
    </div>
    
    <Divider />
    
    <!-- Plugin Info -->
    <div class="text-xs text-gray-500 space-y-1">
      <div>Plugin: Secure Demo v1.0.0</div>
      <div>Author: {{ pluginAuthor }}</div>
      <div>Namespace: secure-demo-plugin</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { useSecureDemo } from '../composables/secureProvider';
import gun from '../gun';

import SubmitButton from './common/SubmitButton.vue';
import Divider from './common/Divider.vue';

const { demoData, pluginKeys, userCapabilities } = useSecureDemo();

const isDev = import.meta.env.DEV;
const pluginAuthor = ref('Demo Author');

// Computed stats
const encryptedCount = computed(() => 
  demoData.value.filter(item => item.encrypted).length
);

const publicCount = computed(() => 
  demoData.value.filter(item => item.verified).length
);

const permissionCount = computed(() => {
  let total = 0;
  userCapabilities.value.forEach(capabilities => {
    total += capabilities.length;
  });
  return total;
});

// Methods
const showSecurityStatus = () => {
  const status = {
    pluginIdentity: !!pluginKeys.value,
    userAuthenticated: !!gun.user().is,
    encryptedData: encryptedCount.value,
    publicData: publicCount.value,
    permissions: permissionCount.value
  };
  
  console.group('🔐 Security Status');
  console.table(status);
  console.groupEnd();
  
  alert(`Security Status:\n${JSON.stringify(status, null, 2)}`);
};

const exportData = async () => {
  const exportData = {
    timestamp: new Date().toISOString(),
    plugin: 'secure-demo-plugin',
    stats: {
      encrypted: encryptedCount.value,
      public: publicCount.value,
      permissions: permissionCount.value
    },
    // Don't export encrypted content, just metadata
    items: demoData.value.map(item => ({
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
  a.download = `secure-demo-export-${Date.now()}.json`;
  a.click();
  URL.revokeObjectURL(url);
};

const clearDemoData = () => {
  if (isDev && gun.debug) {
    gun.debug.clearPluginData('secure-demo-plugin');
    alert('🗑️ Demo data cleared (dev mode)');
  }
};

onMounted(() => {
  if (pluginKeys.value) {
    pluginAuthor.value = pluginKeys.value.pub.substring(0, 8) + '...';
  }
});
</script>