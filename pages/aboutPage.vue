<template>
  <Layout>


    <div class="flex justify-center text-center mt-40 sm:mt-15">
      <div class="w-full sm:w-2/3 m-1 align-center text-black rounded-xl p-4">
        <div class="grid sm:grid-cols-1 lg:grid-cols-2">
          <div class="w-full h-70 sm:h-auto">
            <nuxt-img
              class="rounded-xl h-full w-full object-cover"
              src="img/mision.jpg"
            />
          </div>
          <div
            class="mt-4 lg:mt-0 px-5 w-full h-full grid place-content-center place-items-center"
          >
            <p class="text-base sm:text-lg font-semibold">Misión</p>
            <p class="text-base sm:text-lg">
              Diseñar y desarrollar software de calidad, enfocado en las
              necesidades del cliente. Superamos expectativas con soluciones
              personalizadas que impulsan la eficiencia y el crecimiento
              empresarial. Establecemos relaciones basadas en la confianza,
              colaboración y compromiso con la excelencia..
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="flex justify-center text-center mt-10 sm:mt-15">
      <div class="w-full sm:w-2/3 m-1 align-center text-black rounded-xl p-4">
        <div class="grid sm:grid-cols-1 lg:grid-cols-2">
          <div
            class="mt-4 lg:mt-0 px-5 w-full h-full grid place-content-center place-items-center"
          >
            <div class="p-4">
              <p class="text-base sm:text-lg font-semibold">Visión</p>
              <p class="text-base sm:text-lg">
                Ser reconocidos como líderes en el desarrollo de software,
                brindando soluciones tecnológicas innovadoras que impulsen el
                éxito de nuestros clientes en el mundo digital.
              </p>
            </div>
          </div>

          <div class="w-full h-70 sm:h-auto">
            <nuxt-img
              class="rounded-xl h-full w-full object-cover"
              src="img/vision-img.jpg"
              alt="Descripción de la imagen"
            />
          </div>
        </div>
      </div>
    </div>



    <footerComponent></footerComponent>
  </Layout>
</template>

<script lang="ts" setup>
import Layout from "../src/components/Layout.vue";
import footerComponent from "../src/components/home/footerComponent.vue";
</script>
