<script setup>
// Utilities
import { ref, watch } from 'vue'
import { fetchList } from '@/apis/notice'
import { parseDate } from '@/utils/util'

const items = ref([])
const loading = ref(false)
const serverItemsLength = ref(0)
const serverOptions = ref({
  page: 1,
  rowsPerPage: 20,
  sortBy: 'createdAt',
  sortType: 'desc'
})

async function loadFromServer() {
  loading.value = true

  await fetchList(serverOptions.value)
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
    <div class="d-flex justify-space-between">
      <strong class="pa-0 mb-4 text-h6 font-weight-bold"> 공지사항 </strong>
    </div>

    <v-divider class="mb-2"></v-divider>

    <v-list>
      <v-list-item v-for="(item, index) in items" :key="index">
        <div class="d-flex justify-space-between align-center" style="height: 40px">
          <div class="d-flex align-baseline flex-1">
            <div class="text-18 font-weight-medium">
              {{ item.title }}
            </div>
          </div>

          <div class="text-16">
            {{ item.updatedAt ? parseDate(item.updatedAt) : parseDate(item.createdAt) }}
          </div>
        </div>
        <v-divider class="my-2"></v-divider>

      </v-list-item>
    </v-list>
</template>

<style lang="scss" scoped></style>
