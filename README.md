# 🔐 Secure Demo Plugin

A comprehensive demonstration of secure plugin development for the TopLocs decentralized P2P platform. This plugin showcases all security mechanisms, plugin architecture patterns, and best practices.

## 🎯 What This Demo Shows

### **🔐 Security Mechanisms Demonstrated:**

1. **Plugin Identity & Signatures**
   - Cryptographic plugin identity using Gun SEA
   - Digital signatures for all plugin data
   - Verification of data integrity and authenticity

2. **User Encryption & Privacy**
   - End-to-end encryption in user's private space
   - Public signed data for transparent information
   - Group encryption with shared secrets

3. **Permission System**
   - Explicit user consent for plugin capabilities
   - Granular permissions (read, write, encrypt, share)
   - Capability verification before data access

4. **Content-Addressed Storage**
   - IPFS-style content identification (CIDs)
   - Tamper-proof data verification
   - Decentralized content distribution

5. **Plugin-to-Plugin Communication**
   - End-to-end encrypted messaging between plugins
   - Secure data sharing across plugin boundaries
   - Cryptographic channel establishment

### **🏗️ Plugin Architecture Patterns:**

1. **Component Exposure**
   - `./Main` - Primary content area component
   - `./Sidebar` - Sidebar widget component  
   - `./Settings` - Plugin configuration interface
   - `./EntityProvider` - Data provider composable
   - `./EntityTypes` - Custom entity definitions

2. **Route Integration**
   - Dynamic route registration via Gun.js
   - Route-based component loading
   - URL parameter handling

3. **Entity System Extension**
   - Custom entity types (SecureNote)
   - Custom relation definitions
   - Cross-plugin entity references

4. **Data Provider Pattern**
   - Vue composable for data management
   - Reactive state management
   - Encrypted data persistence

## 🚀 Quick Start

### **For Plugin Developers:**

```bash
# Clone and examine the demo plugin
cd demo-plugin
pnpm install
pnpm dev
```

### **For TopLocs Integration:**

1. **Load Plugin in TopLocs:**
   ```typescript
   // Plugin loads automatically via Gun.js discovery
   gun.get('plugins').get('secure-demo-plugin').put({
     name: 'Secure Demo Plugin',
     url: 'http://localhost:3001/plugin.js',
     author: 'plugin-public-key'
   });
   ```

2. **Access Plugin Components:**
   ```vue
   <!-- Main content area -->
   <PluginComponent plugin="secure-demo-plugin" position="Main" />
   
   <!-- Sidebar widget -->
   <PluginComponent plugin="secure-demo-plugin" position="Sidebar" />
   ```

## 🔧 Plugin Development Guide

### **1. Security-First Development:**

```typescript
// Always sign plugin data
const signedData = await SEA.sign(data, pluginKeys);
gun.get(`plugin-${pluginId}/${id}`).put({
  data,
  signature: signedData,
  author: pluginKeys.pub
});

// Request user permissions explicitly
const permission = await requestUserPermission('write', 'user-data');

// Encrypt sensitive data
const encrypted = await gun.user()._.sea.encrypt(sensitiveData);
```

### **2. Component Architecture:**

```typescript
// Export multiple component types
export default {
  exposes: {
    './Main': './src/components/MainComponent.vue',
    './Sidebar': './src/components/SidebarWidget.vue',
    './Settings': './src/components/PluginSettings.vue',
    './Modal': './src/components/ModalComponent.vue'
  }
};
```

### **3. Entity System Integration:**

```typescript
// Define custom entities
export interface CustomEntity extends BaseEntity {
  pluginId: string;
  customField: string;
}

// Register custom relations
export const customRelations = [
  {
    id: 'custom-relation',
    accepts: ['CustomEntity', 'Topic'],
    icon: 'link'
  }
];
```

### **4. Data Provider Pattern:**

```typescript
export function customProvider() {
  const data = ref([]);
  
  // Gun.js integration
  onMounted(() => {
    gun.get(`plugin-${pluginId}`)
      .map()
      .once((item) => data.value.push(item));
  });
  
  provide('customData', { data, createItem, updateItem });
}
```

## 🔒 Security Best Practices

