<script setup>
// Components
import ThesisView from '@/views/archive/components/ThesisView.vue'

// Utilities
const { dataObj } = history.state; 
console.log(dataObj); 
</script>

<template>
  <v-container>
    <strong class="text-h5 font-weight-bold">검색결과: {{ dataObj.searchStr }}</strong>
    <ThesisView />

    <div class="py-1" />
  </v-container>
</template>
