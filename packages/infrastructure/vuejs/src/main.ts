import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import './assets/main.css';

import { dependencies } from '@/DependencyInjection';

const app = createApp(App);

app.use(router);
app.use(dependencies);

app.mount('#app');
