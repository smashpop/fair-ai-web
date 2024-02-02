<script setup>
// Utilities
import { cardImageSrc } from '@/utils/common'

const props = defineProps({
  card: {
    type: Object,
    default: null
  }
})
</script>

<template>
  <v-container>
    <v-sheet v-if="props.card" class="pa-4" elevation="0">
      <div>
        <h6 class="text-subtitle-1 mb-4">논문 해외</h6>
      </div>

      <div>
        <v-sheet height="150" elevation="0">
          <strong class="text-30 letter" font-weight-bold>
            {{ props.card.thesis ? props.card.thesis.title : '' }}
          </strong>
        </v-sheet>
      </div>

      <div>
        <v-row>
          <v-col cols="12" md="5">
            <v-img width="163" height="210" :src="cardImageSrc(props.card.id)" />
          </v-col>

          <v-col cols="12" md="7">
            <div>
              <strong class="text-subtitle-1 mb-4">저자</strong>
            </div>
            <div>
              <strong class="text-subtitle-1 mb-4">발행</strong>
            </div>
            <div>
              <strong class="text-subtitle-1 mb-4">연도</strong>
            </div>
          </v-col>
        </v-row>
      </div>
    </v-sheet>
  </v-container>
</template>

<style lang="scss" scoped>
.letter {
  line-height: 1.3em;
  letter-spacing: -0.0625em;
}
</style>
