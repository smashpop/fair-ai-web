<script setup>
//
</script>

<template>
  <v-container class="fill-height">
    <v-responsive class="align-center text-center fill-height">
      <h1 class="text-h2 font-weight-bold">문의/제안</h1>
    </v-responsive>
    <v-sheet class="py-16" color="#181818">
      <section id="grid">
        <v-container>
          <v-row justify="space-between">
            <v-col cols="auto">
              <v-responsive class="overflow-visible" width="350">
                <h2 class="text-h4">Shape the future of Vuetify</h2>

                <p class="text-success mt-3">Support Development</p>

                <strong>Become a sponsor</strong>

                <p class="mt-8">
                  Vuetify is free to use software under the
                  <a
                    href="https://opensource.org/licenses/MIT"
                    target="_blank"
                    rel="noopener noreferrer"
                    >MIT</a
                  >
                  License and requires an extensive amount of time to maintain. Supporting
                  development ensures Vuetify will be actively maintained.
                </p>

                <v-btn-alt
                  class="mt-6"
                  href="https://github.com/sponsors/johnleider"
                  target="_blank"
                  rel="noopener noreferrer"
                  text="Support now"
                  prepend-icon="$vuetify"
                />
              </v-responsive>
            </v-col>

            <v-img
              max-width="400"
              src="https://cdn.vuetifyjs.com/store/themes/vite-free/vuetify.png"
            />
          </v-row>
        </v-container>
      </section>
    </v-sheet>
  </v-container>
</template>
