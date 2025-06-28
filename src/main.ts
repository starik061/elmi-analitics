import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';

import './assets/main.scss';
import 'vue3-toastify/dist/index.css';
import Vue3Toastify, { toast } from 'vue3-toastify';

const app = createApp(App);

app.use(createPinia()).use(router).use(Vue3Toastify, {
  autoClose: 700,
  limit: 1,
  position: toast.POSITION.TOP_RIGHT,
  transition: toast.TRANSITIONS.SLIDE,
  hideProgressBar: true
});

app.mount('#app');
