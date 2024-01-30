<script setup>
// Utilities
import { ref, watch } from 'vue'
import { fetchLastList } from '@/apis/notice'
import { parseDate } from '@/utils/util'

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
  <v-card 
    class="mx-6" 
    elevation="0"
    flat
  >
    <v-divider class="mb-1"></v-divider>
    <div class="d-flex justify-space-between">
      <v-card-title class="pa-0 my-2 text-h6 font-weight-bold"> 공지사항 </v-card-title>
      <v-btn size="small" flat class="text-primary text-capitalize"> View All </v-btn>
    </div>
    <v-divider class="mb-1"></v-divider>

    <v-list>
      <v-list-item v-for="(item, index) in items" :key="index">
        <div class="d-flex justify-space-between align-center">

          <div class="d-flex align-baseline flex-1">           
            <div class="text-body-2 font-weight-medium">
              {{ item.title }}
            </div>
          </div>

          <div class="text-body-2">
            {{ item.updatedAt ? parseDate(item.updatedAt) : parseDate(item.createdAt) }}
          </div>
        </div>
        <v-divider class="my-2"></v-divider>

      </v-list-item>
    </v-list>
  </v-card>
</template>

<style lang="scss" scoped></style>
