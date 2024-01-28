<script setup>
// Utilities
import { ref } from 'vue'

const keyword = ref('')
const emit = defineEmits(['search'])

function searchClick(keyword) {
  console.log('searchClick()=', keyword)
  emit('search', keyword)
}
</script>

<template>
  <v-text-field
    v-model="keyword"
    placeholder="검색"
    class="mr-16"
    color="primary"
    style="max-width: 600px"
    variant="outlined"
    rounded
    density="comfortable"
    append-inner-icon="mdi-magnify"
    single-line
    hide-details
    @keyup.enter.prevent="searchClick(keyword)"
  />
</template>

<style lang="scss" scoped></style>
