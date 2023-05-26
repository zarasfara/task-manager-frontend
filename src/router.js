import { createRouter, createWebHistory } from "vue-router";
import Home from '@/views/Home.vue';
import PageNotFound from '@/views/PageNotFound.vue';

export default createRouter({
    history: createWebHistory(),
    fallback: true, // Включить fallback
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/projects',
            name: 'projects',
            // component: 
        },
        {
            path: '/:catchAll(.*)',
            name: 'NotFound',
            component: PageNotFound
        }
    ],
})