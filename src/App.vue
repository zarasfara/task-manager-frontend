<script>
import AppHeader from './components/Header.vue';
import SideBar from "./components/SideBar.vue"

export default {
  name: "Layout",
  components: {
    AppHeader,
    SideBar
  }
}

</script>

<template>
  <app-header />
  <div class="desktop:container mx-auto flex md:flex-row sm:flex-col mt-4">
    <section class="main-block desktop:w-4/5 md:w-2/3 md:mr-2 desktop:mr-2 bg-white rounded-md
                        py-2.5 sm:mt-4 px-3 border border-gray-200 sm:order-2 drop-shadow-md">
      <router-view></router-view>
    </section>
    <side-bar />
  </div>
</template>


<style scoped></style>
