<script setup>
// Utilities
import { computed } from 'vue'
import { parseDate } from '@/utils/util'

const props = defineProps({
  modelValue: {
    type: Object,
    default: null
  },
  items: {
    type: Object,
    default: null
  }
})

const emit = defineEmits(['update:modelValue'])
const model = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    return emit('update:modelValue', value)
  }
})

function clickProc(value) {
  console.log('select value=', value)
  model.value = value
}
</script>

<template>
  <v-select
    v-model="model"
    :items="items"
    item-title="enforceDate"
    item-value="id"
    variant="outlined"
    density="compact"
    :menu-props="{
      closeOnContentClick: true
    }"
    return-object
    single-line
    hide-details
  >
    <template #item="{ item }">
      <v-list-item
        :key="item.title"
        :value="item.value"
        density="compact"
        min-height="5"
        @click="clickProc(item)"
      >
        <span class="date_item">{{ parseDate(item.title) }}</span>
      </v-list-item>
    </template>

    <template #selection="{ item }">
      <span>{{ parseDate(item.title) }}</span>
    </template>
  </v-select>
</template>

<style lang="scss" scoped>
$list-item-min-height: 10px;
$select-line-height: 1;
$list-item-one-line-min-height: 10px;
$list-item-padding: 0px;
$list-item-title-line-height: 10px;

.select {
  width: 60px;
  max-height: 60px;
  font-size: 11px;
}

.date_item {
  padding: 0;
  margin: 0;
  font-size: 13px;
}
.tile ::v-deep(v-list-item) {
  padding: 0;
  margin: 0;
}
.v-select ::v-deep(input) {
  font-size: 14px;
  font-weight: 100;
  text-transform: capitalize;
}
.tile .v-list__tile {
  border-radius: 4px;
}
.tile:hover {
  background: rgb(164, 232, 248);
}
</style>
