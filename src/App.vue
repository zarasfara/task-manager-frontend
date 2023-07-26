<template>
  <app-header v-if="!['login', 'NotFound'].includes($route.name as string)" />
  <div :class="{ 'desktop:container mx-auto flex md:flex-row sm:flex-col mt-4': !['login', 'NotFound'].includes($route.name as string) }">
    <main
      :class="{ 'desktop:w-4/5 md:w-2/3 md:mr-2 desktop:mr-2 bg-white rounded-md py-2.5 sm:mt-4 px-3 border border-gray-200 sm:order-2 drop-shadow-md': !['login', 'NotFound'].includes($route.name as string) }">
      <router-view />
    </main>
    <side-bar v-if="!['login', 'NotFound'].includes($route.name as string)" />
  </div>
</template>

<script setup lang="ts">
import AppHeader from '@/components/Header.vue';
import SideBar from "@/components/SideBar.vue"


</script>

<style scoped></style>
