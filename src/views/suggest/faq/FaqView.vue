<script setup>
// Components
import FaqCard from './FaqCard'

// Utilities
import { ref, watch } from 'vue'
import { fetchList } from '@/apis/faq'

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
    <FaqCard :faq="item" />
    <v-divider style="opacity: 1; border-color: #e4e4e4;"></v-divider>
  </div>

  <div class="text-center mt-10">
    <v-pagination
      v-model="page"
      class="fair-pg"
      rounded="circle"
      :length="10"
      :total-visible="10"
    ></v-pagination>
  </div>

  <v-sheet
    class="mx-auto mt-15 d-flex align-center"
    width="1360"
    height="182"
    style="border: 1px solid #cfcfcf; border-radius: 8px"
  >
    <v-container class="pa-0 d-flex flex-column align-center" fluid>
      <v-row no-gutters class="d-flex justify-space-between">
        <p class="text-body-1 text-color-555 font-weight-medium">
          추가적인 제안이나, FAQ로 해결되지 않는 사항은 문의/제안 등록을 통해 담당자에게 직접 요청할 수 있습니다.
        </p>
      </v-row>

      <v-row no-gutters class="mt-7">
        <v-btn variant="text" href="/suggest/suggest" class="suggest"> 문의·제안 등록 → </v-btn>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<style lang="scss" scoped>
.suggest {
  padding: 0;
  margin: 0;
  width: 200px;
  height: 60px;
  text-align: center;
  background: #222;
  border-radius: 30px;
  color: #fff;
  font-size: 14px;
  font-weight: 700;
}
</style>
