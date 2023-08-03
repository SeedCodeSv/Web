<template>
  <Layout />

  <head>
    <title>SeedCode</title>
  </head>

  <videoComponent></videoComponent>

  <div
    class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 p-5 md:p-10 mt-15"
  >
    <div class="max-w-sm mx-auto bg-white rounded-lg shadow-xl p-6">
      <div class="p-3 flex flex-col items-center">
        <p
          class="text-center font-black text-5xl md:text-7xl p-3 md:p-5 items-center drop-shadow-xl opacity-75"
        >
          6+
        </p>
        <p class="text-center text-lg md:text-xl font-semibold">
          Proyectos Completados
        </p>
        <p class="text-center text-base md:text-base">
          Nos hemos especializado en la creación de soluciones digitales de
          excelencia y vanguardia
        </p>
        <div class="mt-3">
          <nuxt-link
            to="/projects"
            type="button"
            class="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800"
          >
            Ver más
          </nuxt-link>
        </div>
      </div>
    </div>
    <div class="max-w-sm mx-auto bg-white rounded-lg shadow-xl p-6">
      <div class="p-3 flex flex-col items-center">
        <p
          class="text-center font-black text-5xl md:text-7xl p-3 md:p-5 items-center drop-shadow-xl opacity-75"
        >
          5+
        </p>
        <p class="text-center text-lg md:text-xl font-semibold">Clientes</p>
        <p class="text-center text-base md:text-base">
          Nuestra sólida cartera de proyectos exitosos refleja la confianza de
          nuestros clientes y nuestro enfoque profesional en la satisfacción del
          cliente.
        </p>
        <div class="mt-3">
          <nuxt-link
            to="/clients"
            type="button"
            class="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800"
          >
            Ver más
          </nuxt-link>
        </div>
      </div>
    </div>
    <div class="max-w-sm mx-auto bg-white rounded-lg shadow-xl p-6">
      <div class="p-3 flex flex-col items-center">
        <p
          class="text-center font-black text-5xl md:text-7xl p-3 md:p-5 items-center drop-shadow-xl opacity-75"
        >
          4+
        </p>
        <p class="text-center text-lg md:text-xl font-semibold">
          Años de Experiencia
        </p>
        <p class="text-center text-base md:text-base">
          Nuestra dedicación y experiencia nos han llevado a ser líderes
          expertos
        </p>
        <div class="mt-3">
          <nuxt-link
            to="/aboutPage"
            type="button"
            class="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800"
          >
            Ver más
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>

  <div class="flex justify-center text-center bg-[#062133] mt-10 sm:mt-15">
    <div class="w-full sm:w-2/3 m-1 justify-center text-white rounded-xl p-4">
      <div class="grid sm:grid-cols-1 lg:grid-cols-2">
        <div class="w-full h-70 sm:h-auto">
          <img
            class="rounded-xl h-full w-full object-cover"
            src="../assets/img/img-card.jpg"
          />
        </div>
        <div
          class="mt-4 lg:mt-0 px-5 w-full h-full grid place-content-center place-items-center"
        >
          <p class="text-base sm:text-lg opacity-75">
            SeedCode, una empresa líder en servicios tecnológicos, proporciona
            soluciones innovadoras y personalizadas para impulsar el crecimiento
            de negocios. Con un equipo altamente capacitado, nos enfocamos en
            brindar resultados excepcionales y satisfacer las necesidades de
            nuestros clientes.
          </p>
        </div>
      </div>
    </div>
  </div>

  <div class="mt-20">
    <div class="">
      <h5 class="text-center text-black font-black opacity-75 text-4xl">
        Servicios
      </h5>
    </div>
    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-11 gap-y-11 mt-4 p-10"
    >
      <div
        class="max-w-xs rounded-2xl overflow-hidden shadow-xl bg-white text-black mx-auto mt-6"
      >
        <div class="p-6">
          <img class="w-20 mx-auto" src="../assets/img/e-commerce.png" />
          <p class="text-center text-lg font-semibold mt-3">E-commerce</p>
          <p
            class="text-center text-base mt-3 grid place-content-center place-items-center"
          >
            Proporciona herramientas de pago seguras, administración de
            inventario y seguimiento de pedidos para una experiencia de compra
            satisfactoria.
          </p>
        </div>
      </div>
      <div
        class="max-w-xs rounded-2xl overflow-hidden shadow-xl bg-white text-black mx-auto mt-6"
      >
        <div class="p-6">
          <img class="w-20 mx-auto" src="../assets/img/laptop.png" />
          <p class="text-center text-lg font-semibold mt-3">Software</p>
          <p
            class="text-center text-base mt-3 grid place-content-center place-items-center"
          >
            Atrae nuevos clientes con tecnología de vanguardia para impulsar tu
            negocio hacia el éxito.
          </p>
        </div>
      </div>

      <div
        class="max-w-xs rounded-2xl overflow-hidden shadow-xl bg-white text-black mx-auto mt-6"
      >
        <div class="p-6">
          <img class="w-20 mx-auto" src="../assets/img/social-media.png" />
          <p class="text-center text-lg font-semibold mt-3">Redes Sociales</p>
          <p
            class="text-center text-base mt-3 grid place-content-center place-items-center"
          >
            Descubre el poder de nuestras estrategias innovadoras para destacar
            en el mercado.
          </p>
        </div>
      </div>

      <div
        class="max-w-xs rounded-2xl overflow-hidden shadow-xl bg-white text-black mx-auto mt-6"
      >
        <div class="p-6">
          <img class="w-20 mx-auto" src="../assets/img/navegador.png" />
          <p class="text-center text-lg font-semibold mt-3">Sitios Web</p>
          <p
            class="text-center text-base mt-3 grid place-content-center place-items-center"
          >
            Confía en nuestra experiencia para ofrecerte resultados
            excepcionales y una experiencia del usuario inigualable.
          </p>
        </div>
      </div>

      <div
        class="max-w-xs rounded-2xl overflow-hidden shadow-xl bg-white text-black mx-auto mt-6"
      >
        <div class="p-6">
          <img class="w-20 mx-auto" src="../assets/img/soporte-tecnico.png" />
          <p class="text-center text-lg font-semibold mt-3">Optimización Web</p>
          <p
            class="text-center text-base mt-3 grid place-content-center place-items-center"
          >
            Aumenta tu presencia y atrae a más clientes potenciales hacia tu
            negocio.
          </p>
        </div>
      </div>

      <div
        class="max-w-xs rounded-2xl overflow-hidden shadow-xl bg-white text-black mx-auto mt-6"
      >
        <div class="p-6">
          <img class="w-20 mx-auto" src="../assets/img/Soporte.png" />
          <p class="text-center text-lg font-semibold mt-3">Soporte</p>
          <p
            class="text-center text-base mt-3 grid place-content-center place-items-center"
          >
            Contamos contigo para alcanzar el éxito con apoyo y guía
            personalizados.
          </p>
        </div>
      </div>

      <div
        class="max-w-xs rounded-2xl overflow-hidden shadow-xl bg-white text-black mx-auto mt-6"
      >
        <div class="p-6">
          <img class="w-20 mx-auto" src="../assets/img/impresora.png" />
          <p class="text-center text-lg font-semibold mt-3">
            Facturación Electrónica
          </p>
          <p
            class="text-center text-base mt-3 grid place-content-center place-items-center"
          >
            Obtén soluciones tributarias a la medida y cambia a nuestra
            plataforma para una experiencia más conveniente y ajustada a tus
            requerimientos.
          </p>
        </div>
      </div>

      <div
        class="max-w-xs rounded-2xl overflow-hidden shadow-xl bg-white text-black mx-auto mt-6"
      >
        <div class="p-6">
          <img class="w-20 mx-auto" src="../assets/img/diseno.png" />
          <p class="text-center text-lg font-semibold mt-3">Diseño</p>
          <p
            class="text-center text-base mt-3 grid place-content-center place-items-center"
          >
            Ofrecemos servicios de diseño creativo y profesional para satisfacer
            tus necesidades visuales y destacar tu marca..
          </p>
        </div>
      </div>
    </div>
  </div>

  <div
    class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full mt-20"
  >
    <div class="overflow-hidden rounded-lg shadow-lg cursor-pointer">
      <img
        class="object-cover w-full h-48"
        src="../assets/img/Img1.jpg"
        alt="Flower and sky"
      />
    </div>
    <div class="overflow-hidden rounded-lg shadow-lg cursor-pointer">
      <img
        class="object-cover w-full h-48"
        src="../assets/img/Img2.jpg"
        alt="Flower and sky"
      />
    </div>

    <div class="overflow-hidden rounded-lg shadow-lg cursor-pointer">
      <img
        class="object-cover w-full h-48"
        src="../assets/img/Img3.jpg"
        alt="Flower and sky"
      />
    </div>

    <div class="overflow-hidden rounded-lg shadow-lg cursor-pointer">
      <img
        class="object-cover w-full h-48"
        src="../assets/img/Img4.jpg"
        alt="Flower and sky"
      />
    </div>
  </div>
  <footerComponent></footerComponent>
</template>

<script lang="ts" setup>
import videoComponent from "../src/components/home/videoComponent.vue";
import Layout from "../src/components/Layout.vue";
import footerComponent from "../src/components/home/footerComponent.vue";
</script>
