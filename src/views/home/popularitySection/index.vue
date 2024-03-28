<script setup>
// Components
import ThesisCard from '../components/ThesisCard'

const props = defineProps({
  populars: {
    type: Object,
    default: null
  }
})
</script>

<template>
  <p class="text-18 font-weight-medium text-black"><strong style="font-weight: 800;">'자율주행'</strong> 관련 인기자료</p>

  <v-row v-if="props.populars" no-gutters class="justify-space-between mt-5">
    <v-col style="flex: 0 0 auto; width: 440px; height: 400px; background: #fff;" class="px-8 pt-5 pb-8 d-flex">
      <ThesisCard :card="populars[0].popular_item_list[0]" />
    </v-col>

    <v-col style="flex: 0 0 auto; width: 440px; height: 400px; background: #fff;" class="px-8 pt-5 pb-8 d-flex">
      <ThesisCard :card="populars[0].popular_item_list[1]" />
    </v-col>

    <v-col style="flex: 0 0 auto; width: 440px; height: 400px; background: #fff;" class="px-8 pt-5 pb-8 d-flex">
      <ThesisCard :card="populars[0].popular_item_list[2]" />
    </v-col>
  </v-row>
</template>

<style lang="scss" scoped>
</style>