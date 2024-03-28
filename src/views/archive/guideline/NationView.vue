<script setup>
// Components
import NationGuidelineCard from './components/NationGuidelineCard'

// Utilities
import { ref, watch } from 'vue'
import { fetchNationList } from '@/apis/guideline'

const items = ref([])
const loading = ref(false)
const serverItemsLength = ref(0)
const serverOptions = ref({
  page: 1,
  rowsPerPage: 20,
  keyword: null
})

async function loadFromServer() {
  loading.value = true

  await fetchNationList(serverOptions.value)
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
  <v-sheet class="mx-auto board mt-15" width="1360">
    <v-container class="pa-0" fluid>
      <v-row justify="space-between" align="center" no-gutters>
        <v-col class="d-flex align-center line-height-normal">
          <p class="text-34 font-weight-bold text-black">국가</p>
        </v-col>

        <v-col class="d-flex justify-end">
          <p class="text-black font-weight-medium">
            업데이트 : <span class="text-color-727171">2024.01.21</span>
          </p>
        </v-col>
      </v-row>

      <v-divider class="border-opacity-100 mt-5" :thickness="3" />

      <v-row no-gutters class="justify-space-between">
        <v-sheet
          v-for="(item, index) in items"
          :key="index"
          width="650"
          style="padding: 30px 0 35px; min-height: 160px; border-bottom: 1px solid #e4e4e4"
        >
          <NationGuidelineCard :item="item" />
        </v-sheet>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<style lang="scss" scoped></style>
