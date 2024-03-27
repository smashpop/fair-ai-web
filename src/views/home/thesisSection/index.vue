<script setup>
// Components
import ThesisCard from '../components/ThesisCard'

// Utilities
import { ref } from 'vue'
import { fetchList } from '@/apis/curation'

const items = ref([])
const loading = ref(false)
const serverItemsLength = ref(0)

async function loadFromServer() {
  loading.value = true

  await fetchList()
    .then((response) => {
      items.value = response.data.items
      serverItemsLength.value = response.data.total
    })
    .catch((error) => {
      console.log(error)
    })

  loading.value = false
  console.log('curation items=', items.value)
}

// initial load
loadFromServer()
</script>

<template>
  <v-sheet elevation="0" class="mx-auto" width="1360" style="min-width: 1360px; background: transparent; padding-bottom: 100px;">
    <v-row no-gutters class="justify-space-between">
      <v-col style="flex: 0 0 auto; width: auto; ">
        <ThesisCard :card="items[0]" />
      </v-col>

      <v-divider vertical />

      <v-col style="flex: 0 0 auto; width: auto; ">
        <ThesisCard :card="items[1]" />
      </v-col>

      <v-divider vertical />

      <v-col style="flex: 0 0 auto; width: auto; ">
        <ThesisCard :card="items[2]" />
      </v-col>
    </v-row>
  </v-sheet>
</template>
