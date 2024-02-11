<script setup>
// Utilities
import { ref } from 'vue'
const scrollInvoked = ref(0)

function onScroll() {
  scrollInvoked.value++
  console.log('scrollInvoked.value=', scrollInvoked.value)
}
</script>

<template>
  <v-main v-scroll.self="onScroll">
    <router-view />
  </v-main>
</template>

<style lang="scss" scoped>
</style>
