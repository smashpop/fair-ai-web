<script setup>
// Utilities
import { ref, watch } from 'vue'
import { fetchList } from '@/apis/report'
import { parseDate } from '@/utils/util'

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
  <BaseCard>
    <div class="d-flex justify-space-between">
      <v-card-title class="pa-0 mb-4 text-h6 font-weight-bold"> 보고서 </v-card-title>
      <v-btn size="small" flat class="text-primary text-capitalize"> View All </v-btn>
    </div>

    <v-divider class="mb-2"></v-divider>

    <v-list density="compact">
      <v-list-item v-for="(item, index) in items" :key="index">
        <div class="d-flex justify-space-between align-center">
          <div class="d-flex align-baseline flex-1">
            <div class="bg-info pa-1 rounded-circle me-2"></div>
            <div>
              <div class="text-body-2 font-weight-medium">
                {{ item.title }}
              </div>
            </div>
          </div>

          <div class="text-body-2">
            {{ item.updatedAt ? parseDate(item.updatedAt) : parseDate(item.createdAt) }}
          </div>
        </div>
      </v-list-item>
    </v-list>
  </BaseCard>
</template>

<style lang="scss" scoped></style>
