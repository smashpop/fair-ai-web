<script setup>
// Utilities
import { computed } from 'vue'
import tempImageSrc from '@/assets/images/TempImage.png'

const props = defineProps({
  event: {
    type: Object,
    default: null
  }
})
const contents = computed(() => {
  return props.event.contents ? props.event.contents.substring(0, 500) : null
})
</script>

<template>
  <v-card class="pa-2" flat>
    <v-row>
      <v-col cols="12" md="7">
        <v-container>
          <div class="text-20 mb-4" style="font-weight: 600">
            {{ props.event.eventName }}
          </div>

          <div class="text-medium-emphasis text-body-2">
            {{ contents }}...
          </div>
        </v-container>
      </v-col>
      <v-spacer></v-spacer>
      <v-col cols="12" md="3">
        <v-img 
          :src="props.event.imageFileUrl ? props.event.imageFileUrl : tempImageSrc"
          height="150"
          class="rounded"
          cover />
      </v-col>
    </v-row>
  </v-card>
</template>
