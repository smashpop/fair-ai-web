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
  <v-card flat>
    <v-row no-gutters justify="space-between" align="center">
      <v-col class=""> 
        <v-container fluid class="pa-0">
          <v-row no-gutters>
            <div class="text-20 font-weight-semi-bold text-black">
              {{ props.article.title }}
            </div>
          </v-row>

          <v-row no-gutters class="mt-5">
            <div class="text-medium-emphasis text-body-1">{{ previewText }}</div>
          </v-row>

          <v-row no-gutters class="mt-3 align-center">
            <span class="font-weight-bold text-medium-emphasis text-body-1">
              {{ props.article.mediaName }}
            </span>

            <span class="text-medium-emphasis text-body-1">
              {{ parseDate(props.article.publishedDate) }}
            </span>

            <span class="text-subtitle-1 text-medium-emphasis font-weight-bold">자세히보기</span>

            <span class="">
              <v-btn
                :href="props.article.url"
                rel="noopener noreferrer"
                target="_blank"
                variant="text"
                density="compact"
                icon="mdi-arrow-top-right"
                size="large"
                @click.stop
              >
              </v-btn>
            </span>
          </v-row>
        </v-container>
      </v-col>

      <v-col class="ml-5" style="max-width: 210px">
        <v-img
          :src="props.article.thumbnailUrl ? props.article.thumbnailUrl : tempImageSrc"
          width="210"
          height="116"
          class="rounded"
          cover
        />
      </v-col>
    </v-row>
  </v-card>
</template>
