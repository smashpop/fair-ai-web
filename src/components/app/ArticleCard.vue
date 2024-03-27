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
            <div class="text-20 font-weight-semi-bold text-black line-height-normal">
              {{ props.article.title }}
            </div>
          </v-row>

          <v-row no-gutters class="mt-5">
            <div class="text-body-1">{{ previewText }}</div>
          </v-row>

          <v-row no-gutters class="mt-3 align-center">
            <span class="font-weight-bold text-body-1">
              {{ props.article.mediaName }}
            </span>

            <span class="text-body-1 mx-2" style="color: #727171">
              | {{ parseDate(props.article.publishedDate) }} |
            </span>

            <span class="">
              <v-btn
                :href="props.article.url"
                rel="noopener noreferrer"
                target="_blank"
                variant="plain"
                class="d-flex text-subtitle-1 font-weight-medium btn-plain-custom btn-link"
                @click.stop
              >
                자세히보기
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

<style lang="scss" scoped></style>
