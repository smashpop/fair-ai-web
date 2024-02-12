<script setup>
// Utilities
import { computed } from 'vue'

const props = defineProps({
  report: {
    type: Object,
    default: null
  }
})
const abstract = computed(() => {
  return props.report.abstract ? props.report.abstract.substring(0, 500) : null
})
</script>

<template>
  <v-card class="pa-2" flat>
    <v-row>
      <v-col cols="12" md="9">
        <v-container>
          <div class="text-20 mb-4" style="font-weight: 600">
            {{ props.report.title }}
          </div>

          <div class="text-medium-emphasis text-body-2">{{ abstract }}...</div>
          <div class="text-body-1 mb-4">
            {{ props.report.url }}
          </div>
        </v-container>
      </v-col>
      <v-col cols="12" md="3">
        <v-img class="mt-2" height="150" src="@/assets/images/GettyImages.png" />
      </v-col>
    </v-row>
  </v-card>
</template>
