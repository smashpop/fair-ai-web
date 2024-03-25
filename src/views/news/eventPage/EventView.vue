<script setup>
// Components
// Utilities
import { ref, watch } from 'vue'

// Apis
import { fetchEvent  } from '@/apis/event'

// Utilities
const props = defineProps({
  id: {
    type: Number,
    default: null
  }
})
// Apis
const loading = ref(false)
const eventData = ref(false)

// Methods
loadFromServer()

watch(
  props.id,
  (value) => {
    loadFromServer()
  },
  { deep: true }
)

async function loadFromServer() {
  loading.value = true

  await fetchEvent( props.id )
    .then((response) => {
    	eventData.value = response.data
      console.log('event=', eventData.value)
    })
    .catch(async (error) => {
    	console.log(error)
    })

  loading.value = false
}
</script>

<template>

{{ eventData }}
</template>

<style lang="scss" scoped></style>
