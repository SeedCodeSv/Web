<template>
  <!-- component -->
  <footer class="bg-[rgba(0,0,0,0.8)] dark:bg-gray-900 mt-20">
    <div class="container px-6 py-8 mx-auto">
      <div class="flex flex-col items-center text-center">
        <a href="#">
          <img
            class="w-auto h-10"
            src="/assets/css/img/LogoSeedCode.png"
          />
        </a>

        <p class="max-w-md mx-auto mt-4 text-white">
          Trabajando de la mano con tecnologías de fuerte demanda.
        </p>

        <div
          class="flex flex-col mt-4 sm:flex-row sm:items-center sm:justify-center"
        >
          <button
            class="w-full px-5 py-2 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md sm:mx-2 sm:order-2 sm:w-auto hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
          >
            Inicio
          </button>

          <button
            class="w-full px-5 py-2 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md sm:mx-2 sm:order-2 sm:w-auto hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
          >
            Ayuda
          </button>
        </div>
      </div>

      <hr class="my-10 border-gray-200 dark:border-gray-700" />

      <div class="flex flex-col items-center sm:flex-row sm:justify-between">
        <p class="text-sm text-gray-500">
          Copyright 2023 - Todos los derechos reservados por SeedCode.
        </p>

        <div class="flex mt-3 -mx-2 sm:mt-0">
          <a
            href="#"
            class="mx-2 text-sm text-gray-500 transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300"
            aria-label="Reddit"
          >
            Teams
          </a>
          <a
            href="#"
            class="mx-2 text-sm text-gray-500 transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300"
            aria-label="Reddit"
          >
            Privacy
          </a>
          <a
            href="#"
            class="mx-2 text-sm text-gray-500 transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300"
            aria-label="Reddit"
          >
            Cookies
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped></style>
