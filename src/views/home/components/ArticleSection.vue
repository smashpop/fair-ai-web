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
  <v-sheet class="mx-16" elevation="0">
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
  </v-sheet>
</template>
