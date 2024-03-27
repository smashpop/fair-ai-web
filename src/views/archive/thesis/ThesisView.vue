<script setup>
// Components
import ThesisCard from '@/components/app/ThesisCard'

// Utilities
import { ref, watch } from 'vue'
import { fetchList } from '@/apis/thesis'

const page = ref(1)
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
    <ThesisCard :thesis="item" />
    <v-divider class="my-8" />
  </div>
  <div class="text-center">
    <v-pagination
      v-model="page"
      class="fair-pg"
      rounded="circle"
      :length="10"
      :total-visible="10"
    ></v-pagination>
  </div>
</template>

<style lang="scss" scoped></style>
