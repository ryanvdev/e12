import { createApp } from 'vue'
import './style.scss'
import App from './App.vue'
import { registerPlugins } from './plugins';

const app = createApp(App);

registerPlugins(app);
app.mount('#app')
