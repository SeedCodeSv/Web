<template>
  <div class="relative overflow-hidden">
    <header
      class="fixed w-full z-10 lg:px-16 px-4 sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-3"
      :class="navbarColor ? 'color1' : 'color2'"
    >
      <div class="flex items-center justify-between px-4 py-3 sm:p-0">
        <div>
          <nuxt-img
            class="h-8"
            src="SeedCode/img/qipspz2e5apyeusgpk32"
            alt="SeedCode"
            provider="cloudinary"
            loading="lazy"
            title="Logo-SeedCode"
          />
        </div>
        <div class="sm:hidden">
          <button
            @click="isOpen = !isOpen"
            type="button"
            class="block text-gray-500 hover:text-white focus:text-white focus:outline-none"
          >
            <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
              <path
                v-if="isOpen"
                fill-rule="evenodd"
                d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
              />
              <path
                v-if="!isOpen"
                fill-rule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              />
            </svg>
          </button>
        </div>
      </div>
      <nav
        :class="isOpen ? 'block' : 'hidden'"
        class="px-2 pt-2 pb-4 sm:flex sm:p-0"
      >
        <li
          class="md:p-5 cursor-pointer transition duration-500 px-2 py-1 text-lg text-white flex items-center"
        >
          <nuxt-link to="/" title="Inicio" class="flex items-center">
            <!-- Agregamos flex y items-center para alinear el texto con la imagen horizontalmente -->
            Inicio
          </nuxt-link>
        </li>

        <li
          class="md:p-5 cursor-pointer transition duration-500 px-2 py-1 text-lg text-white flex items-center"
        >
          <nuxt-link to="/contact" title="Contacto">Contacto</nuxt-link>
        </li>
        <!-- <li
          class="md:p-5 cursor-pointer transition duration-500 px-2 py-1 text-lg text-white flex items-center"
        >

          <nuxt-link to="/projects" title="Proyectos">Proyectos</nuxt-link>
        </li> -->
        <li
          class="md:p-5 cursor-pointer transition duration-500 px-2 py-1 text-lg text-white flex items-center"
        >
          <nuxt-link to="/aboutPage" title="Acerca de">Acerca de</nuxt-link>
        </li>
      </nav>
    </header>
  </div>

  <div ref="navbarRef" class="w-full h-full overflow-y-auto overflow-x-hidden">
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import video from "./home/video.vue";
import { ref } from "vue";
import { OhVueIcon } from "oh-vue-icons";

const navbarRef = ref(null);

const navbarColor = computed(() => {
  const currentRoute = useRoute(); // Obtener el objeto de la ruta actual
  console.log(currentRoute);
  // Acceder al nombre de la ruta actual a través del objeto route
  if (currentRoute.name === "index") {
    return true;
  } else {
    return false;
  }
});

const isOpen = ref(false);

useSeoMeta({
  title: "Seed Code SV | Software Company",
  charset: "utf-8",
  ogTitle: "Seed Code SV",
  description:
    "SeedCodeSV, una empresa líder en servicios tecnológicos, proporciona soluciones innovadoras y personalizadas para impulsar el crecimiento de negocios. Con un equipo altamente capacitado, nos enfocamos en brindar resultados excepcionales y satisfacer las necesidades de nuestros clientes.",
  ogDescription: "Nutriendo ideas y cultivando innovación.",
  ogImage:
    "https://media.licdn.com/dms/image/D4E0BAQGNZLnKxP8Fdw/company-logo_200_200/0/1687997940196?e=2147483647&v=beta&t=2Vvu1lrmjplU5RTDjfSIXrwicX5DlALQlCLigQziTU8",
  ogUrl: "https://seedcodesv.com/",
});

useHead({
  meta: [
    {
      name: "keywords",
      content:
        "seedcodesv, seedcodesv, seed code sv, seedcode sv, SEEDCODE SV, SEEDCODESV, SeedCodeSV, SeedCodeSV, SeedCode SV, seed, code, seedCodeSV, seedCodeSV",
    },
    { name: "robots", content: "INDEX, FOLLOW" },
    { name: "language", content: "es-SV" },
    { name: "author", content: "Manuel Marquez" },
    {
      name: "google-site-verification",
      content: "gLZQwJ1EAvgDZ4LaYAPHxY2vTMzt_zjSAL0szV0POds",
    },
    { name: "publisher", content: "Seed Code SV" },
  ],
  link: [
    { rel: "canonical", href: "https://seedcodesv.com/" },
    { rel: "", href: " " },
  ],
});
</script>

<style lang="css" scoped>
.color1 {
  background-color: rgba(6, 33, 51, 0.8);
}

.color2 {
  background-color: rgba(6, 33, 51, 1);
}
</style>
