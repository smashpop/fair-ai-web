<script setup>
// Utilities
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { fetchList } from '@/apis/notice'
import { parseDate } from '@/utils/util'

// Constants
const items = ref([])
const loading = ref(false)
const serverItemsLength = ref(0)
const serverOptions = ref({
  page: 1,
  rowsPerPage: 20,
  sortBy: 'createdAt',
  sortType: 'desc'
})
const router = useRouter()

async function loadFromServer() {
  loading.value = true

  await fetchList(serverOptions.value)
    .then((response) => {
      items.value = response.data.items
      console.log('notice=', items.value)

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
  <v-divider class="mb-2"></v-divider>

  <v-list>
    <v-list-item v-for="(item, index) in items" :key="index">
      <div
        class="d-flex justify-space-between align-center cursor-pointer" 
        style="height: 40px" 
        align-baseline 
        d-flex
        text-18
        font-weight-medium      
        @click="router.push({ name: 'NoticePage', params: { id: item.id } })"
      >
        {{ item.title }}

        <div class="text-16">
          {{ item.updatedAt ? parseDate(item.updatedAt) : parseDate(item.createdAt) }}
        </div>
      </div>
      <v-divider class="my-2"></v-divider>
    </v-list-item>
  </v-list>
</template>

<style lang="scss" scoped></style>
