<script setup>
// Utilities
import { computed } from 'vue'
import tempImageSrc from '@/assets/images/TempImage.png'

const props = defineProps({
  item: {
    type: Object,
    default: null
  }
})
const name = computed(() => {
  return props.item.nation ? props.item.nation.name : props.item.organization.name
})
const summary = computed(() => {
  return props.item.summary ? props.item.summary.substring(0, 500) : null
})
</script>

<template>
  <v-container class="pa-0" fluid>
    <v-row no-gutters>
      <span class="text-16 text-color-222 font-weight-bold">
        {{ name }}
      </span>
    </v-row>

    <v-row no-gutters class="mt-4">
      <v-col style="width: 100px; flex: 0 0 auto;">
        <span v-if="item.orgType === '국가'">
          <country-flag :country="item.nation.iso" size="big"/>
        </span>
      </v-col>

      <v-col style="width: auto;">
        <p class="text-body-1" style="word-break: break-word;">
          {{ props.item.url }}
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<style lang="scss" scoped>
.flag { border: 1px solid #f4f4f4; }
//.flag { zoom: 1.54; }
</style>