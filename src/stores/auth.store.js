import { defineStore } from "pinia";
import { ref, computed } from 'vue';

export const useAuthStore = defineStore('auth', () => {
  const user = ref(JSON.parse(localStorage.getItem('user')) || null);

  const getUser = computed(() => user.value);
  const isAuthenticated = computed(() => !!user.value);

  const setUser = data => {
    user.value = data.user;
    localStorage.setItem('user', JSON.stringify(data.user));
    localStorage.setItem('access_token', data.access_token);
  };

  const clearUser = () => {
    user.value = null;
    localStorage.removeItem('user');
    localStorage.removeItem('access_token');
  };

    return {
      getUser,
      setUser,
      clearUser,
      isAuthenticated,
    };
  }
);
