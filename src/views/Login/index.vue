<template>
    <section class="flex justify-center items-center h-screen">

        <form id="login-form" class="bg-white shadow-md rounded px-6 pt-6 pb-8 w-full max-w-xs" @submit.prevent="login">
            <div class="mb-4">

                <Input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="email"
                    v-model.trim="form.email"
                    :error="errorMessages.email"
                />

            </div>
            <div class="mb-4">

                <Input
                    id="password"
                    type="password"
                    name="password"
                    placeholder="password"
                    v-model.trim="form.password"
                    :error="errorMessages.password"
                />

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

<script setup lang="ts">
import axiosBase from "@/plugins/api/axiosBase";
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/stores/auth.store';
import { setAuthorizationHeader } from '@/utils/api';
import Input from './components/input.vue';

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
        const response = await axiosBase.post("/login", form)
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