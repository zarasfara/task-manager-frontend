import { createApp } from 'vue';
import '@/assets/main.css';
import App from '@/App.vue';
import router from './router';
import axios from 'axios';
import { createPinia } from 'pinia'


axios.defaults.baseURL = 'http://localhost:8000/api';
axios.defaults.headers.common['Authorization'] = "Bearer " + localStorage.getItem('access_token');
axios.defaults.headers.post['Content-Type'] = 'application/json';

const pinia = createPinia()

createApp(App)
    .use(pinia)
    .use(router)
    .mount('#app')