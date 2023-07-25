<template>
  <!-- component -->
  <footer class="bg-[rgba(0,0,0,0.8)] dark:bg-gray-900 mt-20">
    <div class="container px-6 py-8 mx-auto">

      <div class="flex items-center justify-center">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <div class="text-white text-center">
            <p class="font-semibold">Dirección</p>
            <p>Av. Santa Lucia, Sonzacate, Sonsonate, El Salvador</p>
          </div>
          <div class="text-white text-center">
            <p class="font-semibold">Contacto</p>
            <p>seedCode@gmail.com</p>
            <p>+503 7777-8888</p>
          </div>
          <div class="text-white text-center">
            <p class="font-semibold">Sitio Web</p>
            <a href="https://seedcodesv.com/">www.SeedCode</a>
            <p>SeedCode</p>
          </div>
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
