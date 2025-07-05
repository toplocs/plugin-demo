<template>
  <Container>
    <Title>🔐 Secure Plugin Demo</Title>
    
    <!-- Plugin Identity Section -->
    <Card class="mb-4">
      <h3 class="text-lg font-semibold mb-3">🆔 Plugin Identity & Signatures</h3>
      <div v-if="pluginKeys" class="space-y-2">
        <div class="text-sm">
          <strong>Plugin Public Key:</strong>
          <code class="block mt-1 p-2 bg-gray-100 rounded text-xs">
            {{ pluginKeys.pub.substring(0, 40) }}...
          </code>
        </div>
        <Callout type="info">
          All plugin data is cryptographically signed with this key
        </Callout>
      </div>
    </Card>

    <!-- User Permissions Section -->
    <Card class="mb-4">
      <h3 class="text-lg font-semibold mb-3">🔑 User Permissions</h3>
      <div class="space-y-3">
        <div v-if="!gun.user().is" class="text-amber-600">
          ⚠️ User must be authenticated to grant permissions
        </div>
        <div v-else>
          <p class="text-sm text-gray-600 mb-3">
            This plugin requests explicit permissions from users:
          </p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
            <SubmitButton 
              @click="requestPermission('read', 'user-data')"
              variant="outline"
              size="sm"
            >
              Request Read Permission
            </SubmitButton>
            <SubmitButton 
              @click="requestPermission('write', 'user-data')"
              variant="outline" 
              size="sm"
            >
              Request Write Permission
            </SubmitButton>
          </div>
          
          <div v-if="userCapabilities.size > 0" class="mt-3">
            <h4 class="font-medium">Granted Permissions:</h4>
            <ul class="text-sm space-y-1 mt-1">
              <li v-for="[userPub, capabilities] in userCapabilities" :key="userPub">
                User: {{ userPub.substring(0, 8) }}... 
                → {{ capabilities.map(c => c.capability).join(', ') }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Card>

    <!-- Data Encryption Section -->
    <Card class="mb-4">
      <h3 class="text-lg font-semibold mb-3">🔐 Encrypted Data Storage</h3>
      <form @submit.prevent="addSecureData" class="space-y-3">
        <TextInput 
          v-model="newDataText"
          placeholder="Enter some data to encrypt..."
          required
        />
        <div class="flex gap-2">
          <SubmitButton type="submit" variant="primary" size="sm">
            Store Privately (Encrypted)
          </SubmitButton>
          <SubmitButton 
            @click="addPublicData" 
            type="button" 
            variant="outline" 
            size="sm"
          >
            Store Publicly (Signed)
          </SubmitButton>
        </div>
      </form>
      
      <Divider class="my-4" />
      
      <div v-if="demoData.length > 0">
        <h4 class="font-medium mb-2">Stored Data:</h4>
        <div class="space-y-2">
          <div 
            v-for="item in demoData" 
            :key="item.id"
            class="p-3 bg-gray-50 rounded text-sm"
          >
            <div class="flex items-center gap-2 mb-1">
              <span v-if="item.encrypted" class="text-green-600">🔒 Encrypted</span>
              <span v-if="item.verified" class="text-blue-600">✅ Verified</span>
              <span v-if="item.type === 'content-addressed'" class="text-purple-600">🔗 CID</span>
            </div>
            <div>{{ item.text || item.content || 'No text content' }}</div>
            <div class="text-xs text-gray-500 mt-1">
              {{ new Date(item.timestamp).toLocaleString() }}
            </div>
          </div>
        </div>
      </div>
    </Card>

    <!-- Group Sharing Section -->
    <Card class="mb-4">
      <h3 class="text-lg font-semibold mb-3">👥 Group Encryption</h3>
      <form @submit.prevent="shareWithGroup" class="space-y-3">
        <TextInput 
          v-model="groupMessage"
          placeholder="Message to share with group..."
          required
        />
        <TextArea 
          v-model="groupMembers"
          placeholder="Enter public keys (one per line)..."
          rows="3"
        />
        <SubmitButton type="submit" size="sm">
          Share Encrypted with Group
        </SubmitButton>
      </form>
      
      <Callout type="info" class="mt-3">
        Each group member gets the data encrypted with a unique shared secret
      </Callout>
    </Card>

    <!-- Content Addressing Section -->
    <Card class="mb-4">
      <h3 class="text-lg font-semibold mb-3">🔗 Content-Addressed Storage</h3>
      <form @submit.prevent="storeCIDData" class="space-y-3">
        <TextInput 
          v-model="cidContent"
          placeholder="Content to store with CID..."
          required
        />
        <SubmitButton type="submit" size="sm">
          Store with Content ID
        </SubmitButton>
      </form>
      
      <div v-if="lastCID" class="mt-3 p-3 bg-green-50 rounded">
        <strong>Generated CID:</strong>
        <code class="block mt-1 text-xs">{{ lastCID }}</code>
        <p class="text-sm text-gray-600 mt-1">
          This content can be verified and retrieved by anyone using this CID
        </p>
      </div>
    </Card>

    <!-- Plugin Communication Section -->
    <Card class="mb-4">
      <h3 class="text-lg font-semibold mb-3">📡 Plugin-to-Plugin Communication</h3>
      <form @submit.prevent="sendPluginMessage" class="space-y-3">
        <SelectInput 
          v-model="targetPlugin"
          :options="availablePlugins"
          placeholder="Select target plugin..."
        />
        <TextInput 
          v-model="pluginMessage"
          placeholder="Encrypted message to send..."
          required
        />
        <SubmitButton type="submit" size="sm">
          Send Encrypted Message
        </SubmitButton>
      </form>
      
      <Callout type="info" class="mt-3">
        Messages are end-to-end encrypted between plugins using derived secrets
      </Callout>
    </Card>

    <!-- Relations Section -->
    <Card>
      <h3 class="text-lg font-semibold mb-3">🔗 Entity Relations</h3>
      <p class="text-sm text-gray-600 mb-3">
        This plugin can create custom entity types and relations:
      </p>
      
      <div class="space-y-2">
        <div class="p-3 bg-blue-50 rounded">
          <strong>Demo Entity Type:</strong> "SecureNote"
          <br>
          <small>Can relate to: Topics, Locations, Users</small>
        </div>
        
        <div class="p-3 bg-green-50 rounded">
          <strong>Demo Relations:</strong>
          <ul class="text-sm mt-1">
            <li>• "encrypts" → User encrypts SecureNote</li>
            <li>• "shares-with" → SecureNote shared with User</li>
            <li>• "tags" → SecureNote tags Topic</li>
          </ul>
        </div>
      </div>
    </Card>
  </Container>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useSecureDemo } from '../composables/secureProvider';
