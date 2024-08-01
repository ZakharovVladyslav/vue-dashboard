import { createApp } from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import { MotionPlugin } from '@vueuse/motion';

createApp(App).use(store).use(MotionPlugin).use(router).mount('#app');
