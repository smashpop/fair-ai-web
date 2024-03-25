<script setup>
// Components
import SmallSearchField from '@/components/app/SmallSearchField'
import NoticeView from './NoticeView'
defineProps({
  id: {
    type: Number,
    default: null
  }
})
</script>

<template>
  <v-sheet class="mx-auto d-flex justify-center align-end" width="1360" height="180">
    <p class="text-68 font-weight-bold text-black">관련행사-{{ id }}</p>
  </v-sheet>

  <v-sheet class="bo-sch mt-3 d-flex justify-center mx-auto" width="1360">
    <SmallSearchField />
  </v-sheet>

  <v-divider class="mt-15 mb-4" :thickness="1" />

  <v-divider class="mt-4" :thickness="1" />

  <v-sheet class="mx-auto board mt-15" width="1360">
    <v-container fluid class="pa-0">
      <v-divider class="border-opacity-100 mt-5" :thickness="3" />

      <v-row no-gutters class="justify-space-between">

        <v-col class="contents pt-10">
          <NoticeView :id="id"/> 
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>
