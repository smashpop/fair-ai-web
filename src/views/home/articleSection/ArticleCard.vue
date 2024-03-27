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

      <div class="mt-7">
        <v-sheet elevation="0" style="background: transparent;">
          <strong class="text-30 font-weight-semi-bold text-black letter">
            {{ props.card ? props.card.title : '' }}
          </strong>
        </v-sheet>
      </div>

      <div>
        <p>{{ props.card.mediaName }}</p>
        <p>1시간</p>
        <v-btn
          :href="props.card.url"
          rel="noopener noreferrer"
          target="_blank"
          variant="plain"
          class="text-subtitle-1 font-weight-medium btn-plain-custom btn-link"
        >
        자세히 보기
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
</style>