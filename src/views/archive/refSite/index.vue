<script setup>
// Components
import SmallSearchField from '@/components/app/SmallSearchField'
import RefSiteView from './RefSiteView.vue'
import FilterView from './FilterView'
</script>

<template>
  <v-sheet class="mx-auto d-flex justify-center align-end" width="1360" height="180"> 
    <p class="text-68 font-weight-bold text-black">참고사이트</p>
  </v-sheet>

  <v-sheet class="bo-sch mt-3 d-flex justify-center mx-auto" width="1360">
    <SmallSearchField />
  </v-sheet>

  <v-divider class="mt-15 mb-4" :thickness="1" />
    <v-sheet class="mx-auto snb" width="1360">
      <v-btn variant="plain" :ripple="false" class="btn-plain-custom">국내</v-btn>
      <v-btn variant="plain" :ripple="false" class="btn-plain-custom on">국외</v-btn>      
    </v-sheet>
  <v-divider class="mt-4" :thickness="1" />


  <v-sheet class="mx-auto board mt-15" width="1360">
    <v-container class="pa-0" fluid>
      <v-row justify="space-between" align="center" no-gutters>
        <v-col class="d-flex align-center line-height-normal">
          <p class="text-34 font-weight-bold text-black">국외</p>
        </v-col>
      </v-row>

      <v-divider class="border-opacity-100 mt-5" :thickness="3" />

      <v-row no-gutters class="justify-space-between">
        <v-col class="side-menu">
          <FilterView />
        </v-col>

        <v-col class="contents pt-10">
          <RefSiteView />
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>