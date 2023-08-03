<template>
  <!-- component -->
  <footer class="mt-20">
    <div class="container px-6 py-8 mx-auto">
      <div class="flex items-center justify-center">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
          <div class="text-white">
            <p class="font-semibold">Dirección</p>
            <div class="flex mt-2 w-full">
              <nuxt-img
                class="w-6 h-6 max-h-6"
                src="icons/ubicacion.png"
                alt=""
                srcset=""
              />
              <p class=" whitespace-pre-line ml-3">Av. Santa Lucia, Sonzacate, Sonsonate, El Salvador</p>
            </div>
          </div>
          <div class="text-white">
            <p class="font-semibold">Contacto</p>
            <div class="flex mt-2">
              <div>
                <nuxt-img
                class="w-6 h-6 max-h-6"
                src="icons/signo-de-arroba.png"
                srcset=""
              />
              </div>
              <p class="ml-3">seedcodesv@gmail.com</p>
            </div>
            <div class="flex mt-2">
              <nuxt-img
              class="w-7 h-7 max-h-7"
                src="icons/ring-phone.png"
                alt=""
                srcset=""
              />
              <p class="ml-3">(503) 7392-1094</p>
            </div>
          </div>
          <div class="text-white">
            <p class="font-semibold">Redes sociales</p>
            <div class="flex mt-2">
              <nuxt-img
              class="w-6 h-6 max-h-6"
                src="icons/linkedin.png"
                alt=""
                srcset=""
              />
              <a
                class="ml-3"
                href="https://www.linkedin.com/company/seedcode-sv/"
                >LinkedIn</a
              >
            </div>
            <div class="flex mt-2">
              <nuxt-img
              class="w-6 h-6 max-h-6"
                src="icons/facebook.png"
                alt=""
                srcset=""
              />
              <a
                class="ml-3"
                href="https://www.facebook.com/profile.php?id=100095398894114"
                >Facebook</a
              >
            </div>
          </div>
        </div>
      </div>

      <hr class="my-10 border-gray-200 dark:border-gray-700" />

      <div class="flex flex-col items-center sm:flex-row sm:justify-between">
        <p class="text-sm text-gray-500">
          Copyright 2023 - Todos los derechos reservados por SeedCode.
        </p>

        <div class="flex -mx-2 sm:mt-0">
          <nuxt-img class="w-12" src="img/LogoSeedCode.png" alt="" srcset=""/>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup></script>

<style scoped>
footer {
  background-color: rgb(6, 33, 51);
}
</style>
