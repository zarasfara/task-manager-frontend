<script setup>
import Header from './components/Header.vue';
import SideBar from "./components/SideBar.vue"

</script>

<template>
  <Header />
  <div class="desktop:container mx-auto flex md:flex-row sm:flex-col mt-4">
    <section
      class="main-block desktop:w-4/5 md:w-2/3 md:mr-2 desktop:mr-2 bg-white rounded-md py-2.5 sm:mt-4 px-3 border border-gray-200 sm:order-2 drop-shadow-md">
      <slot></slot>
    </section>
    <side-bar />
  </div>
</template>

<style scoped></style>
