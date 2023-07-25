<template>
  <div class="relative overflow-hidden">
    <!-- <header
      class="fixed h-[15vh] w-full lg:px-16 px-4 bg-[rgba(0,0,0,0.8)] flex flex-wrap items-center py-4 shadow-md z-10"
    >
      <div class="flex-1 flex h-9 object-cover">
        <img
          class="w-auto"
          src="../../assets/css/img/TextSeedCodeWhite.png"
          alt=""
        />
      </div>
      <input class="hidden" />
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
          </ul>
        </nav>
      </div>
    </header> -->
    <header class="fixed h-auto w-full z-10 lg:px-16 px-4 bg-[rgba(0,0,0,0.8)] sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-3">
    <div class="flex items-center justify-between px-4 py-3 sm:p-0">
      <div>
        <img class="h-8" src="../../assets/css/img/TextSeedCodeWhite.png" alt="Workcation">
      </div>
      <div class="sm:hidden">
        <button @click="isOpen = !isOpen" type="button" class="block text-gray-500 hover:text-white focus:text-white focus:outline-none">
          <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
            <path v-if="isOpen" fill-rule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"/>
            <path v-if="!isOpen" fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>
          </svg>
        </button>
      </div>
    </div>
      <nav :class="isOpen ? 'block' : 'hidden'" class="px-2 pt-2 pb-4 sm:flex sm:p-0">

            <li class="md:p-5 block px-2 py-1 text-xl text-white">
              <nuxt-link to="/">Inicio</nuxt-link>
            </li>
            <li class="md:p-5 block px-2 py-1 text-xl text-white">
              <nuxt-link to="/contact">Contacto</nuxt-link>
            </li>
            <li class="md:p-5 block px-2 py-1 text-xl text-white">
              <nuxt-link to="/aboutPage">Acerca de</nuxt-link>
            </li>
 
    </nav>
  </header>
  </div>

  <slot></slot>
</template>

<script lang="ts" setup>
import video from "./home/video.vue";
import { ref } from "vue";
import { OhVueIcon } from "oh-vue-icons";

const isOpen = ref(false);


</script>

<style lang="scss" scoped></style>
