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
    <v-row class="mx-16">
      <v-col cols="1"> </v-col>

      <v-col cols="2" class="mt-12">
        <strong class="text-h3 font-weight-bold text-white">행사안내</strong>
      </v-col>

      <v-col cols="9">
        <div class="py-6" />

        <EventPoster />
      </v-col>
    </v-row>
  </div>
</template>

<style lang="scss" scoped>
.bg_image {
  background: url('../../../assets/EventImage.png');
  height: 540px;
}
</style>
