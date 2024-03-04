<script setup>
// Components
import GuidelineCard from '@/components/app/GuidelineCard'

// Utilities
import { ref, watch } from 'vue'
import { fetchList } from '@/apis/guideline'

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
    <GuidelineCard :item="item" />
    <v-divider class="mb-2 mx-2" />
  </div>
</template>

<style lang="scss" scoped></style>
