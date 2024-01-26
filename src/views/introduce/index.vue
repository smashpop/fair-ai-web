<script setup>
//
</script>

<template>
  <v-container class="fill-height">
    <v-responsive class="align-center text-center fill-height">
      <h1 class="text-h2 font-weight-bold">소개</h1>

      <v-sheet class="py-16">
        <section id="filter">
          <v-container>
            <v-row justify="space-between">
              <v-col cols="auto">
                <v-responsive width="350">
                  <h2 class="text-h4">FAIR AI system</h2>

                  <p class="text-success mt-3">Global Defaults</p>

                  <strong class="mt-3"> Version 3 Only </strong>

                  <p class="mt-8">
                    Vuetify 3 has an unprecedented level of customization options that make
                    implementing any design system easy.
                  </p>

                  <p class="mt-8">
                    Assign default values for all components in the library, including nested
                    support.
                  </p>
                </v-responsive>
              </v-col>

              <v-img
                max-width="400"
                src="https://cdn.vuetifyjs.com/store/themes/vite-free/chips-bar.png"
              />
            </v-row>
          </v-container>
        </section>
      </v-sheet>
    </v-responsive>
  </v-container>
</template>
