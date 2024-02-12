<script setup>
// Components
import ReportCard from '@/components/app/ReportCard'

// Utilities
import { ref, watch } from 'vue'
import { fetchList } from '@/apis/report'

const items = ref([])
const loading = ref(false)
const serverItemsLength = ref(0)
const serverOptions = ref({
  page: 1,
  rowsPerPage: 20,
  sortBy: 'createdAt',
  sortType: 'desc',
  keyword: null
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
  <div v-for="(item, index) in items" :key="index">
    <ReportCard :report="item" />
    <v-divider class="mb-2 mx-2"/>
  </div>
  <div class="text-center">
    <v-pagination
      v-model="page"
      class="my-4"
      rounded="circle"
      :length="15"
      :total-visible="6"
    ></v-pagination>
  </div>
</template>

<style lang="scss" scoped></style>
