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
  <v-sheet v-for="(item, index) in items" :key="index" width="650" style="padding: 30px 0 35px; min-height: 160px; border-bottom: 1px solid #e4e4e4;">
    <GuidelineCard :item="item" />
  </v-sheet>
</template>

<style lang="scss" scoped></style>
