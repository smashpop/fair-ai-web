<script setup>
// Utilities
import { computed } from 'vue'
import { parseDateTime } from '@/utils/util'
import tempImageSrc from '@/assets/images/TempImage.png'

const props = defineProps({
  article: {
    type: Object,
    default: null
  }
})

const previewText = computed(() => {
  return props.article.previewText ? props.article.previewText.substring(0, 250) : null
})
</script>

<template>
  <v-card class="pa-2" flat>
    <v-row>
      <v-col cols="12" md="7">
        <v-container>
          <h1 class="text-h5 mb-4">
            {{ props.article.title }}
          </h1>

          <div class="text-medium-emphasis text-body-2">{{ previewText }}...</div>

          <div class="text-medium-emphasis text-body-1 mt-1">
            {{ parseDateTime(props.article.publishedDate) }}&nbsp;

            {{ props.article.creator }}기자&nbsp;

            {{ props.article.mediaName }}
          </div>
        </v-container>
      </v-col>

      <v-spacer></v-spacer>
      <v-col cols="12" md="3">
        <v-img 
          :src="props.article.thumbnailUrl ? props.article.thumbnailUrl : tempImageSrc"
          height="150"
          class="rounded"
          cover />
      </v-col>
    </v-row>
  </v-card>
</template>
