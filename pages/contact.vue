<template>
  <div class="">
    <Layout>
      <div class="flex mt-40 items-center justify-center w-screen">
        <di
          class="w-[80vw] h-full border shadow bg-white grid grid-cols-1 lg:grid-cols-2 rounded"
        >
          <div class="flex flex-col w-full h-full p-5">
            <div class="flex items-center justify-center w-full h-full">
              <div class="w-[80%] lg:w-[80%] xl:w-[70%] 2xl:w-[60%] h-full">
                <p
                  class="text-3xl text-center font-semibold text-blue-900 lg:text-2xl xl:text-4xl"
                >
                  Contacto
                </p>
                <!-- <p class="mt-10 text-xl">Bienvenido</p> -->
                <div class="flex mt-10">
                  <div class="w-[20%] border-b border-gray-400"></div>
                  <p
                    class="w-[60%] text-center font-sm font-semibold text-gray-600"
                  >
                    Contáctenos con nosotros
                  </p>
                  <div class="w-[20%] border-b border-gray-400"></div>
                </div>
                <form autocomplete="off">
                  <div class="flex flex-col w-full mt-10">
                    <label
                      class="text-sm font-semibold text-gray-500"
                      placeholder="Seleccione el Cargo"
                      >Forma de Contacto</label
                    >
                    <Field
                      name="typeOfCustomerId"
                      as="select"
                      class="w-full p-4 border rounded-xl"
                      placeholder="Seleccione el Cargo"
                    >
                      <option disabled value="">Seleccione el forma</option>
                      <option>Correo Electrónico</option>
                      <option>Mensaje de texto</option>
                    </Field>
                    <ErrorMessage name="rolId" class="text-red-600" />
                  </div>

                  <div class="mt-8">
                    <label class="text-sm font-semibold text-gray-500"
                      >Mensaje</label
                    >

                    <textarea
                      class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      rows="5"
                      placeholder="Descripción"
                      required
                    ></textarea>
                  </div>
                  <div class="mt-8">
                    <button
                      class="w-full p-5 text-sm font-semibold text-white bg-gradient-to-l to-cyan-900 rounded-xl from-blue-900"
                    >
                      Enviar
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div
            class="m-5 bg-[url('/assets/img/contact.jpg')] hidden lg:flex bg-center bg-no-repeat bg-cover rounded-2xl"
          >
            <div class="w-full h-full bg-[rgba(0,0,0,0.5)] rounded-2xl"></div>
          </div>
        </di>
      </div>
      <footerComponent></footerComponent>
    </Layout>
  </div>
</template>

<script lang="ts" setup>
import Layout from "../src/components/Layout.vue";
import footerComponent from "../src/components/home/footerComponent.vue";

import * as yup from "yup";
import { Field, Form, useForm, ErrorMessage } from "vee-validate";

// const {} = useForm<{ email: string; password: string }>({
//   validationSchema: yup.object().shape({
//     email: yup.string().required('Debes seleccionar la opción de contacto'),
//     password: yup.string().required('Debes escribir el mensaje'),
//   }),
// });
</script>
