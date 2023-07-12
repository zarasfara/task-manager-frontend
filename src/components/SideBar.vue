<template>
    <aside class="sm:order-1 desktop:w-1/4 md:w-1/3 sm:mt-3 md:mt-0 drop-shadow-md">
        <div class="bg-white mb-3 rounded-md p-2 px-4 flex justify-center flex-col text-base border border-gray-200">
            <p>Привет, <span class="font-bold">{{ authStore.isAuthenticated ? authStore.getUser?.name : 'no name' }}</span></p>
            <div class="flex mt-3">
                <p>Сессия: Не начата</p>
                <form class="ml-2 flex items-center" action="">
                    <button type="submit" class="p-0.5 px-2 bg-emerald-400 text-white rounded">Начать</button>
                </form>
            </div>
        </div>
        <div class="bg-white rounded-md p-2 pb-8 border border-gray-200">
            <div class="lg:flex ">
                <form class="flex items-center sm:flex-wrap lg:flex-nowrap" action="">
                    <input id="user-name" class="font-sans block w-full leading-4 py-1 px-3 ring-1 ring-slate-900/10 text-slate-500
                                       rounded shadow-sm desktop:mr-2 focus:ring-2 focus:ring-emerald-300"
                        placeholder="Введите" />
                    <button class="bg-emerald-400 rounded text-white p-1 px-2 focus:bg-emerald-500 md:w-auto
                                        sm:w-full md:mt-0 sm:mt-1" type="submit">
                        Поиск
                    </button>
                </form>
            </div>
            <div>
                <div class="text-center mt-4">
                    <h3 class="text-lg">Комментарии</h3>
                </div>
                <div class="comments-list mt-3">
                    <div class="comments-item">
                        <div class="comments-header">
                            <div class="text-sm comment-message mr-2 font-bold">
                                <span class="mr-3">Evgeniy Osipov</span>
                                <span class="text-gray-400 font-thin">10.23.2233</span>
                            </div>
                            <div class="text-sm mt-3 border-b border-gray-300 break-words pb-3">
                                <p>Can you send this over to the marketing department qwe qwe query / 
                                    <a href="#" class="text-emerald-500 font-bold">task project</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </aside>
</template>

<script setup>
import { useAuthStore } from "@/stores/auth.store";

const authStore = useAuthStore();


</script>

<style scoped></style>