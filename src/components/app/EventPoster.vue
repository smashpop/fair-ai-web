<script setup>
const props = defineProps({
  thumbnailUrl: {
    type: String,
    default: '@/assets/poster.png'
  }
})
</script>

<template>
  <v-img src="../../assets/poster.png" height="250" />
</template>
