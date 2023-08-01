<template>
  <Layout>
    <div class="relative">
    <video
      autoplay
      muted
      loop
      class="w-full object-cover bg-[rgba(0,0,0,0.8)] masked-video"
    >
      <source
        src="../assets/css/videos/Recortado2.mp4"
        type="video/mp4"
      />
    </video>

    <!-- <div
      class="absolute inset-0 flex justify-center items-center text-center text-white font-black text-5xl"
    >
  
      <div class="px-4 sm:px-8 lg:px-16 xl:px-32 opacity-60 text-center">
        <img
          src="../../../assets/css/img/HojasDeLogo.png"
          class="align-center max-w-sm mx-auto"
          alt=""
        />
        Nutriendo ideas y cultivando<span class="block"
          >innovación SeedCode</span
        >
      </div>
    </div> -->
  </div>


  <!-- <img class="w-full h-96 object-cover" src="https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" /> -->

  <!-- <div class="absolute inset-0 flex justify-center items-center text-center text-white text-4xl md:text-5xl lg:text-6xl mt-20">
  <div class="px-4 sm:px-8 lg:px-16 xl:px-32">
    <div class="flex-shrink-0">
      <img src="../assets/css/img/HojasDeLogo.png" alt="Descripción de la imagen" class="w-20 h-20 object-cover rounded-lg">
    </div>
  </div>
</div> -->

<!-- 
<div class="absolute inset-0 flex justify-center items-center text-center text-white text-4xl md:text-5xl lg:text-6xl mt-20">
  <div class="px-4 sm:px-8 lg:px-16 xl:px-32 grid grid-cols-2 ">

    <div class="flex-shrink-0">
      <img src="../assets/css/img/LogoSeedCode.png" alt="Descripción de la imagen" class="w-20 h-20 object-cover rounded-lg">
    </div>
    <div>
    </div>

  </div>
</div> -->

<!-- 
<div class="flex justify-center text-center mt-10 sm:mt-15">
    <div
      class="w-full sm:w-2/3 m-1 align-center text-black rounded-xl p-4"
    >
      <div class="grid sm:grid-cols-1 lg:grid-cols-2">
    
        <div
          class="mt-4 lg:mt-0 px-5 w-full h-full grid place-content-center place-items-center"
        >
        <p class="text-base sm:text-lg">Visión</p>
          <p class="text-base sm:text-lg">
            Ser reconocidos como líderes en el desarrollo de software,
              brindando soluciones tecnológicas innovadoras que impulsen el
              éxito de nuestros clientes en el mundo digital.
          </p>
        </div>
        <div class="w-full h-70 sm:h-auto">
          <img
            class="rounded-xl h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHNvZnR3YXJlJTIwY29tcGFueXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
          />
        </div>
      </div>
    </div>
  </div> -->

  <div class="flex justify-center text-center mt-40 sm:mt-15">
  <div class="w-full sm:w-2/3 m-1 align-center text-black rounded-xl p-4">
    <div class="grid sm:grid-cols-1 lg:grid-cols-2">

      <div class="mt-4 lg:mt-0 px-5 w-full h-full grid place-content-center place-items-center">
        <div class="p-4">
          <p class="text-base sm:text-lg font-semibold">Visión</p>
          <p class="text-base sm:text-lg">
            Ser reconocidos como líderes en el desarrollo de software,
            brindando soluciones tecnológicas innovadoras que impulsen el
            éxito de nuestros clientes en el mundo digital.
          </p>
        </div>
      </div>

      <div class="w-full h-70 sm:h-auto">
        <img class="rounded-xl h-full w-full object-cover" src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHNvZnR3YXJlJTIwY29tcGFueXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="Descripción de la imagen" />
      </div>

    </div>
  </div>
</div>


<div class="flex justify-center text-center mt-10 sm:mt-15">
    <div
      class="w-full sm:w-2/3 m-1 align-center text-black rounded-xl p-4"
    >
      <div class="grid sm:grid-cols-1 lg:grid-cols-2">
        <div class="w-full h-70 sm:h-auto">
          <img
            class="rounded-xl h-full w-full object-cover"
            src="../assets/css/img/mision.jpg"
          />
        </div>
        <div
          class="mt-4 lg:mt-0 px-5 w-full h-full grid place-content-center place-items-center"
        >
        <p class="text-base sm:text-lg font-semibold">Misión</p>
          <p class="text-base sm:text-lg">
            Diseñar y desarrollar software de calidad, enfocado en las necesidades del cliente.
            Superamos expectativas con soluciones personalizadas que impulsan la eficiencia y el crecimiento empresarial.
             Establecemos relaciones basadas en la confianza, colaboración y compromiso con la excelencia..
          </p>
        </div>
      </div>
    </div>
  </div>



 <!-- <div class="absolute inset-0 flex justify-center items-center text-center text-white font-black text-4xl md:text-5xl lg:text-6xl">
    <div class="px-4 sm:px-8 lg:px-16 xl:px-32 opacity-60">
      Nutriendo ideas y cultivando<span class="block">innovación SeedCode</span>
    </div>
  </div> -->

    <footerComponent></footerComponent>
  </Layout>
</template>

<script lang="ts" setup>
import Layout from "../src/components/Layout.vue";
import footerComponent from "../src/components/home/footerComponent.vue";
</script>
