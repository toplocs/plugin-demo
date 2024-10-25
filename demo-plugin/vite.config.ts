import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  /*server: {
    port: 3000,
  },*/
  define: {
    'process.env': {},
  },
  build: {
    lib: {
      entry: 'src/main.ts', // Entry point for the plugin
      name: 'PluginComponent',
      fileName: (format) => `pluginComponent.${format}.js`
    },
    outDir: './server/views',
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
