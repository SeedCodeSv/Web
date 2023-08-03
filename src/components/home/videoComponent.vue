<template>
  <link rel="stylesheet" href="../../../assets/style.css" />

  <div class="relative">
    <video
      autoplay
      muted
      loop
      class="w-full h-[350px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] object-cover bg-[rgba(0,0,0,0.8)] masked-video"
    >
      <source
      data-src ="/assets/videos/VideoInicial.mp4"
        type="video/mp4"
      />
    </video>

    <div
      class="absolute inset-0 flex justify-center items-center text-center text-white font-black text-5xl"
    >
      <div class="px-4 sm:px-8 lg:px-16 xl:px-32 opacity-60 text-center">
        <nuxt-img
          src="img/HojasDeLogo.png"
          class="align-center max-w-sm mx-auto"
          alt=""
        />
        Nutriendo ideas y cultivando<span class="block"
          >innovación SeedCode</span
        >
      </div>
    </div>
  </div> 
</template>

<script lang="ts" setup></script>
