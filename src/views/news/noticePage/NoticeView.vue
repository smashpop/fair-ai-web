<script setup>
// Components

// Utilities
import { ref, watch } from 'vue'

// Apis
import { fetchNotice  } from '@/apis/notice'

const props = defineProps({
  id: {
    type: Number,
    default: null
  }
})
const loading = ref(false)
const notice = ref(false)

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

  await fetchNotice( props.id )
    .then((response) => {
    	notice.value = response.data
      console.log('notice=', notice.value)
    })
    .catch(async (error) => {
    	console.log(error)
    })

  loading.value = false
}
</script>

<template>

{{ notice }}
</template>

<style lang="scss" scoped></style>
