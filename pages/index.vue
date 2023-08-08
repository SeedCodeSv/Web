<template>
  <Layout />
  <meta
    name="keywords"
    content="seedcode, seedcodesv, SEEDCODE, SEEDCODESV, SeedCode, SeedCodeSV, seed, code, seedCode, seedCodeSV"
  />
  <head>
    <title>SeedCode</title>
  </head>

  <videoComponent></videoComponent>

  <div
    class="grid grid-cols-1 gap-2 p-5 md:grid-cols-2 lg:grid-cols-3 md:p-10 mt-15"
  >
    <div class="max-w-sm p-6 mx-auto bg-white rounded-lg shadow-xl">
      <div class="flex flex-col items-center p-3">
        <p
          class="items-center p-3 text-5xl font-black text-center opacity-75 md:text-7xl md:p-5 drop-shadow-xl"
        >
          6+
        </p>
        <p class="text-lg font-semibold text-center md:text-xl">
          Proyectos Completados
        </p>
        <p class="text-base text-center md:text-base">
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
    <div class="max-w-sm p-6 mx-auto bg-white rounded-lg shadow-xl">
      <div class="flex flex-col items-center p-3">
        <p
          class="items-center p-3 text-5xl font-black text-center opacity-75 md:text-7xl md:p-5 drop-shadow-xl"
        >
          5+
        </p>
        <p class="text-lg font-semibold text-center md:text-xl">Clientes</p>
        <p class="text-base text-center md:text-base">
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
    <div class="max-w-sm p-6 mx-auto bg-white rounded-lg shadow-xl">
      <div class="flex flex-col items-center p-3">
        <p
          class="items-center p-3 text-5xl font-black text-center opacity-75 md:text-7xl md:p-5 drop-shadow-xl"
        >
          4+
        </p>
        <p class="text-lg font-semibold text-center md:text-xl">
          Años de Experiencia
        </p>
        <p class="text-base text-center md:text-base">
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
    <div class="justify-center w-full p-4 m-1 text-white sm:w-2/3 rounded-xl">
      <div class="grid sm:grid-cols-1 lg:grid-cols-2">
        <div class="w-full h-70 sm:h-auto">
          <nuxt-img
            class="object-cover w-full h-full rounded-xl"
            provider="cloudinary"
            src="SeedCode/img/zmomger5myanynrtylt7"
            loading="lazy"
          />
        </div>
        <div
          class="grid w-full h-full px-5 mt-4 lg:mt-0 place-content-center place-items-center"
        >
          <p class="text-base opacity-75 sm:text-lg">
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
      <h5 class="text-4xl font-black text-center text-black opacity-75">
        Servicios
      </h5>
    </div>
    <div
      class="grid grid-cols-1 p-10 mt-4 md:grid-cols-2 lg:grid-cols-4 gap-x-11 gap-y-11"
    >
      <div
        class="max-w-xs mx-auto mt-6 overflow-hidden text-black bg-white shadow-xl rounded-2xl"
      >
        <div class="p-6">
          <nuxt-img
            class="w-20 mx-auto"
            src="SeedCode/img/nvhjhybcdgixwcsun5my"
            provider="cloudinary"
            loading="lazy"
          />
          <p class="mt-3 text-lg font-semibold text-center">E-commerce</p>
          <p
            class="grid mt-3 text-base text-center place-content-center place-items-center"
          >
            Proporciona herramientas de pago seguras, administración de
            inventario y seguimiento de pedidos para una experiencia de compra
            satisfactoria.
          </p>
        </div>
      </div>
      <div
        class="max-w-xs mx-auto mt-6 overflow-hidden text-black bg-white shadow-xl rounded-2xl"
      >
        <div class="p-6">
          <nuxt-img
            class="w-20 mx-auto"
            src="SeedCode/img/b9seedgocrkrj0lwitgy"
            provider="cloudinary"
            loading="lazy"
          />
          <p class="mt-3 text-lg font-semibold text-center">Software</p>
          <p
            class="grid mt-3 text-base text-center place-content-center place-items-center"
          >
            Atrae nuevos clientes con tecnología de vanguardia para impulsar tu
            negocio hacia el éxito.
          </p>
        </div>
      </div>

      <div
        class="max-w-xs mx-auto mt-6 overflow-hidden text-black bg-white shadow-xl rounded-2xl"
      >
        <div class="p-6">
          <nuxt-img
            class="w-20 mx-auto"
            src="SeedCode/img/mrcwsfymjbun3u6n8uqs"
            provider="cloudinary"
            loading="lazy"
          />
          <p class="mt-3 text-lg font-semibold text-center">Redes Sociales</p>
          <p
            class="grid mt-3 text-base text-center place-content-center place-items-center"
          >
            Descubre el poder de nuestras estrategias innovadoras para destacar
            en el mercado.
          </p>
        </div>
      </div>

      <div
        class="max-w-xs mx-auto mt-6 overflow-hidden text-black bg-white shadow-xl rounded-2xl"
      >
        <div class="p-6">
          <nuxt-img
            class="w-20 mx-auto"
            src="SeedCode/img/olcgnpo6bqgb9q2dn599"
            provider="cloudinary"
            loading="lazy"
          />
          <p class="mt-3 text-lg font-semibold text-center">Sitios Web</p>
          <p
            class="grid mt-3 text-base text-center place-content-center place-items-center"
          >
            Confía en nuestra experiencia para ofrecerte resultados
            excepcionales y una experiencia del usuario inigualable.
          </p>
        </div>
      </div>

      <div
        class="max-w-xs mx-auto mt-6 overflow-hidden text-black bg-white shadow-xl rounded-2xl"
      >
        <div class="p-6">
          <nuxt-img
            class="w-20 mx-auto"
            src="SeedCode/img/o5jli8wvwc1hknrxm7g5"
            provider="cloudinary"
            loading="lazy"
          />
          <p class="mt-3 text-lg font-semibold text-center">Optimización Web</p>
          <p
            class="grid mt-3 text-base text-center place-content-center place-items-center"
          >
            Aumenta tu presencia y atrae a más clientes potenciales hacia tu
            negocio.
          </p>
        </div>
      </div>

      <div
        class="max-w-xs mx-auto mt-6 overflow-hidden text-black bg-white shadow-xl rounded-2xl"
      >
        <div class="p-6">
          <nuxt-img
            class="w-20 mx-auto"
            src="SeedCode/img/zwzwfgnbddmwl8cpaswj"
            provider="cloudinary"
            loading="lazy"
          />
          <p class="mt-3 text-lg font-semibold text-center">Soporte</p>
          <p
            class="grid mt-3 text-base text-center place-content-center place-items-center"
          >
            Contamos contigo para alcanzar el éxito con apoyo y guía
            personalizados.
          </p>
        </div>
      </div>

      <div
        class="max-w-xs mx-auto mt-6 overflow-hidden text-black bg-white shadow-xl rounded-2xl"
      >
        <div class="p-6">
          <nuxt-img
            class="w-20 mx-auto"
            src="SeedCode/img/jtrsxsxkosalebfixjym"
            provider="cloudinary"
            loading="lazy"
          />
          <p class="mt-3 text-lg font-semibold text-center">
            Facturación Electrónica
          </p>
          <p
            class="grid mt-3 text-base text-center place-content-center place-items-center"
          >
            Obtén soluciones tributarias a la medida y cambia a nuestra
            plataforma para una experiencia más conveniente y ajustada a tus
            requerimientos.
          </p>
        </div>
      </div>

      <div
        class="max-w-xs mx-auto mt-6 overflow-hidden text-black bg-white shadow-xl rounded-2xl"
      >
        <div class="p-6">
          <nuxt-img
            class="w-20 mx-auto"
            src="SeedCode/img/hj3phza9irky76o1sq7r"
            provider="cloudinary"
            loading="lazy"
          />
          <p class="mt-3 text-lg font-semibold text-center">Diseño</p>
          <p
            class="grid mt-3 text-base text-center place-content-center place-items-center"
          >
            Ofrecemos servicios de diseño creativo y profesional para satisfacer
            tus necesidades visuales y destacar tu marca..
          </p>
        </div>
      </div>
    </div>
  </div>

  <div
    class="grid w-full grid-cols-1 gap-6 mt-20 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
  >
    <div class="overflow-hidden rounded-lg shadow-lg cursor-pointer">
      <nuxt-img
        class="object-cover w-full h-48"
        src="SeedCode/img/bgrq5dlikmmgiamt37tc"
        alt="Flower and sky"
        provider="cloudinary"
        loading="lazy"
      />
    </div>
    <div class="overflow-hidden rounded-lg shadow-lg cursor-pointer">
      <nuxt-img
        class="object-cover w-full h-48"
        src="SeedCode/img/bl9vlkswosadqdtlubtq"
        alt="Flower and sky"
        provider="cloudinary"
        loading="lazy"
      />
    </div>

    <div class="overflow-hidden rounded-lg shadow-lg cursor-pointer">
      <nuxt-img
        class="object-cover w-full h-48"
        src="SeedCode/img/woew83vkxvweykvlntbv"
        alt="Flower and sky"
        provider="cloudinary"
        loading="lazy"
      />
    </div>

    <div class="overflow-hidden rounded-lg shadow-lg cursor-pointer">
      <nuxt-img
        class="object-cover w-full h-48"
        src="SeedCode/img/qhi0a7pt18c8yezyx6jd"
        alt="Flower and sky"
        provider="cloudinary"
        loading="lazy"
      />
    </div>
  </div>

  <!-- <div class="mt-4">
        <Carousel
          :itemsToShow="1"
          :wrapAround="true"
          :transition="500"
          :autoplay="4000"
          
        >
          <Slide v-for="i in 10" :index="i">
            <div class="carousel__item h-20 w-20">
              <nuxt-img src="SeedCode/img/qhi0a7pt18c8yezyx6jd"  alt="" loading="lazy" provider="cloudinary"/>/>
            </div>
          </Slide>

          <template #addons>
            <Navigation />
            <Pagination />
          </template>
        </Carousel>
      </div> -->

  <footerComponent></footerComponent>
</template>

<script lang="ts" setup>
import videoComponent from "../src/components/home/videoComponent.vue";
import Layout from "../src/components/Layout.vue";
import footerComponent from "../src/components/home/footerComponent.vue";
import { Carousel, Pagination, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
</script>

<style>
.carousel__item {
  min-height: 200px;
  border-radius: 30px;
  max-height: 600px;
  width: 100%;
  background-color: var(--vc-clr-primary);
  color: var(--vc-clr-white);
  font-size: 20px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.carousel__item img {
  border-radius: 10px;
}

.carousel__slide {
  padding: 10px;
  border-radius: 20px;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}
</style>
