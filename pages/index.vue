<template>
  <Layout />

  <videoComponent></videoComponent>
  <div
    class="grid grid-cols-1 gap-2 p-5 md:grid-cols-2 lg:grid-cols-3 md:p-10 mt-15"
  >
    <div class="max-w-sm p-6 mx-auto bg-white rounded-lg shadow-xl">
      <div class="flex flex-col items-center p-3">
        <h1
          class="items-center p-3 text-5xl font-black text-center opacity-75 md:text-7xl md:p-5 drop-shadow-xl"
        >
          6+
        </h1>

        <h2 class="text-lg font-semibold text-center md:text-xl">
          Proyectos Completados
        </h2>
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
        <h1
          class="items-center p-3 text-5xl font-black text-center opacity-75 md:text-7xl md:p-5 drop-shadow-xl"
        >
          5+
        </h1>
        <h2 class="text-lg font-semibold text-center md:text-xl">Clientes</h2>
        <p class="text-base text-center md:text-base">
          Nuestra sólida cartera de proyectos exitosos refleja la confianza de
          nuestros clientes y nuestro enfoque profesional en la satisfacción del
          cliente.
        </p>
        <div class="mt-3">
          <nuxt-link
            to="/clients"
            title="Clientes"
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
        <h1
          class="items-center p-3 text-5xl font-black text-center opacity-75 md:text-7xl md:p-5 drop-shadow-xl"
        >
          4+
        </h1>
        <h2 class="text-lg font-semibold text-center md:text-xl">
          Años de Experiencia
        </h2>
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
            alt="Team SeedCode"
            title="Team SeedCode"
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
      <h1 class="text-4xl font-black text-center text-black opacity-75">
        Servicios
      </h1>
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
            alt="E-commerce"
            title="SeedCode - E-commerce"
          />
          <h2 class="mt-3 text-lg font-semibold text-center">E-commerce</h2>
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
            alt="Software"
            title="SeedCode - Software"
          />
          <h2 class="mt-3 text-lg font-semibold text-center">Software</h2>
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
            alt="Social Media"
            title="SeedCode - Social Media"
          />
          <h2 class="mt-3 text-lg font-semibold text-center">Redes Sociales</h2>
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
            alt="Web Site"
            title="SeedCode - Web Site"
          />
          <h2 class="mt-3 text-lg font-semibold text-center">Sitios Web</h2>
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
            alt="Website Optimization"
            title="SeedCode - Website Optimization"
          />
          <h2 class="mt-3 text-lg font-semibold text-center">
            Optimización Web
          </h2>
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
            alt="Medium"
            title="SeedCode - Medium"
          />
          <h2 class="mt-3 text-lg font-semibold text-center">Soporte</h2>
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
            alt="Electronic billing"
            title="SeedCode - Electronic billing"
          />
          <h2 class="mt-3 text-lg font-semibold text-center">
            Facturación Electrónica
          </h2>
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
            alt="Design"
            title="SeedCode - Design"
          />
          <h2 class="mt-3 text-lg font-semibold text-center">Diseño</h2>
          <p
            class="grid mt-3 text-base text-center place-content-center place-items-center"
          >
            Ofrecemos servicios de diseño creativo y profesional para satisfacer
            tus necesidades visuales y destacar tu marca.
          </p>
        </div>
      </div>
    </div>
  </div>

  <Carousel
    :itemsToShow="3.0"
    :wrapAround="true"
    :transition="500"
    :autoplay="4000"
  >
    <Slide v-for="(slide, index) in images" :key="index">
      <div class="carousel__item">
        <nuxt-img :src="slide.image" provider="cloudinary" loading="lazy" alt="Team-SeedCode" title="Team-SeedCode" />
      </div>
    </Slide>

    <template #addons>
      <Navigation />
      <Pagination />
    </template>
  </Carousel>

  <footerComponent></footerComponent>
</template>

<script lang="ts" setup>
import videoComponent from "../src/components/home/videoComponent.vue";
import Layout from "../src/components/Layout.vue";
import footerComponent from "../src/components/home/footerComponent.vue";
import { Carousel, Pagination, Slide } from "vue3-carousel";
import { ref } from "vue";
import { images_captions } from "../src/components/home/carouselComponent";
import "vue3-carousel/dist/carousel.css";
const images = ref(images_captions);
</script>

<style scoped>
.carousel__slide {
  padding: 5px;
}
.carousel__viewport {
  perspective: 2000px;
}
.carousel__track {
  transform-style: preserve-3d;
}
.carousel__slide--sliding {
  transition: 0.5s;
}
.carousel__slide {
  opacity: 1;
  transform: rotateY(-10deg) scale(0.95);
}
.carousel__slide--active ~ .carousel__slide {
  transform: rotateY(10deg) scale(0.95);
}
.carousel__slide--prev {
  opacity: 0.9;
  transform: rotateY(-10deg) scale(0.95);
}
.carousel__slide--next {
  opacity: 0.9;
  transform: rotateY(10deg) scale(0.95);
}
.carousel__slide--active {
  opacity: 1;
  transform: rotateY(0) scale(1.1);
}
.carousel__item {
  min-height: 200px;
  width: 100%;
  max-width: 20;
  font-size: 30px;
  border-radius: 30px;

  justify-content: center;
  align-items: center;
}
</style>
