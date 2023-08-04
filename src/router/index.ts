import { createRouter, createWebHistory } from "vue-router";
import Home from '@/views/Home.vue';
import PageNotFound from '@/views/errors/PageNotFound.vue';
import { useAuthStore } from "@/stores/auth.store";

const routes = [
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

const router = createRouter({
    history: createWebHistory(),
    routes
});

router.beforeEach((to, from, next) => {
    const authStore = useAuthStore();
    const requiresAuth = to.meta.requiresAuth;
    if (requiresAuth && !authStore.isAuthenticated) {
        next('/login');
    } else if (to.name === 'login' && authStore.isAuthenticated) {
        next('/');
    } else {
        next();
    }
});

export default router;