### **✅ DO:**
- Sign all public plugin data
- Request explicit user permissions
- Encrypt sensitive data at rest
- Verify signatures on incoming data
- Use content addressing for immutable data
- Implement capability-based security

### **❌ DON'T:**
- Store unencrypted sensitive data
- Access data without user permission
- Trust unsigned plugin data
- Hardcode cryptographic keys
- Bypass Gun.js encryption
- Use eval() or similar dynamic execution

## 📊 Plugin Slot System

### **Available Plugin Slots:**

| Slot | Usage | Component | Description |
|------|--------|-----------|-------------|
| `Main` | Content area | `./Main` | Primary plugin interface |
| `Sidebar` | Right sidebar | `./Sidebar` | Quick actions/status |
| `Settings` | Settings page | `./Settings` | Plugin configuration |
| `Modal` | Dialog/popup | `./Modal` | Overlay interactions |

### **Route Integration:**

```typescript
// Routes are registered automatically via Gun.js
gun.get('plugins').get(pluginId).get('paths').put({
  path: '/secure-demo/:id?',
  component: 'Main',
  name: 'SecureDemoView'
});
```

## 🌐 Entity & Relation System

### **Custom Entity Definition:**

```typescript
export const pluginEntityDefinition = {
  pluginId: 'secure-demo-plugin',
  entities: [{
    type: 'SecureNote',
    name: 'Secure Note',
    namespace: 'secure-notes',
    schema: {
      required: ['title', 'content'],
      optional: ['tags', 'sharedWith']
    }
  }],
  relations: secureNoteRelations
};
```

### **Cross-Plugin Relations:**

```typescript
// Relate plugin entities to core entities
const relation = {
  from: 'secure-note-id',
  to: 'topic-id',
  type: 'tags',
  pluginId: 'secure-demo-plugin'
};

gun.get('relations').get(relation.from).get(relation.type).set(relation);
```

## 🛠️ Development Tools

### **Debug Commands (Dev Mode):**

```javascript
// Available in browser console
gun.debug.showPluginData('secure-demo-plugin');
gun.debug.showUserData();
gun.debug.clearPluginData('secure-demo-plugin');

// Security utilities
gun.secure.verifyPlugin(pluginData);
gun.secure.createCID(data);
gun.secure.hasCapability(userPub, pluginId, 'write');
```

### **Testing Patterns:**

```typescript
// Test encrypted data
const encrypted = await storeEncryptedData(testData, true);
const decrypted = await gun.user()._.sea.decrypt(encrypted);
assert(decrypted.content === testData.content);

// Test signatures
const signed = await SEA.sign(testData, pluginKeys);
const verified = await SEA.verify(signed, pluginKeys.pub);
assert(verified === testData);
```

## 📋 Plugin Checklist

### **Before Publishing:**

- [ ] All public data is cryptographically signed
- [ ] User permissions are requested explicitly
- [ ] Sensitive data is encrypted
- [ ] Plugin identity is established with key pair
- [ ] Components are properly exposed via federation
- [ ] Entity definitions are valid and complete
- [ ] Cross-plugin compatibility is tested
- [ ] Security audit is completed

### **Security Audit:**

- [ ] No hardcoded secrets or keys
- [ ] No eval() or dynamic code execution
- [ ] All user data access is permission-gated
- [ ] Signatures are verified on data reads
- [ ] Encryption is used for sensitive operations
- [ ] Plugin-to-plugin communication is secured

## 🎓 Learning Resources

- **[Gun.js Documentation](https://gun.eco/docs/)** - P2P database fundamentals
- **[Gun SEA Guide](https://gun.eco/docs/SEA)** - Security, Encryption, Authorization
- **[Module Federation](https://module-federation.github.io/)** - Plugin system architecture
- **[Vue Composables](https://vuejs.org/guide/reusability/composables.html)** - Reactive data patterns
- **[TopLocs Architecture](../docs/project/architecture.md)** - Platform overview

## 🤝 Contributing

This demo plugin serves as the reference implementation for secure TopLocs plugins. When contributing:

1. Maintain security-first principles
2. Document all security mechanisms
3. Provide clear examples for each pattern
4. Test across multiple scenarios
5. Keep the demo comprehensive but focused

---

**🔐 Remember: In a decentralized system, security is everyone's responsibility. This demo shows how to build plugins that are secure by design, not as an afterthought.**