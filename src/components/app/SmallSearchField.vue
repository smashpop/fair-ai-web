<script setup>
// Utilities
import { ref } from 'vue'

const keyword = ref('')
const emit = defineEmits(['search', 'click'])

function searchClick(keyword) {
  console.log('searchClick()=', keyword)
  emit('search', keyword)
}

function clickProc() {
  console.log('Click()=')
  emit('click')
}
</script>

<template>
  <v-text-field
    v-model="keyword"
    color="primary"
    bg-color="white"
    style="max-width: 440px"
    variant="outlined"
    rounded
    density="comfortable"
    append-inner-icon="mdi-magnify"
    single-line
    hide-details
    autofocus
    @click.stop="clickProc()"
  >
  </v-text-field>
</template>

<style lang="scss" scoped></style>
