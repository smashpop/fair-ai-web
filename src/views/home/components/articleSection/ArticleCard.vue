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
        <v-img height="200" :src="cardImageSrc(props.card.id)" />
      </div>
      <div>
        <v-sheet height="150" elevation="0">
          <strong class="text-h5" font-weight-bold>
            {{ props.card ? props.card.title : '' }}
          </strong>
        </v-sheet>
      </div>

      <div>
        <strong class="text-subtitle-1 mb-4">저자</strong>
      </div>
      <div>
        <strong class="text-subtitle-1 mb-4">발행</strong>
      </div>
    </v-sheet>
  </v-container>
</template>
