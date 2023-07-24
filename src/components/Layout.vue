<template>
  <div class="relative overflow-hidden">
    <header
      class="fixed h-[15vh] w-full lg:px-16 px-4 bg-[rgba(0,0,0,0.8)] flex flex-wrap items-center py-4 shadow-md z-10"
    >
      <div class="flex-1 flex h-9 object-cover">
        <img class="w-auto" src="../../assets/css/img/TextSeedCodeWhite.png" alt="" />
      </div>
      <input class="hidden"/>

      <div class="md:flex md:items-center md:w-auto w-full">
        <nav>
          <ul
            class="md:flex items-center justify-between text-xl text-white pt-4 md:pt-0"
          >
            <li class="md:p-5 py-3 px-0">
              <nuxt-link to="/">Inicio</nuxt-link>
            </li>
            <li class="md:p-5 py-3 px-0">
              <nuxt-link to="/contact">Contacto</nuxt-link>
            </li>
            <li class="md:p-5 py-3 px-0">
              <nuxt-link to="/aboutPage">Acerca de</nuxt-link>
            </li>
            <!-- <li class="md:p-5 py-3 px-0 block">
              <nuxt-link to="/">Español</nuxt-link>
            </li> -->
          </ul>
        </nav>
      </div>
    </header>
  </div>


  <slot></slot>
</template>

<script lang="ts" setup>
import video from "./home/video.vue";
import { ref } from "vue";


const isMenuOpen = ref(false);

</script>

<style lang="scss" scoped></style>
