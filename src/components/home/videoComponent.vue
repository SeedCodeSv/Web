<template>
  <link rel="stylesheet" href="../../../assets/style.css" />
<!-- 
  <div class="relative">
    <video
      autoplay
      muted
      loop
      class="w-full h-[350px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] object-cover bg-[rgba(0,0,0,0.8)] masked-video"
    >
      <source
      src="/assets/videos/VideoInicial.mp4"
        type="video/mp4"
        provider="cloudinary" loading="lazy"
      />
    </video>

    <div
      class="absolute inset-0 flex justify-center items-center text-center text-white font-black text-5xl"
    >
      <div class="px-4 sm:px-8 lg:px-16 xl:px-32 opacity-60 text-center">
        <nuxt-img
          src="SeedCode/img/wp6ldwxbebgo4szpvjjz"
          class="align-center max-w-sm mx-auto"
          provider="cloudinary" loading="lazy"
        />
        Nutriendo ideas y cultivando<span class="block"
          >innovación SeedCode</span
        >
      </div>
    </div>
  </div>  -->
  <div class="relative">
    <video
      autoplay
      muted
      loop
      class="w-full h-[350px] object-cover bg-[rgba(0,0,0,0.8)] masked-video sm:w-screen sm:h-screen"
    >
      <source
        src="/assets/videos/VideoInicial.mp4"
        type="video/mp4"
        provider="cloudinary" loading="lazy"
      />
    </video>

    <div class="absolute inset-0 flex justify-center items-center text-center text-white font-black text-3xl sm:text-sm md:text-5xl lg:text-6xl xl:text-5xl">
      <div class="px-4 sm:px-8 lg:px-16 xl:px-32 opacity-60 text-center">
        <nuxt-img
          src="SeedCode/img/wp6ldwxbebgo4szpvjjz"
          class="align-center max-w-[200px] sm:max-w-[300px] mx-auto"
          provider="cloudinary" loading="lazy"
        />
        Nutriendo ideas y cultivando<span class="block">innovación SeedCode</span>
      </div>
    </div>
</div>


</template>

<script lang="ts" setup></script>
