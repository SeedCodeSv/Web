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
                src="SeedCode/icons/k5wxnjuezdj3r0mkkwav"
                alt=""
                provider="cloudinary" loading="lazy"
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
                src="SeedCode/icons/ev2epplxgv0bnz9zdko2"
                srcset=""
                provider="cloudinary" loading="lazy"
              />
              </div>
              <p class="ml-3">seedcodesv@gmail.com</p>
            </div>
            <div class="flex mt-2">
              <nuxt-img
              class="w-7 h-7 max-h-7"
                src="SeedCode/icons/whl2qqt4dvncjbfrtbb5"
                alt=""
                srcset=""
                provider="cloudinary" loading="lazy"
              />
              <p class="ml-3">(503) 7392-1094</p>
            </div>
          </div>
          <div class="text-white">
            <p class="font-semibold">Redes sociales</p>
            <div class="flex mt-2">
              <nuxt-img
              class="w-6 h-6 max-h-6"
                src="SeedCode/icons/lwltesvvxmfbiq0zy8ro"
                alt=""
                srcset=""
                provider="cloudinary" loading="lazy"
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
                src="SeedCode/icons/dyibkysgup25uzniargw"
                provider="cloudinary" loading="lazy"
                alt="SeedCode"
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
          <nuxt-img class="w-12" src="SeedCode/img/hju1ez7gx0m6jftb58xn" provider="cloudinary" loading="lazy" alt="" srcset=""/>
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
