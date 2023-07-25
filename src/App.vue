<template>
  <app-header v-if="!['login'].includes($route.name)" />
  <div :class="{ 'desktop:container mx-auto flex md:flex-row sm:flex-col mt-4': !['login'].includes($route.name) }">
    <main
      :class="{ 'desktop:w-4/5 md:w-2/3 md:mr-2 desktop:mr-2 bg-white rounded-md py-2.5 sm:mt-4 px-3 border border-gray-200 sm:order-2 drop-shadow-md': !['login'].includes($route.name) }">
      <router-view />
    </main>
    <side-bar v-if="!['login'].includes($route.name)" />
  </div>
</template>

<script setup>
import AppHeader from '@/components/Header.vue';
import SideBar from "@/components/SideBar.vue"

</script>

<style scoped></style>
