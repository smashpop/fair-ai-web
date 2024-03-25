<script setup>
// Components
import SmallSearchField from '@/components/app/SmallSearchField'
import CurriculumView from './CurriculumView.vue'
</script>

<template>
  <v-sheet class="mx-auto d-flex justify-center align-end" width="1360" height="180">
    <p class="text-68 font-weight-bold text-black">전공/커리큘럼</p>
  </v-sheet>

  <v-sheet class="bo-sch mt-3 d-flex justify-center mx-auto" width="1360">
    <SmallSearchField />
  </v-sheet>

  <v-sheet class="mx-auto board mt-15" width="1360">
    <v-container class="pa-0" fluid>
      <v-divider class="border-opacity-100 mt-5" :thickness="3" />
      <v-row no-gutters>
        <v-col class="pt-10">
          <CurriculumView />
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<style lang="scss" scoped></style>
