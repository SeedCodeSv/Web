<template>
  <Layout>
    <div>
      <div
        class="flex flex-col md:flex-row gap-5 p-10 mt-40 justify-center items-center content-center"
      >
        <div
          class="block w-full md:w-1/2 rounded-lg bg-white text-center dark:bg-neutral-700 shadow"
        >
          <div
            class="border-b-2 text-xl font-medium opacity-0.5 border-neutral-100 px-6 py-3 dark:border-neutral-600 dark:text-neutral-50"
          >
            Misión
          </div>
          <div class="p-6 flex flex-col items-center">
            <img
              src="../assets/css/img/mision.jpg"
              class="rounded-full w-32 h-32 md:w-40 md:h-40 object-cover mb-4"
              alt=""
            />
            <p class="text-base text-neutral-700 dark:text-neutral-200">
              Nuestra misión es diseñar y desarrollar software de calidad,
              centrado en las necesidades de nuestros clientes. A través de
              nuestra experiencia técnica y enfoque orientado al cliente,
              buscamos superar las expectativas y ofrecer soluciones
              personalizadas que impulsen la eficiencia, la productividad y el
              crecimiento empresarial. Nos esforzamos por establecer relaciones
              duraderas con nuestros clientes, basadas en la confianza, la
              colaboración y el compromiso con la excelencia.
            </p>
          </div>
          <div
            class="border-t-2 border-neutral-100 px-6 py-3 dark:border-neutral-600 dark:text-neutral-50"
          >
            SeedCode
          </div>
        </div>
      </div>

      <div
        class="flex flex-col md:flex-row gap-5 p-10 mt-30 justify-center items-center content-center"
      >
        <div
          class="block w-full md:w-1/2 rounded-lg bg-white text-center dark:bg-neutral-700 shadow"
        >
          <div
            class="border-b-2 text-xl font-medium opacity-0.5 border-neutral-100 px-6 py-3 dark:border-neutral-600 dark:text-neutral-50"
          >
            Visión
          </div>
          <div class="p-6 flex flex-col items-center">
            <img
              src="../assets/css/img/vision.jpg"
              class="rounded-full w-32 h-32 md:w-40 md:h-40 object-cover mb-4"
              alt=""
            />
            <p class="text-base text-neutral-700 dark:text-neutral-200">
              Ser reconocidos como líderes en el desarrollo de software,
              brindando soluciones tecnológicas innovadoras que impulsen el
              éxito de nuestros clientes en el mundo digital.
            </p>
          </div>
          <div
            class="border-t-2 border-neutral-100 px-6 py-3 dark:border-neutral-600 dark:text-neutral-50"
          >
            SeedCode
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
