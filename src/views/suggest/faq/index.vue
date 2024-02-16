<script setup>
// Components
import FaqView from './FaqView'
</script>

<template>
  <v-container fluid class="bg-white h-screen">
    <div class="text-center text-h2 font-weight-black text-black mx-16 my-5">FAQ</div>
    <v-divider class="my-4 border-opacity-100" :thickness="3" />

    <FaqView />
  </v-container>
</template>
