<script setup>
// Components
import ThesisCard from '../components/ThesisCard'
import SearchSection from '../searchSection'
import { popularImageSrc } from '@/utils/common'

const props = defineProps({
  populars: {
    type: Object,
    default: null
  }
})
</script>

<template>
  <p
  v-if="props.populars" 
  style="position: absolute; top: 0; left: 0; width: 100%; height: 860px; background: green;"
  >
    <v-img
      max-height="64"
      :src="popularImageSrc(populars[0].id)"
    />
  </p>

  <v-container class="pa-0" fluid style="position: relative; z-index: 2; padding-top: 118px !important; height: 788px;">
    <v-sheet class="mx-auto" width="1360" style="background: transparent; min-width: 1360px;">      
      <v-chip-group style="position: absolute; left: 50%; top: 150px;">
        <v-chip>Chip 1</v-chip>

        <v-chip>Chip 2</v-chip>

        <v-chip>Chip 3</v-chip>
      </v-chip-group>   
      <SearchSection />
    </v-sheet>

    <v-sheet class="mx-auto" width="1360" style="background: transparent; margin-top: 94px; min-width: 1360px;">
      <p class="text-18 font-weight-medium text-black">
        <strong style="font-weight: 800;" v-if="props.populars">'{{ populars[0].name }}'</strong> 관련 인기자료
      </p>
      
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
    </v-sheet>
  </v-container>
</template>

<style lang="scss" scoped>
</style>