<script setup>
// Utilities

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
        <v-img width="410" height="226" cover :src="props.card.thumbnailUrl" />
      </div>
      <div>
        <v-sheet class="my-4" height="100" elevation="0">
          <strong class="text-30 font-weight-black">
            {{ props.card ? props.card.title : '' }}
          </strong>
        </v-sheet>
      </div>

      <div>
        <strong class="text-subtitle-1 mb-4">매일경제 자세히보기</strong>
      </div>
    </v-sheet>
  </v-container>
</template>
