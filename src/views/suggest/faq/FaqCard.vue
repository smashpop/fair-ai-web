<script setup>
// Utilities

const props = defineProps({
  faq: {
    type: Object,
    default: null
  }
})
</script>

<template>
  <v-expansion-panels>
    <v-expansion-panel elevation="0">
      <v-expansion-panel-title>
        <div class="text-18 font-weight-medium">
          {{ props.faq.title }}
        </div>
      </v-expansion-panel-title>

      <v-expansion-panel-text>
        <!-- {{ props.faq.contents }} -->
        <v-sheet class="pa-2" color="grey-lighten-4" border rounded min-height="300">
          <span class="text-body-2" style="white-space: pre-line" v-text="props.faq.contents" />
        </v-sheet>
      </v-expansion-panel-text>
    </v-expansion-panel>
  </v-expansion-panels>
</template>
