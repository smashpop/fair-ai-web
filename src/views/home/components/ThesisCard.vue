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
  <v-container>
    <v-sheet v-if="props.card" class="pa-4" elevation="0">
      <span class="text-subtitle-1 font-weight-bold text-blue mb-4">논문</span>
      <span class="text-subtitle-1 font-weight-bold text-medium-emphasis mb-4 mx-2">|</span>
      <span class="text-subtitle-1 text-medium-emphasis mb-4">
        {{ props.card.id }}
      </span>
      <div>
        <v-sheet height="150" elevation="0">
          <strong class="text-30 letter font-weight-bold">
            {{ props.card.thesis ? props.card.thesis.title : '' }}
          </strong>
        </v-sheet>
      </div>

      <div>
        <v-row>
          <v-col cols="12" md="5">
            <v-img width="163" height="210" :src="imageLibSrc(props.card.id)" />
          </v-col>

          <v-col cols="12" md="7" align-self="end" class="mb-2">
            <div>
              <span class="text-subtitle-1 font-weight-bold mb-4">저자</span>
              <span class="text-subtitle-1 ml-2 mb-4">{{ props.card.thesis.author }}</span>
            </div>
            <div>
              <span class="text-subtitle-1 font-weight-bold mb-4">발행</span>
              <span class="text-subtitle-1 ml-2 mb-4">{{ props.card.thesis.publisher }}</span>
            </div>
            <div>
              <span class="text-subtitle-1 font-weight-bold mb-4">연도</span>
              <span class="text-subtitle-1 ml-2 mb-4">{{ props.card.thesis.publishedYear }}</span>
            </div>
            <div>
              <span class="text-subtitle-1 mb-4">원문보기</span>
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
