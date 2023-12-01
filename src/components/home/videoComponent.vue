<template>
  <link rel="stylesheet" href="../../../assets/style.css" />
  <div class="relative">
    <video
      autoplay
      muted
      loop
      class="w-full h-[350px] object-cover bg-[rgba(0,0,0,0.8)] masked-video sm:w-screen sm:h-screen"
      id="mobile-video"
      provider="cloudinary"
      loading="lazy"
    >
      <source src="/assets/videos/VideoInicial.mp4" type="video/mp4" />
    </video>
    <div
      class="absolute inset-0 flex justify-center items-center text-center text-white font-black text-3xl sm:text-sm md:text-5xl lg:text-6xl xl:text-5xl"
    >
      <div class="px-4 sm:px-8 lg:px-16 xl:px-32 opacity-60 text-center">
        <nuxt-img
          src="SeedCode/img/wp6ldwxbebgo4szpvjjz"
          class="align-center max-w-[200px] sm:max-w-[300px] mx-auto"
          provider="cloudinary"
          loading="lazy"
          alt="Logo-SeedCode"
          title="Logo-SeedCode"
        />
        <h1>
          Nutriendo ideas y cultivando<span class="block"
            >innovación SeedCode</span
          >
        </h1>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>
<style>
@media (max-width: 767px) {
  /* Aplicar solo en dispositivos móviles */
  #mobile-video {
    height: 100vh; /* Alto del viewport */
  }
}
</style>
