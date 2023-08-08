<template>
  <layout>
  
<div>
  <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-40 p-5 justify-center md:col-end-1 items-center content-center gap-5"
    >

      <div class="max-w-md py-4 px-8 bg-white shadow-xl rounded-lg my-20">
        <div class="flex justify-center md:justify-end -mt-16">
          <nuxt-img
            class="w-auto h-20 object-cover rounded-full border-2 border-indigo-500"
            src="SeedCode/clients/o83uhluhyqrew7itoukh"
            provider="cloudinary"
        loading="lazy"
          />
        </div>
        <div>
          <h2 class="text-gray-800 text-xl font-semibold opacity-75 mt-2">
            Afraco Corporaciones SA de CV
          </h2>
          <p class="mt-2 text-gray-600"></p>
        </div>
        <div class="flex justify-end mt-4">
          <a href="#" class="text-xl font-medium text-indigo-500">SeedCode</a>
        </div>
      </div>

      <div class="max-w-md py-4 px-8 bg-white shadow-xl rounded-lg my-20">
        <div class="flex justify-center md:justify-end -mt-16">
          <nuxt-img
            class="w-20 h-20 object-cover rounded-full border-2 border-indigo-500"
            src="SeedCode/clients/fvmgpvavloeiqymyopbm"
            provider="cloudinary"
        loading="lazy"
          />
        </div>
        <div>
          <h2 class="text-gray-800 text-xl font-semibold opacity-75 mt-2">
            Clínica de Diagnostico Veterinaria
          </h2>
          <p class="mt-2 text-gray-600"></p>
        </div>
        <div class="flex justify-end mt-4">
          <a href="#" class="text-xl font-medium text-indigo-500">SeedCode</a>
        </div>
      </div>
      <div class="max-w-md py-4 px-8 bg-white shadow-xl rounded-lg my-20">
        <div class="flex justify-center md:justify-end -mt-16">
          <nuxt-img
            class="w-20 h-20 object-cover rounded-full border-2 border-indigo-500"
            src="SeedCode/clients/gdrwsp8bz3bwjpmwdxpi"
            provider="cloudinary"
        loading="lazy"
          />
        </div>
        <div>
          <h2 class="text-gray-800 text-xl font-semibold opacity-75 mt-2">
            Funeraria Lirios de los Valle
          </h2>
          <p class="mt-2 text-gray-600"></p>
        </div>
        <div class="flex justify-end mt-4">
          <a href="#" class="text-xl font-medium text-indigo-500">SeedCode</a>
        </div>
      </div>
      <!-- 3 -->
      <!-- <div class="max-w-md py-4 px-8 bg-white shadow-xl rounded-lg my-20">
        <div class="flex justify-center md:justify-end -mt-16">
          <nuxt-img
            class="w-20 h-20 object-cover rounded-full border-2 border-indigo-500"
            src="SeedCode/clients/gdrwsp8bz3bwjpmwdxpi"
            provider="cloudinary"
        loading="lazy"
          />
        </div>
        <div>
          <h2 class="text-gray-800 text-xl font-semibold opacity-75 mt-2">
            Tienda las Épocas
          </h2>
          <p class="mt-2 text-gray-600"></p>
        </div>
        <div class="flex justify-end mt-4">
          <a href="#" class="text-xl font-medium text-indigo-500">SeedCode</a>
        </div>
      </div> -->
    </div>
</div>
  </layout>

  <footerComponent></footerComponent>
</template>

<script lang="ts" setup>
import Layout from "../src/components/Layout.vue";
import footerComponent from "../src/components/home/footerComponent.vue";
</script>

<style lang="scss" scoped></style>
