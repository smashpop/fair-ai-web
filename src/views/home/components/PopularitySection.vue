<script setup>
// Components
import ThesisCard from './ThesisCard'

const props = defineProps({
  thesis: {
    type: Object,
    default: null
  }
})
</script>

<template>
  <div class="mx-16">
    <v-row no-gutters>
      <v-col cols="12" md="4">
        <ThesisCard />
      </v-col>
      <v-col cols="12" md="4">
        <ThesisCard />
      </v-col>
      <v-col cols="12" md="4">
        <ThesisCard />
      </v-col>
    </v-row>
  </div>
</template>
