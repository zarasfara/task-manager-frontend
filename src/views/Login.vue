<template>
    <section class="flex justify-center items-center h-screen">

        <form id="login-form" class="bg-white shadow-md rounded px-6 pt-6 pb-8 w-full max-w-xs" @submit.prevent="login">
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
                    Email
                </label>

                <input class="transition ease-in-out duration-300 border-2 border-primary-500 rounded w-full py-2 px-3 text-gray-800 leading-tight
                            focus:ring-4 focus:ring-primary-300/40" id="email"
                    :class="errorMessages.email ? 'border-red-500 focus:ring-red-300/40' : ''" 
                    type="text" 
                    name="email"
                    placeholder="email" 
                    v-model.trim="form.email">

                <p v-if="errorMessages.email" class="mt-2 text-sm text-red-600 dark:text-red-500">
                    <span class="font-medium">{{ errorMessages.email }}</span>
                </p>
            </div>
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                    Password
                </label>

                <input class="transition ease-in-out duration-300 border-2 border-primary-500 rounded w-full py-2 px-3 text-gray-800 leading-tight
                            focus:ring-4 focus:ring-primary-300/40"
                    :class="errorMessages.password ? 'border-red-500 focus:ring-red-300/40' : ''" 
                    placeholder="password"
                    id="password" 
                    type="password" 
                    v-model.trim="form.password" 
                    name="password">

                <p v-if="errorMessages.password" class="mt-2 text-sm text-red-600 dark:text-red-500">
                    <span class="font-medium">{{ errorMessages.password }}</span>
                </p>

            </div>

            <div class="flex items-center justify-between">
                <button
                    class="transition ease-in-out bg-primary-500 hover:bg-primary-300 text-white font-bold py-2 px-4 rounded"
                    type="submit">
                    Войти
                </button>
            </div>
        </form>
    </section>
</template>

<script setup>
import axios from 'axios';
import { reactive } from "vue";
import { useRouter } from 'vue-router';
import { useAuthStore } from "@/stores/auth.store";
import { setAuthorizationHeader } from '@/api.js';

const router = useRouter();
const authStore = useAuthStore();

const form = reactive({
    email: "admin@mail.com",
    password: "admin",
})

const errorMessages = reactive({
    email: null,
    password: null,
});

const login = async () => {

    errorMessages.email = null
    errorMessages.password = null

    try {
        const response = await axios.post("/login", form)
        authStore.setUser(response.data)
        setAuthorizationHeader(localStorage.getItem('access_token'));

        router.push(
            { name: 'home' }
        )

    } catch (error) {
        if (error.response.status === 422) {
            const { errors } = error.response.data
            if (errors.email) {
                errorMessages.email = errors.email[0];
            }
            if (errors.password) {
                errorMessages.password = errors.password[0];
            }

        } else if (error.response.status === 401) {
            alert(error.response.data.errors);
        }
    }
}

</script>

<style scoped></style>