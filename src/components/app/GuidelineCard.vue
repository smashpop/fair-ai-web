<script setup>
// Utilities
import { computed } from 'vue'
import tempImageSrc from '@/assets/images/TempImage.png'

const props = defineProps({
  item: {
    type: Object,
    default: null
  }
})
const name = computed(() => {
  return props.item.nation ? props.item.nation.name : props.item.organization.name
})
const summary = computed(() => {
  return props.item.summary ? props.item.summary.substring(0, 500) : null
})
</script>

<template>
  <v-card class="pa-2" flat>
    <v-row dense>
      <v-col cols="12" md="2"> </v-col>
      <v-col cols="12" md="7">
        <v-container>
          <v-row>
            <div class="text-20 my-2 mr-12" style="font-weight: 600">
              {{ name }}
            </div>
          </v-row>

          <v-row style="height: 60px">
          <div class="text-medium-emphasis text-body-2 mr-12">{{ summary }}...</div>
          </v-row>

          <v-row>
            <h1 class="text-body-1 mb-4">
              {{ props.item.url }}
            </h1>
          </v-row>
        </v-container>
      </v-col>

      <v-col cols="12" md="3">
        <v-img
          :src="tempImageSrc"
          height="130"
          class="mt-1 rounded" 
          cover
        />      </v-col>
    </v-row>
  </v-card>
</template>
