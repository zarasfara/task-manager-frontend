import Home from '@/views/Home.vue';
import PageNotFound from '@/views/errors/PageNotFound.vue';

export const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/login',
        name: 'login',
        component: import('@/views/Login/index.vue'),
        meta: {
            requiresAuth: false
        }
    },
    {
        path: '/projects',
        name: 'projects',
        component: Home,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/:catchAll(.*)',
        name: 'NotFound',
        component: PageNotFound
    }
];