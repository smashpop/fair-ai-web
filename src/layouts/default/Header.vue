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
  <v-app-bar v-scroll.self="onScroll" color="transparent" flat height="48">
    <template #prepend>
      <logo />

      <div class="mx-12">
        <v-btn to="/introduce" variant="text">
          <strong class="text-h6 font-weight-bold">소개</strong>
        </v-btn>
        <v-btn to="/archive" variant="text">
          <strong class="text-h6 font-weight-bold">최신자료</strong>
        </v-btn>

        <v-btn to="/news" variant="text">
          <strong class="text-h6 font-weight-bold">소식</strong>
        </v-btn>

        <v-btn to="/suggest" variant="text">
          <strong class="text-h6 font-weight-bold">문의/제안</strong>
        </v-btn>
      </div>
    </template>
  </v-app-bar>
</template>
