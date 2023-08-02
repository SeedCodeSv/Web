<template>
  <layout>
    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-40 p-5 justify-center md:col-end-1 items-center content-center gap-5"
    >
      <div class="max-w-md py-4 px-8 bg-white shadow-xl rounded-lg my-20">
        <div class="flex justify-center md:justify-end -mt-16">
          <img
            class="w-auto h-20 object-cover rounded-full border-2 border-indigo-500"
            src="../assets/clients/logo.png"
          />
        </div>
        <div>
          <h2 class="text-gray-800 text-3xl font-semibold">
            Afraco Corporaciones SA de CV
          </h2>
          <p class="mt-2 text-gray-600"></p>
          <div class="flex items-center justify-center">
            <img src="../assets/img/HojasDeLogo.png" class="w-20 h-auto p-3 rounded-full" />
          </div>
        </div>
        <div class="flex justify-end mt-4">
          <a href="#" class="text-xl font-medium text-indigo-500">SeedCode</a>
        </div>
      </div>

      <div class="max-w-md py-4 px-8 bg-white shadow-xl rounded-lg my-20">
        <div class="flex justify-center md:justify-end -mt-16">
          <img
            class="w-20 h-20 object-cover rounded-full border-2 border-indigo-500"
            src="../assets/clients/Clinica.png"
          />
        </div>
        <div>
          <h2 class="text-gray-800 text-3xl font-semibold">
            Clínica de Diagnostico Veterinaria
          </h2>
          <p class="mt-2 text-gray-600"></p>
          <div class="flex items-center justify-center">
            <img src="../assets/img/HojasDeLogo.png" class="w-20 h-auto p-3 rounded-full" />
          </div>
        </div>
        <div class="flex justify-end mt-4">
          <a href="#" class="text-xl font-medium text-indigo-500">SeedCode</a>
        </div>
      </div>
      <div class="max-w-md py-4 px-8 bg-white shadow-xl rounded-lg my-20">
        <div class="flex justify-center md:justify-end -mt-16">
          <img
            class="w-20 h-20 object-cover rounded-full border-2 border-indigo-500"
            src="../assets/clients/Funeraria.svg"
          />
        </div>
        <div>
          <h2 class="text-gray-800 text-3xl font-semibold">
            Funeraria Lirios de los Valle
          </h2>
          <p class="mt-2 text-gray-600"></p>
          <div class="flex items-center justify-center">
            <img src="../assets/img/HojasDeLogo.png" class="w-20 h-auto p-3 rounded-full" />
          </div>
        </div>
        <div class="flex justify-end mt-4">
          <a href="#" class="text-xl font-medium text-indigo-500">SeedCode</a>
        </div>
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
