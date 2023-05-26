<script>

export default {
    name: "Header",
}


</script>

<template>
    <header>
        <nav class="border-gray-200 px-4 desktop:pt-3 lg:px-6 sm:py-2.5 md:py-2.5">
            <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-2xl relative">
                <a href="https://flowbite.com" class="flex items-center">
                    <img src="https://flowbite.com/docs/images/logo.svg" class="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
                    <span class="self-center text-xl font-semibold whitespace-nowrap">CRM</span>
                </a>
                <!--modal start-->
                <div class="modal">
                    <button data-collapse-toggle="mobile-menu-2" type="button" @click="showModal"
                        class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                        aria-controls="mobile-menu-2" aria-expanded="false">
                        <span class="sr-only">Open main menu</span>
                        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                clip-rule="evenodd"></path>
                        </svg>
                        <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </button>
                </div>
                <!--modal end-->
                <div class="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1 sm:absolute sm:top-12 sm:z-10 sm:bg-white sm:rounded-lg sm:border sm:border-gray-100"
                    id="mobile-menu-2">
                    <ul class="flex flex-col sm:mt-4 font-medium lg:flex-row lg:space-x-8 sm:mt-0">
                        <li>
                            <router-link
                                class="text-gray-400 block py-2 pr-4 pl-3 rounded desktop:bg-transparent lg:p-0 hover:text-primary-600"
                                :to="{ name: 'home' }">Главная</router-link>
                        </li>
                        <li>
                            <router-link
                                class="block py-2 pr-4 pl-3 text-gray-400 border-gray-100 desktop:hover:bg-transparent desktop:border-0 hover:text-primary-600 lg:p-0"
                                :to="{ name: 'projects' }">Проекты</router-link>
                        </li>
                        <li>
                            <a class="block py-2 pr-4 pl-3 text-gray-400 border-gray-100 lg:hover:bg-transparent lg:border-0 hover:text-primary-600 lg:p-0"
                                href="#">
                                Пользователи
                            </a>
                        </li>

                        <li>
                            <a class="block py-2 pr-4 pl-3 text-gray-400 border-gray-100 lg:hover:bg-transparent lg:border-0 hover:text-primary-600 lg:p-0"
                                href="#">
                                Личный кабинет
                            </a>
                        </li>

                        <li>
                            <a
                                class="block py-2 pr-4 pl-3 text-gray-400 border-gray-100 lg:hover:bg-transparent lg:border-0 desktop:hover:text-primary-600 lg:p-0">
                                Панель администратора
                            </a>
                        </li>
                        <li>
                            <a href="#"
                                class="block py-2 pr-4 pl-3 rounded desktop:bg-transparent text-gray-400 lg:p-0 desktop:hover:text-primary-600"
                                aria-current="page">Выход
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>

<style scoped></style>