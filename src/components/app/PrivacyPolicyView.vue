<script setup>
// Utilities
import { ref, watch } from 'vue'
import { fetchLast } from '@/apis/privacyPolicy'

const privacyPolicy = ref(null)
const loading = ref(false)
const serverOptions = ref({
  page: 1,
  sortBy: 'createdAt',
  sortType: 'desc'
})

async function loadFromServer() {
  loading.value = true

  await fetchLast(serverOptions.value)
    .then((response) => {
      privacyPolicy.value = response.data.item[0]
      console.log('response.data.item=', response.data.item[0])
      console.log('privacyPolicy=', privacyPolicy.value)

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
      <v-card-title class="pa-0 mb-4 text-h6 font-weight-bold"> 개인정보처리방침 </v-card-title>
    </div>

    <v-divider class="mb-2"></v-divider>
    <v-sheet class="pa-2" color="grey-lighten-4" border rounded min-height="300">
      <span
        class="text-body-2"
        style="white-space: pre-line"
        v-text="privacyPolicy ? privacyPolicy.terms : null"
      />
    </v-sheet>

  </BaseCard>
</template>

<style lang="scss" scoped></style>
