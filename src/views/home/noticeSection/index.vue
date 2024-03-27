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
  <v-sheet width="1360" class="mx-auto" elevation="0" style="padding: 70px 0 100px;">
    <v-divider class="border-opacity-100" :thickness="3"></v-divider>

    <div class="d-flex justify-space-between align-center" style="height: 80px">
      <strong class="text-20 font-weight-bold text-black"> 공지사항 </strong>
      <v-btn 
      variant="plain" 
      class="text-16 text-black font-weight-semi-bold btn-plain-custom" 
      :ripple="false"
      > 
        <span>전체보기</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none" class="ml-2">
          <path d="M1 7H13" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
         <path d="M7 1L13 7L7 13" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </v-btn>
    </div>

    <v-divider class="border-opacity-100"></v-divider>

    <v-list style="padding: 0; margin: 0;">
      <v-list-item v-for="(item, index) in items" :key="index" style="padding: 0; margin: 0;">
        <div class="d-flex justify-space-between align-center" style="height: 80px">
          <div class="text-16 font-weight-semi-bold text-black">
            {{ item.title }}
          </div>

          <div class="text-16 text-color-727171">
            {{ item.updatedAt ? parseDate(item.updatedAt) : parseDate(item.createdAt) }}
          </div>
        </div>

        <v-divider class="border-opacity-100"></v-divider>
      </v-list-item>
    </v-list>
  </v-sheet>
</template>

<style lang="scss" scoped></style>
