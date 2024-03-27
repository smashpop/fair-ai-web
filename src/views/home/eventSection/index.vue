<script setup>
// Components
import EventPoster from './EventPoster'

// Utilities
import { ref, watch } from 'vue'
import { fetchLastList } from '@/apis/event'

const items = ref([])
const loading = ref(false)
const serverItemsLength = ref(0)
const serverOptions = ref({
  page: 1,
  sortBy: 'createdAt',
  sortType: 'desc'
})

async function loadFromServer() {
  loading.value = true

  await fetchLastList(serverOptions.value)
    .then((response) => {
      items.value = response.data.items
      serverItemsLength.value = response.data.total
    })
    .catch((error) => {
      console.log(error)
    })

  loading.value = false
}

// initial load
loadFromServer()

watch(
  serverOptions,
  (value) => {
    loadFromServer(value)
  },
  { deep: true }
)
</script>

<template>
  <div class="bg_image">
    <v-sheet class="mx-auto" width="1360" style="min-width: 1360px; background: transparent;">
      <EventPoster />
    </v-sheet>
  </div>
</template>

<style lang="scss" scoped>
.bg_image {
  background: url('@/assets/images/EventImage.png');
  height: 670px;
  padding-top: 60px;
  box-sizing: border-box;
}
</style>
