<script setup>
// Components
import ArticleCard from '@/components/app/ArticleCard'

// Utilities
import { ref, watch } from 'vue'
import { fetchList } from '@/apis/article'

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
    <ArticleCard
      :title="item.title"
      :text="item.previewText ? item.previewText.substring(0, 250) : null"
      :thumbnail="item.thumbnailUrl"
    />
    <div class="py-1" />
  </div>
</template>

<style lang="scss" scoped></style>
