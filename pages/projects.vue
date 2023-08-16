<template>
  <layout>
    <div
      class="banner mt-12 md:mt-20 bg-cover flex flex-col justify-center pl-5 md:pl-20 bg-center bg-no-repeat w-screen h-[450px]"
    >
      <h2 class="text-white text-[24px] md:text-[40px] font-bold">Nuestros</h2>
      <h2 class="text-white text-[24px] md:text-[40px] font-bold">Proyectos</h2>
      <p
        class="text-left w-[260px] md:w-[400px] mt-6 text-white text-sm md:text-lg"
      >
        Con 4 años de experiencia, seedcode sv lidera soluciones de software
        personalizadas y vanguardistas. Impulsamos el éxito de nuestros clientes
        con calidad y satisfacción garantizada.
      </p>
    </div>

    <div class="relative flex items-center justify-center w-screen mt-20">
      <div
        class="max-w-sm p-6 bg-[#062133] border border-gray-100 rounded-lg shadow-xl dark:bg-gray-800 dark:border-gray-800 dark:hover:bg-gray-700"
      >
        <h5
          class="mb-2 text-2xl font-bold tracking-tight text-center text-white dark:text-white opacity-30"
        >
          SeedCode SV
        </h5>
        <div class="flex justify-center">
          <nuxt-img
            class="object-cover rounded-xl"
            provider="cloudinary"
            src="SeedCode/img/wp6ldwxbebgo4szpvjjz"
            loading="lazy"
          />
        </div>
        <p
          class="mt-4 font-normal text-center text-white dark:text-gray-400 opacity-40"
        >
          Lamentablemente, esta sección del sitio se encuentra actualmente en
          mantenimiento para mejorar la experiencia del usuario. Pronto estará
          disponible con nuevas funciones y contenido mejorado. Disculpa las
          molestias.
        </p>
        <div
          role="status"
          class="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
        >
          <svg
            aria-hidden="true"
            class="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span class="sr-only">Loading...</span>
        </div>
      </div>
    </div>

    <!-- First -->
    <!-- <div class="w-screen flex justify-start p-10 animate__animated animate__fadeInLeft">
      <div class="w-[95vw] lg:w-[80vw] xl:w-[70vw] flex flex-col lg:flex-row border shadow rounded-2xl">
        <div class="w-[100%] lg:w-[35%] h-full p-8">
          <p class="font-semibold text-xl">
            Clínica de diagnostico veterinario
          </p>
          <p>(2020 - 2021)</p>
          <p class="text-sm md:text-base lg:text-lg mt-4">
            Siendo el primer cliente que confió en el software de calidad que le
            ofrecimos conteniendo funciones como
          </p>
          <ul class="mt-5">
            <li class="mt-2 text-sm lg:text-base">
              ✓ Consultas en tiempo real
            </li>
            <li class="mt-2 text-sm lg:text-base">
              ✓ Administración de citas
            </li>
            <li class="mt-2 text-sm lg:text-base">
              ✓ Recordatorios personalizados
            </li>
            <li class="mt-2 text-sm lg:text-base">
              ✓ Aplicación para clientes
            </li>
            <li class="mt-2 text-sm lg:text-base">
              ✓ Administración de ventas
            </li>
          </ul>
        </div>
        <div class="w-[100%] lg:w-[65%] p-8">
          <nuxt-img
            class="rounded-2xl shadow"
            src="/projects/clinica.png"
            alt=""
          />
        </div>
      </div>
    </div> -->
    <!-- 2 -->
    <!-- <div class="w-screen flex justify-end p-10 animate__animated animate__fadeInRight">
      <div class="w-[95vw] lg:w-[80vw] xl:w-[70vw]  flex flex-col lg:flex-row border shadow rounded-2xl">
        <div class="w-[65%] hidden lg:flex p-8">
          <nuxt-img
            class="rounded-2xl shadow"
            src="/projects/web.png"
            alt=""
          />
        </div>
        <div class="w-[100%] lg:w-[35%] h-full p-8">
          <p class="font-semibold text-xl">
            Tienda las épocas
          </p>
          <p>(2021 - 2022)</p>
          <p class="text-sm md:text-base lg:text-lg mt-4">
            Software diseñado para la administración de ventas e inventario
            contiene funciones como:
          </p>
          <ul class="mt-5">
            <li class="mt-2 text-sm lg:text-base">
              ✓ Ventas en tiempo real
            </li>
            <li class="mt-2 text-sm lg:text-base">
              ✓ Reportería personalizada
            </li>
            <li class="mt-2 text-sm lg:text-base">
              ✓ Administración de ventas
            </li>
            <li class="mt-2 text-sm lg:text-base">
              ✓ Gestión de inventario
            </li>
            <li class="mt-2 text-sm lg:text-base">
              ✓ Lector de códigos de barra
            </li>
          </ul>
        </div>
        <div class="w-[100%] lg:w-[35%] flex lg:hidden p-8">
          <nuxt-img
            class="rounded-2xl shadow"
            src="/projects/web.png"
            alt=""
          />
        </div>
      </div>
    </div> -->
    <!-- 3 -->
    <!-- <div class="w-screen flex justify-start p-10 animate__animated animate__fadeInLeft">
      <div class="w-[95vw] lg:w-[80vw] xl:w-[70vw]  flex flex-col lg:flex-row border shadow rounded-2xl">
        <div class="w-[100%] lg:w-[35%] h-full p-8">
          <p class="font-semibold text-lg lg:text-xl">
            Afraco Corporaciones 
          </p>
          <p>(2022 - 2023)</p>
          <p class="text-sm md:text-base lg:text-lg mt-4">
            Software diseñado a la medida para las necesidades contiene funciones como:
          </p>
          <ul class="mt-5">
            <li class="mt-2 text-sm lg:text-base">
              ✓ Ventas en tiempo real
            </li>
            <li class="mt-2 text-sm lg:text-base">
              ✓ Chat personalizado
            </li>
            <li class="mt-2 text-sm lg:text-base">
              ✓ Disco en la nube integrado
            </li>
            <li class="mt-2 text-sm lg:text-base">
              ✓ Servicios programados
            </li>
            <li class="mt-2 text-sm lg:text-base">
              ✓ Punto de ventas
            </li>
            <li class="mt-2 text-sm lg:text-base">
              ✓ Reportes personalizados
            </li>
            <li class="mt-2 text-sm lg:text-base">
              ✓ Administración de inventario
            </li>
            <li class="mt-2 text-sm lg:text-base">
              Entre otros...
            </li>
          </ul>
        </div>
        <div class="w-[100%] lg:w-[65%] p-8">
          <nuxt-img
            class="rounded-2xl shadow"
            src="../assets/projects/afraco.png"
            alt=""
          />
        </div>
      </div>
    </div> -->
    <!-- 3 -->
    <!-- <div class="w-screen flex justify-end p-10 animate__animated animate__fadeInRight">
      <div class="w-[95vw] lg:w-[80vw] xl:w-[70vw]  flex flex-col lg:flex-row border shadow rounded-2xl">
        <div class="w-[65%] hidden lg:flex p-8">
          <nuxt-img
            class="rounded-2xl shadow"
            src="/projects/PuntoDeVentas.png"
            alt=""
          />
        </div>
        <div class="w-[100%] lg:w-[35%] h-full p-8">
          <p class="font-semibold text-xl">
            SeedCode SV
          </p>
          <p>(2023)</p>
          <p class="text-sm md:text-base lg:text-lg mt-4">
            Software diseñado para la administración de ventas e inventario
            contiene funciones como:
          </p>
          <ul class="mt-5">
            <li class="mt-2 text-sm lg:text-base">
              ✓ Carrito de compras
            </li>
            <li class="mt-2 text-sm lg:text-base">
              ✓ Ventas en tiempo real
            </li>
            <li class="mt-2 text-sm lg:text-base">
              ✓ Administración de ventas
            </li>
            <li class="mt-2 text-sm lg:text-base">
              ✓ Gestión de inventario
            </li>
            <li class="mt-2 text-sm lg:text-base">
              ✓ Lector de códigos de barra o pantalla táctil
            </li>
          </ul>
        </div>
        <div class="w-[100%] lg:w-[35%] flex lg:hidden p-8">
          <nuxt-img
            class="rounded-2xl shadow"
            provider="cloudinary"
            src="projects/vylj5gkjyogzaqz9zafn"
            loading="lazy"
            alt=""
          />
        </div>
      </div>
    </div>
     -->
    <footer-component />
  </layout>
</template>

<script lang="ts" setup>
import Layout from "../src/components/Layout.vue";
import footerComponent from "../src/components/home/footerComponent.vue";
</script>

<style lang="css" scoped>
.banner {
  background-image: url("../assets/img/banner.png");
}
</style>
