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
  <v-container fluid class="pa-0 ma-0">
    <v-sheet v-if="props.card" elevation="0" style="height: 100%; background: #fff;" class="d-flex flex-column justify-space-between">
      <v-row no-gutters class="width: 100%;">
        <span class="text-subtitle-1 font-weight-bold text-main-color">{{ props.card.type }}</span>
        <span class="text-subtitle-1 mx-2" style="color: #cfcfcf;">|</span>
        <span class="text-subtitle-1 text-color-727171">{{ props.card.thesis.orgType }}</span>
      </v-row>

      <!-- 논문 -->
      <v-row no-gutters v-if="props.card.type==='논문'" style="flex: 0 0 auto; height: 310px;">
        <v-col style="width: 163px; flex: 0 0 auto;">
          <v-img width="163" height="310" cover :src="imageLibSrc(props.card.id)" />
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
            
            <v-btn
              :href="props.card.thesis.url"
              rel="noopener noreferrer"
              target="_blank"
              variant="plain"
              class="btn-plain-custom mt-4"
              @click.stop
            >
              <span class="text-body-1 font-weight-bold text-color-999 mr-2">원문보기</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none" style="margin-bottom: 2px;">
                <path d="M1 9L9 1" stroke="#999999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M1 1H9V9" stroke="#999999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </v-btn>
          </div>
        </v-col>
      </v-row>

      <!-- 보고서 -->
      <v-row no-gutters v-if="props.card.type==='보고서'" style="flex: 0 0 auto; height: 310px;">
        <v-col class="d-flex flex-column justify-space-between">
          <strong class="text-24 text-black letter font-weight-semi-bold ellipsis-line3">
            {{ props.card.thesis ? props.card.thesis.title : '' }}
          </strong>

          <v-sheet class="d-flex justify-space-between align-end">
            <p>
              <v-img width="163" height="210" cover :src="imageLibSrc(props.card.id)" />
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

            <v-btn
              :href="props.card.thesis.url"
              rel="noopener noreferrer"
              target="_blank"
              variant="plain"
              class="btn-plain-custom mt-4"
              @click.stop
            >
              <span class="text-body-1 font-weight-bold text-color-999 mr-2">원문보기</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none" style="margin-bottom: 2px;">
                <path d="M1 9L9 1" stroke="#999999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M1 1H9V9" stroke="#999999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </v-btn>
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
</style>
