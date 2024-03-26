<script setup>
// Utilities
import { imageLibSrc } from '@/utils/common'

const props = defineProps({
  card: {
    type: Object,
    default: null
  }
})
</script>

<template>
  <v-container fluid class="pa-0 ma-0 data">
    <v-sheet v-if="props.card" elevation="0" style="height: 100%; background: #fff;" class="px-8 pt-5 pb-8 d-flex flex-column">
      <v-row no-gutters class="flex-0-0">
        <span class="text-subtitle-1 font-weight-bold text-main-color">{{ props.card.type }}</span>
        <span class="text-subtitle-1 mx-2" style="color: #cfcfcf;">|</span>
        <span class="text-subtitle-1 text-color-727171">{{ props.card.thesis.orgType }}</span>
      </v-row>

      <!-- 논문 -->
      <v-row no-gutters v-if="props.card.type==='논문'" class="mt-5">
        <v-col style="width: 163px; flex: 0 0 auto;">
          <v-img width="163" height="310" :src="imageLibSrc(props.card.id)" />
        </v-col>

        <v-col class="d-flex flex-column justify-space-between ml-4">
          <strong class="text-24 text-black letter font-weight-semi-bold ellipsis-line3">
            {{ props.card.thesis ? props.card.thesis.title : '' }}
          </strong>

          <div class="text-subtitle-1 text-color-222">
            <p>
              <span class="font-weight-bold">저자</span>
              <span class="ml-2">{{ props.card.thesis.author }}</span>
            </p>

            <p>
              <span class="font-weight-bold">발행</span>
              <span class="ml-2">{{ props.card.thesis.publisher }}</span>
            </p>

            <p>
              <span class="font-weight-bold">연도</span>
              <span class="ml-2">{{ props.card.thesis.publishedYear }}</span>
            </p>

            <span class="font-weight-bold mt-4 text-color-999">원문보기</span>
            <span class="ml-2">
              <v-btn
                :href="props.card.thesis.url"
                rel="noopener noreferrer"
                target="_blank"
                variant="text"
                @click.stop
              >
                <v-icon icon="mdi-arrow-top-right" size="large" start />
              </v-btn>
            </span>
          </div>
        </v-col>
      </v-row>

      <!-- 보고서 -->
      <v-row no-gutters v-if="props.card.type==='보고서'" class="mt-5">
        <v-col class="d-flex flex-column justify-space-between">
          <strong class="text-24 text-black letter font-weight-semi-bold ellipsis-line3">
            {{ props.card.thesis ? props.card.thesis.title : '' }}
          </strong>

          <v-sheet class="d-flex justify-space-between align-end">
            <p>
              <v-img width="163" height="210" :src="imageLibSrc(props.card.id)" />
            </p>

            <div class="text-subtitle-1 text-color-222 ml-4">
              <p>
                <span class="font-weight-bold">저자</span>
                <span class="ml-2">{{ props.card.thesis.author }}</span>
              </p>

              <p>
                <span class="font-weight-bold">발행</span>
                <span class="ml-2">{{ props.card.thesis.publisher }}</span>
              </p>

              <p>
                <span class="font-weight-bold">연도</span>
                <span class="ml-2">{{ props.card.thesis.publishedYear }}</span>
              </p>

              <span class="font-weight-bold mt-4 text-color-999">원문보기</span>
              <span class="ml-2">
                <v-btn
                  :href="props.card.thesis.url"
                  rel="noopener noreferrer"
                  target="_blank"
                  variant="text"
                  @click.stop
                >
                  <v-icon icon="mdi-arrow-top-right" size="large" start />
                </v-btn>
              </span>
            </div>
          </v-sheet>
        </v-col>
      </v-row>
    </v-sheet>
  </v-container>
</template>

<style lang="scss" scoped>
.letter {
  line-height: normal;
  letter-spacing: 0;
}

.ellipsis-line3 { overflow: hidden; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; text-overflow: ellipsis; }

.data { width: 440px; height: 400px; flex: 0 0 auto; max-width: none; }
</style>
