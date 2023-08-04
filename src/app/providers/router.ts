import { createRouter, createWebHistory } from "vue-router";
import { useAuthStore } from "@/stores/auth.store";
import { routes } from '@/views/routes';

export const router = createRouter({
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