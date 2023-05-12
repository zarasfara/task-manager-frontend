<script>
import App from "../App.vue";

export default {
    name: "Home",
    components: {
        App,
    }
}
</script>

<template>
    <App>

        hello from Home component
        <!-- <div class="breadcrumb-container rounded mb-4">
            <ol class="list-none flex">
                <li class="text-slate-500 breadcrumb-item">
                    <a href="#">Главная</a>
                    <span class="mx-1">/</span>
                </li>
                <li class="text-slate-500 breadcrumb-item">
                    <a href="#">Задачи</a>
                </li>
            </ol>
        </div>
        <div class="statuses-list flex mb-3">
            <div class="p-1 px-2 rounded-md flex items-center cursor-pointer border border-gray-300 relative">
                <div id="filter-switcher" class="flex items-center">
                    <span class="mr-2 select-none">Фильтрация</span>
                    <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20">
                        <path
                            d="M9.5 16q-.208 0-.354-.146T9 15.5v-4.729L4.104 4.812q-.187-.25-.052-.531Q4.188 4 4.5 4h11q.312 0 .448.281.135.281-.052.531L11 10.771V15.5q0 .208-.146.354T10.5 16Zm.5-6.375L13.375 5.5H6.604Zm0 0Z" />
                    </svg>
                </div>
                <form id="filter-more"
                    class="bg-white rounded-md w-fit border border-gray-300 p-2 absolute top-10 scale-up-center w-200px hidden left-0 select-none">
                    <label class="block">
                        <span class="text-gray-700">Статусы</span>
                        <select class="block mt-1 rounded cursor-pointer">
                            <option>Все</option>
                            <option>Новые</option>
                            <option>Birthday</option>
                            <option>Other</option>
                        </select>
                    </label>
                </form>
            </div>
        </div>
        <hr>
        <div class="projects-list mt-4">
            <div class="projects-item p-2 mt-8">
                <div class="projects-item__header flex justify-between">
                    <div class="w-2/5">
                        <p class="font-bold">Название задачи / <a class="text-emerald-500" href="#">Название
                                проекта</a>
                        </p>
                        <div class="task-item__description mt-1.5 flex items-center text-sm">
                            <p class="expiration-date">выполнить до: 20.08.2002</p>
                            <p class="ml-3">Статус: <span
                                    class="bg-emerald-500 text-white rounded p-0.5 px-1">Активный</span></p>
                        </div>
                    </div>
                    <div class="w-3/5">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque ex, excepturi
                        exercitationem, fugiat id molestiae nulla reiciendis sed soluta, tenetur vel vero
                        voluptas voluptates! Debitis error et maiores molestiae veniam.
                    </div>
                </div>
                <div id="project-task" class="mt-3">
                    <button id="switcher-active-tasks" class="text-emerald-500 cursor-pointer">Активные задачи -1
                    </button>
                    <div class="projects-tasks__list hidden scale-up-ver-top h-0">
                        <div
                            class="active-task mt-1 ml-1.5 p-1.5 rounded border border-dashed border-rose-300 flex items-center justify-between max-h-7">
                            <div class="flex">
                                <form class="mr-2" action="">
                                    <input id="default-checkbox" type="checkbox" value=""
                                        class="w-4 h-4 rounded border-gray-300">
                                </form>
                                <p>Доделать задачу связаную чем то</p>
                            </div>
                            <form id="task-change-status" action="">
                                <select id="underline_select"
                                    class="cursor-pointer w-40 block py-2.5 px-0 w-100 text-sm text-black bg-transparent border-0 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                                    <option selected>Choose a country</option>
                                    <option value="US">United States</option>
                                    <option value="CA">Canada</option>
                                    <option value="FR">France</option>
                                    <option value="DE">Germany</option>
                                </select>
                            </form>
                        </div>
                        <div
                            class="active-task mt-1 ml-1.5 p-1.5 rounded border border-dashed border-rose-300 flex items-center justify-between max-h-7">
                            <div class="flex">
                                <form class="mr-2" action="">
                                    <input id="default-checkbox" type="checkbox" value=""
                                        class="w-4 h-4 rounded border-gray-300">
                                </form>
                                <p>Доделать задачу связанную с чем то</p>
                            </div>
                            <form id="task-change-status" action="">
                                <select id="underline_select"
                                    class="cursor-pointer w-40 block py-2.5 px-0 w-100 text-sm text-black bg-transparent border-0 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                                    <option selected>Choose a country</option>
                                    <option value="US">United States</option>
                                    <option value="CA">Canada</option>
                                    <option value="FR">France</option>
                                    <option value="DE">Germany</option>
                                </select>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div> -->
    </App>
</template>

<style scoped></style>
