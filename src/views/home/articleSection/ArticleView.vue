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
  <v-sheet class="mx-0" elevation="0">
    <v-row no-gutters>
      <v-divider class="border-opacity-100 mr-4" :thickness="3" />

      <v-col cols="12" md="6">
        <ArticleCard :card="items[0]" />
      </v-col>

      <v-divider class="my-9" vertical />

      <v-col cols="12" md="6">
        <ArticleCard :card="items[1]" />
      </v-col>
    </v-row>
  </v-sheet>
</template>
