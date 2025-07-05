import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import federation from "@originjs/vite-plugin-federation";
import topLevelAwait from 'vite-plugin-top-level-await';

export default defineConfig({
  plugins: [
    vue(),
    federation({
        name: 'secure-demo-plugin',
        filename: 'plugin.js',
        // Expose different components for different plugin slots
        exposes: {
            './Main': './src/components/SecureDemo.vue',
            './Sidebar': './src/components/PluginSidebar.vue',
            './Settings': './src/components/PluginSettings.vue',
            './EntityProvider': './src/composables/secureProvider.ts',
            './EntityTypes': './src/types/entities.ts',
        },
        shared: ['vue']
    }),
    topLevelAwait({
      // The export name of top-level await promise for each chunk module
      promiseExportName: "__tla",
      // The function to generate import names of top-level await promise in each chunk module
      promiseImportName: i => `__tla_${i}`
    })
  ],
  /*server: {
    port: 3000,
  },*/
  /*define: {
    'process.env': {},
  },*/
  build: {
    outDir: './dist',
    /*lib: {
      entry: 'src/main.ts', // Entry point for the plugin
      name: 'ChatPlugin',
      fileName: (format) => `ChatPlugin.${format}.js`
    },*/
    /*rollupOptions: {
      // Ensure the component can be imported by the main app
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }*/
  }
});
