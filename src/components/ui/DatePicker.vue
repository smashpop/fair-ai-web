<script setup>
// Utilities
import { ref, computed } from 'vue'
import { useDate } from 'vuetify'

const prop = defineProps({
  modelValue: {
    type: String,
    default: null
  },
  label: {
    type: String,
    default: null
  }
})
const menu = ref(false)
const date = useDate()

const emit = defineEmits(['update:modelValue'])
const model = computed({
  get() {
    return prop.modelValue
  },
  set(value) {
    return emit('update:modelValue', value)
  }
})

const getDate = computed(() => {
  return model.value ? new Date(model.value) : new Date()
})

function updateDate(val) {
  menu.value = false
  model.value = date.toISO(val)
  console.log(val)
}
</script>

<template>
  <div>
    <v-menu v-model="menu" :close-on-content-click="false" min-width="290px">
      <template #activator="{ props }">
        <v-text-field
          v-bind="props"
          :model-value="model"
          :label="label"
          variant="outlined"
          density="compact"
          append-inner-icon="mdi-calendar"
        ></v-text-field>
      </template>

      <v-locale-provider locale="ko">
        <v-date-picker
          color="primary"
          :model-value="getDate"
          elevation="12"
          @update:model-value="updateDate"
        ></v-date-picker>
      </v-locale-provider>
    </v-menu>
  </div>
</template>
