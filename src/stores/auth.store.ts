import { defineStore } from "pinia";
import { ref, computed } from 'vue';
import type { ComputedRef } from 'vue';
import type { User } from '@/types/auth';

interface AuthStore {
  getUser: ComputedRef<User | null>;
  isAuthenticated: ComputedRef<boolean>;
  setUser: (data: { user: User; access_token: string }) => void;
  clearUser: () => void;
}

export const useAuthStore = defineStore('auth', () => {
  const user = ref<User | null>(null);

  const storedUser = localStorage.getItem('user');
  if (storedUser !== null) {
    user.value = JSON.parse(storedUser);
  }

  const getUser = computed(() => user.value);
  const isAuthenticated = computed(() => !!user.value);

  const setUser = (data: { user: User; access_token: string }) => {
    user.value = data.user;
    localStorage.setItem('user', JSON.stringify(data.user));
    localStorage.setItem('access_token', data.access_token);
  };

  const clearUser = (): void => {
    user.value = null;
    localStorage.removeItem('user');
    localStorage.removeItem('access_token');
  };

  return {
    getUser,
    setUser,
    clearUser,
    isAuthenticated,
  } as AuthStore;
});