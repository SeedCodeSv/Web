<template>
  <!-- <header
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

    <div class="md:flex md:items-center md:w-auto w-full" id="menu">
      <nav>
        <ul
          class="md:flex items-center justify-between text-xl text-white pt-4 md:pt-0"
        >
          <nuxt-link class="md:p-5 py-3 px-0 block" to="/"> Inicio </nuxt-link>

          <nuxt-link to="/contact" class="md:p-5 py-3 px-0 block"
            >Contacto</nuxt-link
          >
          <nuxt-link to="/aboutPage" class="md:p-5 py-3 px-0 block">
            Acerca de
          </nuxt-link>
          <nuxt-link to="/" class="md:p-5 py-3 px-0 block"> Español </nuxt-link>
        </ul>
      </nav>
    </div>
  </header>

  <div>
    <p
      class="text-center text-white opacity-4 font-black text-5xl absolute top-[45%] left-[20%]"
    >
      Nutriendo ideas y cultivando<span class="block">
        innovación SeedCode</span
      >
    </p>
  </div>
  <div>
    <div class="" height="30%">
      <video autoplay muted loop class="w-full">
        <source
          src="https://v4.cdnpk.net/videvo_files/video/free/video0467/large_watermarked/_import_615a995eea3f30.45528318_FPpreview.mp4"
        />
      </video>
    </div>
  </div> -->


  <div>
    <div class="relative h-screen overflow-hidden">
      <video autoplay muted loop class="absolute top-0 left-0 w-full h-full object-cover">
        <source src="https://v4.cdnpk.net/videvo_files/video/free/video0467/large_watermarked/_import_615a995eea3f30.45528318_FPpreview.mp4" type="video/mp4" />
      </video>

      <header class="fixed w-full lg:px-16 px-4 bg-[rgba(0,0,0,0.8)] flex flex-wrap items-center py-4 shadow-md z-10">
        <div class="flex-1 flex h-10 object-cover">
          <img class="h-17 w-auto" src="/src/img/Recortada.png" alt="" />
        </div>

        <label for="menu-toggle" class="pointer-cursor md:hidden block">
          <svg class="fill-current text-white" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
            <title>menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
          </svg>
        </label>
        <input class="hidden" type="checkbox" id="menu-toggle" />

        <div class="md:flex md:items-center md:w-auto w-full" id="menu">
          <nav>
            <ul class="md:flex items-center justify-between text-xl text-white pt-4 md:pt-0">
              <li class="md:p-5 py-3 px-0 block"><nuxt-link to="/">Inicio</nuxt-link></li>
              <li class="md:p-5 py-3 px-0 block"><nuxt-link to="/contact">Contacto</nuxt-link></li>
              <li class="md:p-5 py-3 px-0 block"><nuxt-link to="/aboutPage">Acerca de</nuxt-link></li>
              <li class="md:p-5 py-3 px-0 block"><nuxt-link to="/">Español</nuxt-link></li>
            </ul>
          </nav>
        </div>
      </header>

      <div class="absolute top-[45%] left-[20%] text-center text-white opacity-4 font-black text-5xl z-10">
        Nutriendo ideas y cultivando<span class="block">innovación SeedCode</span>
      </div>
    </div>
  </div>


  <div>
    <slot></slot>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped></style>
