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
          <div class="text-20 mb-4" style="font-weight: 600">
            {{ props.title }}
          </div>

          <div class="text-medium-emphasis text-body-2">
            {{ props.abstract }}
          </div>
          <div class="text-body-1 mb-4">
            {{ props.url }}
          </div>
        </v-container>
      </v-col>
      <v-spacer></v-spacer>
      <v-col cols="12" md="3">
        <v-img class="mt-2" height="150" src="@/assets/images/GettyImages.png" />
      </v-col>
    </v-row>
  </v-card>
</template>
