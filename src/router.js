import { createRouter, createWebHistory } from "vue-router";
import Home from '@/views/Home.vue';
import PageNotFound from '@/views/PageNotFound.vue';
import Login from "@/views/Login.vue";
import { useAuthStore } from "@/stores/auth.store";

const router = createRouter({
    history: createWebHistory(),
    fallback: true, // Включить fallback
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/projects',
            name: 'projects',
            meta: {
                requiresAuth: true // Маршрут требует аутентификации
            }
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/:catchAll(.*)',
            name: 'NotFound',
            component: PageNotFound
        }
    ],
});

router.beforeResolve((to, from, next) => {
    const authStore = useAuthStore();

    if (to.meta.requiresAuth && !authStore.isAuthenticated) {
        next('/login');
    } else {
        next();
    }
});

export default router;