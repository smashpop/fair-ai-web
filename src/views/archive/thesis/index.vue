<script setup>
// Components
import SearchField from '@/components/app/SearchField'
import ThesisView from './ThesisView.vue'
import FilterView from './FilterView'
</script>

<template>
  <v-container fluid class="bg-white">
    <div class="mx-16">
      <v-sheet class="text-center mx-auto px-4" height="80" max-width="800" width="100%">
        <div class="text-h2 font-weight-black text-black my-5">논문</div>
      </v-sheet>

      <v-row class="my-4" justify="center">
        <SearchField />
      </v-row>
      <v-divider class="my-4 border-opacity-100" :thickness="3" />

      <v-row>
        <v-col cols="12" md="2">
          <FilterView />
        </v-col>

        <v-col cols="12" md="10">
          <ThesisView />
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>
