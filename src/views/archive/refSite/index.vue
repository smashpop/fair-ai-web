<script setup>
// Components
import SmallSearchField from '@/components/app/SmallSearchField'
import RefSiteView from './RefSiteView.vue'
import FilterView from './FilterView'
</script>

<template>
  <v-container fluid class="bg-white">
    <div class="mx-16">
      <v-sheet class="text-center mx-auto px-4" height="80" max-width="800" width="100%">
        <div class="text-h2 font-weight-black text-black my-5">참고사이트</div>
      </v-sheet>

      <v-row class="my-4" justify="center">
        <SmallSearchField />
      </v-row>
      <v-divider class="my-4 border-opacity-100" :thickness="3" />

      <v-row>
        <v-col cols="12" md="2">
          <FilterView />
        </v-col>
        
        <v-col cols="12" md="8">
          <RefSiteView />
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>
