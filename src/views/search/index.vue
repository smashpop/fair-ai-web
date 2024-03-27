<script setup>
// Components
import SearchSection from './components/searchSection'

// Utilities
const { dataObj } = history.state
console.log(dataObj)
</script>

<template>
  <v-container fluid class="pa-0">
    <SearchSection />
  </v-container>
</template>
