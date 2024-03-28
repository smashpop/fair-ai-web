<script setup>
// Utilities

const props = defineProps({
  faq: {
    type: Object,
    default: null
  }
})

console.log(props.faq);
</script>

<template>
  <v-expansion-panels>
    <v-expansion-panel elevation="0">
      <v-expansion-panel-title>
        <div class="d-flex align-center">
          <p 
          style="width: 50px;"
          class="text-16 font-weight-medium text-center"
          >
          10
          </p>

          <p 
          style="wdith: 80px; margin: 0 30px;"
          class="text-16 text-color-555 font-weight-medium text-center"
          >
          {{ props.faq.category.name }}
          </p>

          <p>{{ props.faq.title }}</p>
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

<style lang="scss" scoped>
.v-expansion-panels { background: transparent; }
.v-expansion-panels .v-expansion-panel { background: transparent; border-radius: 0; }
.v-expansion-panels .v-expansion-panel:deep(.v-expansion-panel__shadow) { display: none; }

.v-expansion-panels .v-expansion-panel:deep(.v-expansion-panel-title) { height: 100px; padding: 0; margin: 0; display: flex; color: #000; font-size: 20px; font-weight: 700; line-height: normal; padding: 0 30px; background: transparent; }
.v-expansion-panels .v-expansion-panel:deep(.v-expansion-panel-title--active) { min-height: auto; }
.v-expansion-panels .v-expansion-panel:deep(.v-expansion-panel-title) .v-expansion-panel-title__overlay { display: none; }
.v-expansion-panels .v-expansion-panel:deep(.v-expansion-panel-title) > span { display: block; }

.v-expansion-panels .v-expansion-panel:deep(.v-expansion-panel-text) { background: #fff; box-sizing: border-box; border: 0; border-radius: 0; }
.v-expansion-panels .v-expansion-panel:deep(.v-expansion-panel-text) .v-expansion-panel-text__wrapper { padding: 0; }
.v-expansion-panels .v-expansion-panel:deep(.v-expansion-panel-text) .v-expansion-panel-text__wrapper .v-sheet { border: 0; border-radius: 0; }
</style>