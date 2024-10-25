import { markRaw } from 'vue';

export async function loadPlugin(pluginUrl: string) {
  try {
    const pluginModule = await import(/* @vite-ignore */ pluginUrl);
    const PluginComponent = pluginModule.default;

    return markRaw(PluginComponent);
  } catch(e) {
    console.error(e);
  }
}
