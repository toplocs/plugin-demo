# Demo Plugin - Plugin Development Framework

This repository serves as a **template and development framework** for creating TopLocs plugins. It demonstrates how to build plugins that integrate with the TopLocs decentralized community platform.

## Purpose

The demo-plugin repository shows how to:
- Create federated Vue.js components using Module Federation
- Integrate with Gun.js for decentralized data storage
- Build plugin UIs that match the TopLocs design system
- Test plugin functionality in isolation

## Structure

```
demo-plugin/
├── demo-frontend/       # Plugin host application (for testing)
├── demo-plugin/         # Example plugin implementation
├── events-plugin/       # Event management plugin example
└── wiki-plugin/         # Wiki plugin example
```

## Getting Started

### 1. Clone and Setup
```bash
git clone https://github.com/toplocs/demo-plugin.git
cd demo-plugin
pnpm install
```

### 2. Start Development Environment
```bash
pnpm dev  # Starts plugin host and example plugins
```

### 3. Create Your Plugin
1. Copy one of the example plugins as a template
2. Modify `vite.config.ts` for Module Federation
3. Update plugin components and data integration
4. Test with the demo-frontend host

## Plugin Development Guide

For comprehensive plugin development documentation, see:
- [TopLocs Plugin Development Guide](https://github.com/toplocs/tribelike/blob/main/docs/plugin-development.md)
- [TopLocs Architecture Overview](https://github.com/toplocs/tribelike/blob/main/docs/architecture.md)

## Key Concepts

### Module Federation
Plugins use Webpack Module Federation to load dynamically:

```typescript
// vite.config.ts
federation({
  name: 'your-plugin',
  filename: 'plugin.js',
  exposes: {
    './Main': './src/components/Main.vue',
    './Settings': './src/components/Settings.vue'
  },
  shared: ['vue', 'tailwindcss']
})
```

### Gun.js Integration
All plugins share the Gun.js decentralized database:

```javascript
// Plugin data integration
gun.get('plugins').get('your-plugin').put(data)
```

### Plugin Components
Standard plugin components:
- **Main.vue** - Primary plugin interface
- **Settings.vue** - Plugin configuration
- **Sidebar.vue** - Navigation integration

## Example Plugins

### Events Plugin
Demonstrates:
- Real-time event management
- Complex UI interactions
- Backend integration (optional)

### Wiki Plugin
Demonstrates:
- Content creation and editing
- Search functionality
- Collaborative features

## Testing

Use the demo-frontend to test your plugins:
1. Start the development environment
2. Load your plugin in the host application
3. Test federation, data integration, and UI components

## Contributing

This repository serves as the foundation for all TopLocs plugins. Improvements to the development framework benefit the entire plugin ecosystem.

## Related Repositories

- **tribelike** - Core TopLocs platform
- **event-plugin** - Production event management plugin
- **wiki-plugin** - Production wiki plugin
- **location-plugin** - Location management plugin
- **link-plugin** - Link sharing plugin

## License

MIT License - See the main TopLocs project for details.
