<script setup>
// Components
import EventRegistView from './EventRegistView'
</script>

<template>
  <v-container fluid class="bg-white">
    <div class="text-center text-h2 font-weight-black text-black mx-16 my-5">행사등록 신청</div>
    <v-divider class="my-4 border-opacity-100" :thickness="3" />

    <EventRegistView />
  </v-container>
</template>
