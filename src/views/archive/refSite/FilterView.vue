<script setup>
// Components

// Utilities
import { ref } from 'vue'
const items = ref([])
</script>

<template>
  <v-row justify="start" no-gutters class="mt-10  flex-column">
    <div class="text-16 text-color-555 font-weight-semi-bold">
      초성검색
    </div>

    <div class="side-initial mt-4">
      <v-btn 
      variant="text"
      width="42"
      height="42"
      border
      class="text-body-1 font-weight-semi-bold"
      style="border-radius: 42px; min-width: auto; border: 1px solid #cfcfcf;"
      >
      A
      </v-btn>
    </div>
  </v-row>

  <v-divider class="mt-7" style="border-color: #a0a0a0; opacity: 1;" />
</template>
