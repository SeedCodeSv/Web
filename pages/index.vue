<template>
    <Layout />

  <div class="h-screen p-0">
    <videoComponent></videoComponent>
  </div>
    <div class="grid grid-cols-3 gap-4 p-10 mt-40">
      <div class="p-3">
        <p
          class="text-center font-bold text-9xl p-5 items-center drop-shadow-xl opacity-75"
        >
          5+
        </p>
        <p class="text-center text-xl font-semibold">Proyectos completados</p>
        <p class="text-center text-base justify-center">
          Trabajando de la mano con tecnologías de fuerte demanda.
        </p>
      </div>
      <div class="p-3">
        <p
          class="text-center font-bold text-9xl p-5 items-center drop-shadow-xl opacity-75"
        >
          4+
        </p>
        <p class="text-center text-xl font-semibold">Proyectos completados</p>
        <p class="text-center text-base justify-center">
          Trabajando de la mano con tecnologías de fuerte demanda.
        </p>
      </div>
      <div class="p-3">
        <p
          class="text-center font-bold text-9xl p-5 items-center drop-shadow-xl opacity-75"
        >
          9+
        </p>
        <p class="text-center text-xl font-semibold">Proyectos completados</p>
        <p class="text-center text-base justify-center">
          Trabajando de la mano con tecnologías de fuerte demanda.
        </p>
      </div>
    </div>
  
    <div class="flex justify-center text-center mt-20">
      <div
        class="w-2/3 m-1 justify-center text-black shadow-2xl rounded-xl bg-white p-4"
      >
        <div class="grid grid-cols-2">
          <div class="w-full h-full">
            <img
              class="rounded-xl h-70 w-auto"
              src="../../assets/css/img/img-card.jpg"
            />
          </div>
          <div
            class="px-5 w-full h-full grid place-content-center place-items-center"
          >
            <p class="text-lg">
              Trabajando de la mano con tecnologías de fuerte demanda. Trabajando
              de la mano con tecnologías de fuerte demanda. Trabajando de la mano
              con tecnologías de fuerte demanda. Trabajando de la mano con
              tecnologías de fuerte demanda.
            </p>
          </div>
        </div>
      </div>
    </div>

  
    <div class="mt-20">
      <div class="">
        <h5 class="text-center text-black opacity-50 font-black text-4xl">
          Servicios
        </h5>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-11 gap-y-11 mt-10">
  
        <div class="p-3">
    <img class="w-40 mx-auto" src="../../assets/css/img/e-commerce.png" />
    <p class="text-center text-xl font-semibold mt-3">Ecommerce</p>
    <p class="text-center text-base mt-3 grid place-content-center place-items-center">
      Trabajando de la mano con tecnologías de fuerte demanda.
    </p>
    </div>

    <div class="p-3">
    <img class="w-40 mx-auto" src="../../assets/css/img/e-commerce.png" />
    <p class="text-center text-xl font-semibold mt-3">Ecommerce</p>
    <p class="text-center text-base mt-3 grid place-content-center place-items-center">
      Trabajando de la mano con tecnologías de fuerte demanda.
    </p>
    </div>

    <div class="p-3">
    <img class="w-40 mx-auto" src="../../assets/css/img/e-commerce.png" />
    <p class="text-center text-xl font-semibold mt-3">Ecommerce</p>
    <p class="text-center text-base mt-3 grid place-content-center place-items-center">
      Trabajando de la mano con tecnologías de fuerte demanda.
    </p>
    </div>

    <div class="p-3">
    <img class="w-40 mx-auto" src="../../assets/css/img/e-commerce.png" />
    <p class="text-center text-xl font-semibold mt-3">Ecommerce</p>
    <p class="text-center text-base mt-3 grid place-content-center place-items-center">
      Trabajando de la mano con tecnologías de fuerte demanda.
    </p>
    </div>

    <div class="p-3">
    <img class="w-40 mx-auto" src="../../assets/css/img/e-commerce.png" />
    <p class="text-center text-xl font-semibold mt-3">Ecommerce</p>
    <p class="text-center text-base mt-3 grid place-content-center place-items-center">
      Trabajando de la mano con tecnologías de fuerte demanda.
    </p>
    </div>

    <div class="p-3">
    <img class="w-40 mx-auto" src="../../assets/css/img/e-commerce.png" />
    <p class="text-center text-xl font-semibold mt-3">Ecommerce</p>
    <p class="text-center text-base mt-3 grid place-content-center place-items-center">
      Trabajando de la mano con tecnologías de fuerte demanda.
    </p>
    </div>
      
   
      </div>
    </div>
  
    <div
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full mt-20"
    >
      <div class="overflow-hidden rounded-lg shadow-lg cursor-pointer">
        <img
          class="object-cover w-full h-48"
          src="../../assets/css/img/Img1.jpg"
          alt="Flower and sky"
        />
      </div>
  
      <div class="overflow-hidden rounded-lg shadow-lg cursor-pointer">
        <img
          class="object-cover w-full h-48"
          src="../../assets/css/img/Img2.jpg"
          alt="Flower and sky"
        />
      </div>
  
      <div class="overflow-hidden rounded-lg shadow-lg cursor-pointer">
        <img
          class="object-cover w-full h-48"
          src="../../assets/css/img/Img3.jpg"
          alt="Flower and sky"
        />
      </div>
  
      <div class="overflow-hidden rounded-lg shadow-lg cursor-pointer">
        <img
          class="object-cover w-full h-48"
          src="../../assets/css/img/Img4.jpg"
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

