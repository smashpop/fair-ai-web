<script setup>
const props = defineProps({
  title: {
    type: String,
    default: null
  },
  url: {
    type: String,
    default: null
  },
  abstract: {
    type: String,
    default: null
  }
})
</script>

<template>
  <v-card class="pa-2" flat>
    <v-row>
      <v-col cols="12" md="8">
        <v-container>
          <h1 class="text-20 font-weight-bold mb-4">
            {{ props.title }}
          </h1>

          <div class="text-medium-emphasis text-body-2">
            {{ props.abstract }}
          </div>
          <h1 class="text-body-1 mb-4">
            {{ props.url }}
          </h1>
        </v-container>
      </v-col>
      <v-spacer></v-spacer>
      <v-col cols="12" md="3">
        <v-img class="mt-2" height="150" src="@/assets/images/GettyImages.png" />
      </v-col>
    </v-row>
  </v-card>
</template>
