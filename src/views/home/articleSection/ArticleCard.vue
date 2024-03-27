<script setup>
// Utilities
import tempImageSrc from '@/assets/images/TempImage.png'

const props = defineProps({
  card: {
    type: Object,
    default: null
  }
})
</script>

<template>
  <v-container fluid class="pa-0">
    <v-sheet v-if="props.card" elevation="0" style="background: transparent;">
      <div>
        <v-img 
          width="410" 
          height="226" 
          cover 
          :src="card.thumbnailUrl ? card.thumbnailUrl : tempImageSrc" />
      </div>

      <div class="mt-9">
        <v-sheet elevation="0" style="background: transparent;">
          <strong class="text-30 font-weight-semi-bold text-black letter ellipsis-line2">
            {{ props.card ? props.card.title : '' }}
          </strong>
        </v-sheet>
      </div>

      <div class="d-flex align-center mt-8">
        <p>{{ props.card.mediaName }}</p>

        <p class="text-body-1 text-color-727171"><span style="color: #cfcfcf;">ㅣ</span>1시간<span style="color: #cfcfcf;">ㅣ</span></p>

        <v-btn
          :href="props.card.url"
          rel="noopener noreferrer"
          target="_blank"
          variant="plain"
          class="text-body-1 font-weight-bold text-color-999 btn-plain-custom"
          :ripple="false"
        >
          <span>자세히보기</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none" style="margin: 0 0 2px 8px;">
            <path d="M1 9L9 1" stroke="#999999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M1 1H9V9" stroke="#999999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </v-btn>
      </div>
    </v-sheet>
  </v-container>
</template>

<style lang="scss" scoped>
.letter {
  line-height: normal;
  letter-spacing: 0;
}

.ellipsis-line2 { overflow: hidden; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; text-overflow: ellipsis; }
</style>