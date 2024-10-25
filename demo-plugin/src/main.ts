import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import PluginComponent from './components/PluginComponent.vue';

const isDev = import.meta.env.VITE_DEV === 'true';

if (isDev) {
	const app = createApp(App)

	app.use(router)

	app.mount('#app')
}

export default {
	...PluginComponent
};
