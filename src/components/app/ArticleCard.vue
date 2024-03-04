<script setup>
// Utilities
import { computed } from 'vue'
import { parseDate } from '@/utils/util'
import tempImageSrc from '@/assets/images/TempImage.png'

const props = defineProps({
  article: {
    type: Object,
    default: null
  }
})

const previewText = computed(() => {
  return props.article.previewText ? props.article.previewText.substring(0, 500) : null
})
</script>

<template>
  <v-card class="mx-2" flat>
    <v-row dense>
      <v-col cols="12" md="9">
        <v-container>
          <v-row>
            <div class="text-20 my-2 mr-12" style="font-weight: 600">
              {{ props.article.title }}
            </div>
          </v-row>

          <v-row style="height: 100px">
            <div class="text-medium-emphasis text-body-2 mr-12">{{ previewText }}...</div>
          </v-row>

          <v-row>
            <span class="font-weight-bold text-medium-emphasis text-body-1 ml-1">
              {{ props.article.mediaName }}
            </span>
            <span class="text-medium-emphasis text-body-1 ml-6">
              {{ parseDate(props.article.publishedDate) }}
            </span>
            <span class="text-subtitle-1 text-medium-emphasis font-weight-bold ml-6"
              >자세히보기</span
            >
            <span class="ml-1">
              <v-btn
                :href="props.article.url"
                rel="noopener noreferrer"
                target="_blank"
                variant="text"
                @click.stop
              >
                <v-icon icon="mdi-arrow-top-right" size="large" start />
              </v-btn>
            </span>
          </v-row>
        </v-container>
      </v-col>

      <v-col cols="12" md="3">
        <v-img
          :src="props.article.thumbnailUrl ? props.article.thumbnailUrl : tempImageSrc"
          height="160"
          class="mt-2 rounded"
          cover
        />
      </v-col>
    </v-row>
  </v-card>
</template>
