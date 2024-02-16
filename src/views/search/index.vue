<script setup>
// Components
import SearchSection from './components/searchSection'

// Utilities
const { dataObj } = history.state
console.log(dataObj)
</script>

<template>
  <v-container class="w-75">
    <SearchSection />
  </v-container>
</template>
