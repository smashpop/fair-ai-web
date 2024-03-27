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
  <p class="text-18 font-weight-medium text-black"><strong style="font-weight: 800;">'자율주행'</strong> 관련 인기자료</p>

  <v-row v-if="populars.length" no-gutters class="justify-space-between mt-5">
    <v-col style="flex: 0 0 auto; width: 440px; height: 400px; background: #fff;" class="px-8 pt-5 pb-8">
      <ThesisCard :card="populars[0].popular_item_list[0]" />
    </v-col>

    <v-col style="flex: 0 0 auto; width: 440px; height: 400px; background: #fff;" class="px-8 pt-5 pb-8">
      <ThesisCard :card="populars[0].popular_item_list[1]" />
    </v-col>

    <v-col style="flex: 0 0 auto; width: 440px; height: 400px; background: #fff;" class="px-8 pt-5 pb-8">
      <ThesisCard :card="populars[0].popular_item_list[2]" />
    </v-col>
  </v-row>
</template>

<style lang="scss" scoped>
</style>