import gun from '../gun';

// Import common components (these would be provided by the host app)
import Container from './common/Container.vue';
import Card from './common/Card.vue';
import Title from './common/Title.vue';
import SubmitButton from './common/SubmitButton.vue';
import TextInput from './common/TextInput.vue';
import TextArea from './common/TextArea.vue';
import SelectInput from './common/SelectInput.vue';
import Callout from './common/Callout.vue';
import Divider from './common/Divider.vue';

// Use the secure provider
const {
  demoData,
  pluginKeys,
  userCapabilities,
  requestUserPermission,
  storeEncryptedData,
  shareWithGroup: shareGroupData,
  storeWithContentId,
  sendToPlugin
} = useSecureDemo();

// Form data
const newDataText = ref('');
const groupMessage = ref('');
const groupMembers = ref('');
const cidContent = ref('');
const pluginMessage = ref('');
const targetPlugin = ref('');
const lastCID = ref('');

// Available plugins for messaging
const availablePlugins = ref([
  { value: 'wiki-plugin', label: 'Wiki Plugin' },
  { value: 'link-plugin', label: 'Link Plugin' },
  { value: 'location-plugin', label: 'Location Plugin' }
]);

// Methods
const requestPermission = async (capability: string, namespace: string) => {
  try {
    await requestUserPermission(capability, namespace);
    alert(`✅ Permission granted: ${capability} access to ${namespace}`);
  } catch (error) {
    alert(`❌ Permission denied: ${error.message}`);
  }
};

const addSecureData = async () => {
  try {
    await storeEncryptedData({ text: newDataText.value }, true);
    newDataText.value = '';
    alert('✅ Data encrypted and stored securely');
  } catch (error) {
    alert(`❌ Error: ${error.message}`);
  }
};

const addPublicData = async () => {
  try {
    await storeEncryptedData({ text: newDataText.value }, false);
    newDataText.value = '';
    alert('✅ Data signed and stored publicly');
  } catch (error) {
    alert(`❌ Error: ${error.message}`);
  }
};

const shareWithGroup = async () => {
  try {
    const members = groupMembers.value.split('\n').filter(Boolean);
    await shareGroupData({ message: groupMessage.value }, members);
    groupMessage.value = '';
    groupMembers.value = '';
    alert('✅ Message encrypted and shared with group');
  } catch (error) {
    alert(`❌ Error: ${error.message}`);
  }
};

const storeCIDData = async () => {
  try {
    const cid = await storeWithContentId({ content: cidContent.value });
    lastCID.value = cid;
    cidContent.value = '';
    alert('✅ Content stored with CID');
  } catch (error) {
    alert(`❌ Error: ${error.message}`);
  }
};

const sendPluginMessage = async () => {
  try {
    await sendToPlugin(targetPlugin.value, { message: pluginMessage.value });
    pluginMessage.value = '';
    alert('✅ Encrypted message sent to plugin');
  } catch (error) {
    alert(`❌ Error: ${error.message}`);
  }
};

onMounted(() => {
  console.log('🔐 Secure Demo Plugin loaded');
  console.log('Available debug commands:', gun.debug);
});
</script>