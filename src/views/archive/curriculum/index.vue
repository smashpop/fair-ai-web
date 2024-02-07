<script setup>
// Components
import SearchField from '@/components/app/SearchField'
import CurriculumView from './CurriculumView.vue'
</script>

<template>
  <v-container fluid class="bg-white">
    <div class="mx-16">
      <v-sheet class="text-center mx-auto px-4" height="200" max-width="800" width="100%">
        <div class="text-h2 font-weight-black text-black my-5">교육커리큘럼</div>
        <SearchField />
      </v-sheet>
      <v-divider class="my-4 border-opacity-100" :thickness="3" />

      <v-row>
        <v-col cols="12" md="10">
          <CurriculumView />
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>
