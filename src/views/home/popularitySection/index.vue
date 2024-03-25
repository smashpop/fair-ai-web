<script setup>
// Components
import ThesisCard from '../components/ThesisCard'

// Utilities
import { ref } from 'vue'

// Apis
import { fetchList } from '@/apis/popular'

// Constants
const populars = ref([])
const loading = ref(false)
const serverItemsLength = ref(0)

// Methods
async function loadFromServer() {
  loading.value = true

  await fetchList()
    .then((response) => {
      populars.value = response.data.items
      serverItemsLength.value = response.data.total
    })
    .catch((error) => {
      console.log(error)
    })

  loading.value = false
  console.log('popular items=', populars.value)
}

// initial load
loadFromServer()
</script>

<template>
  <v-row v-if="populars.length" no-gutters>
    <v-col cols="12" md="4">
      <ThesisCard :card="populars[0].popular_item_list[0]" />
    </v-col>

    <v-col cols="12" md="4">
      <ThesisCard :card="populars[0].popular_item_list[1]" />
    </v-col>

    <v-col cols="12" md="4">
      <ThesisCard :card="populars[0].popular_item_list[2]" />
    </v-col>
  </v-row>
</template>
