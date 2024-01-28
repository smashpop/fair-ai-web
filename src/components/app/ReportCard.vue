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
      <v-col cols="12" md="7">
        <v-container>
          <h1 class="text-h5 mb-4">
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
        <v-img height="150" gradient="#262626, #262626" class="rounded elevation-5" />
      </v-col>
    </v-row>
  </v-card>
</template>
