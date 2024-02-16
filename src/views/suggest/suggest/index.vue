<script setup>
// Components
import SuggestView from './SuggestView'
</script>

<template>
  <v-container fluid class="bg-white">
    <div class="text-center text-h2 font-weight-black text-black mx-16 my-5">문의/제안 등록</div>
    <v-divider class="my-4 border-opacity-100" :thickness="3" />

    <SuggestView />
  </v-container>
</template>
