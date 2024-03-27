<script setup>
// Components
import ArticleCard from './ArticleCard'

// Utilities
import { ref } from 'vue'
import { fetchLastList } from '@/apis/article'

const items = ref([])
const loading = ref(false)
const serverItemsLength = ref(0)

async function loadFromServer() {
  loading.value = true

  await fetchLastList()
    .then((response) => {
      items.value = response.data.items
      serverItemsLength.value = response.data.total
    })
    .catch((error) => {
      console.log(error)
    })

  loading.value = false
  console.log('article card items=', items.value)
}

// initial load
loadFromServer()
</script>

<template>
  <v-sheet class="mx-0" elevation="0" style="background: transparent;">

    <v-divider class="border-opacity-100" :thickness="3" />

    <v-row no-gutters class="d-flex justify-space-between">      
      <v-col style="max-width: none; width: 410px; flex: 0 0 auto;">
        <ArticleCard :card="items[0]" />
      </v-col>

      <v-divider vertical/>

      <v-col style="max-width: none; width: 410px; flex: 0 0 auto;">
        <ArticleCard :card="items[1]" />
      </v-col>
    </v-row>
  </v-sheet>
</template>
