<!-- <template>
  <header
    class="fixed w-full lg:px-16 px-4 bg-[rgba(0,0,0,0.8)] flex flex-wrap items-center py-4 shadow-md"
  >
    <div class="flex-1 flex h-10 object-cover">
      <img class="h-17 w-auto" src="/src/img/Recortada.png" alt="" />
    </div>

    <label for="menu-toggle" class="pointer-cursor md:hidden block">
      <svg
        class="fill-current text-white"
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
      >
        <title>menu</title>
        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
      </svg>
    </label>
    <input class="hidden" type="checkbox" id="menu-toggle" />

    <div class="hidden md:flex md:items-center md:w-auto w-full" id="menu">
      <nav>
        <ul
          class="md:flex items-center justify-between text-xl text-white pt-4 md:pt-0"
        >
          <li><a class="md:p-5 py-3 px-0 block" href="#">Inicio</a></li>
          <li><a class="md:p-5 py-3 px-0 block" href="#">Contacto</a></li>
          <li><a class="md:p-5 py-3 px-0 block" href="#">Acerca de</a></li>
          <li>
            <a class="md:p-4 py-3 px-0 block md:mb-0 mb-2" href="#">Español</a>
          </li>
        </ul>
      </nav>
    </div>
  </header>

  <div>
    <p
      class="text-center text-white opacity-4 font-black text-5xl position: absolute top-[45%] left-[20%]"
    >
      Nutriendo ideas y cultivando<span class="block">
        innovación SeedCode</span
      >
    </p>
    <div class="" height="30%">
      <video autoplay muted loop class="w-full">
        <source
          src="https://v4.cdnpk.net/videvo_files/video/free/video0467/large_watermarked/_import_615a995eea3f30.45528318_FPpreview.mp4"
        />
      </video>
    </div>
  </div>

  <div class="grid grid-cols-3 gap-4 mt-15 p-10">
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
          <img class="rounded-xl h-70 w-auto" src="/src/img/Image_Card.jpg" />
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
    <div class="grid grid-cols-3 gap-5 mt-10">
      <div class="p-3">
        <img class="w-40 mx-auto" src="../src/img/e-commerce.png" />
        <p class="text-center text-xl font-semibold mt-3">Ecommerce</p>
        <p
          class="text-center text-base mt-3 grid place-content-center place-items-center"
        >
          Trabajando de la mano con tecnologías de fuerte demanda.
        </p>
      </div>
      <div class="p-3">
        <img class="w-40 mx-auto mt-10" src="../src/img/laptop.png" />
        <p class="text-center text-2xl font-semibold">Software</p>
        <p class="text-center text-base justify-center mt-3">
          Trabajando de la mano con tecnologías de fuerte demanda.
        </p>
      </div>
      <div class="p-3">
        <img class="w-40 mx-auto" src="../src/img/redes-sociales.png" />
        <p class="text-center text-2xl font-semibold mt-3">Redes Sociales</p>
        <p class="text-center text-base justify-center mt-3">
          Trabajando de la mano con tecnologías de fuerte demanda.
        </p>
      </div>
      <div class="p-3">
        <img class="w-40 mx-auto" src="../src/img/navegador.png" />
        <p class="text-center text-2xl font-semibold mt-3">Sitios Web</p>
        <p class="text-center text-base justify-center mt-3">
          Trabajando de la mano con tecnologías de fuerte demanda.
        </p>
      </div>
      <div class="p-3">
        <img
          class="w-40 mx-auto mt-10"
          src="../src/img/soporte-tecnico.png"
          alt=""
        />
        <p class="text-center text-2xl font-semibold mt-3">Optimización Web</p>
        <p class="text-center text-base justify-center mt-3">
          Trabajando de la mano con tecnologías de fuerte demanda.
        </p>
      </div>
      <div class="p-3">
        <img class="w-40 mx-auto" src="../src/img/Soporte.png" />
        <p class="text-2xl font-semibold mt-3">Soporte</p>
        <p class="text-base justify-center mt-3">
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
        src="/src/img/Img1.jpg"
        alt="Flower and sky"
      />
    </div>

    <div class="overflow-hidden rounded-lg shadow-lg cursor-pointer">
      <img
        class="object-cover w-full h-48"
        src="/src/img/Img2.jpg"
        alt="Flower and sky"
      />
    </div>

    <div class="overflow-hidden rounded-lg shadow-lg cursor-pointer">
      <img
        class="object-cover w-full h-48"
        src="/src/img/Img3.jpg"
        alt="Flower and sky"
      />
    </div>

    <div class="overflow-hidden rounded-lg shadow-lg cursor-pointer">
      <img
        class="object-cover w-full h-48"
        src="/src/img/Img4.jpg"
        alt="Flower and sky"
      />
    </div>
  </div>

 component -->
  <!-- <footer class="bg-[rgba(0,0,0,0.8)] dark:bg-gray-900 mt-20">
    <div class="container px-6 py-8 mx-auto">
      <div class="flex flex-col items-center text-center">
        <a href="#">
          <img class="w-auto h-15" src="/src/img/LogoWithName.png" />
        </a>

        <p class="max-w-md mx-auto mt-4 text-white">
          Trabajando de la mano con tecnologías de fuerte demanda.
        </p>

        <div
          class="flex flex-col mt-4 sm:flex-row sm:items-center sm:justify-center"
        >
          <button
            class="w-full px-5 py-2 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md sm:mx-2 sm:order-2 sm:w-auto hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
          >
            Inicio
          </button>

          <button
            class="w-full px-5 py-2 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md sm:mx-2 sm:order-2 sm:w-auto hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
          >
            Ayuda
          </button>
        </div>
      </div>

      <hr class="my-10 border-gray-200 dark:border-gray-700" />

      <div class="flex flex-col items-center sm:flex-row sm:justify-between">
        <p class="text-sm text-gray-500">
          Copyright 2023 - Todos los derechos reservados por SeedCode.
        </p>

        <div class="flex mt-3 -mx-2 sm:mt-0">
          <a
            href="#"
            class="mx-2 text-sm text-gray-500 transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300"
            aria-label="Reddit"
          >
            Teams
          </a>

          <a
            href="#"
            class="mx-2 text-sm text-gray-500 transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300"
            aria-label="Reddit"
          >
            Privacy
          </a>

          <a
            href="#"
            class="mx-2 text-sm text-gray-500 transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300"
            aria-label="Reddit"
          >
            Cookies
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped></style> -->

<template>
  <div>
    
  </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>


</style>
