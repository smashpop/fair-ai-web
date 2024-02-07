<script setup>
// Components
import SearchField from '@/components/app/SearchField'
import ArticleView from './ArticleView'
</script>

<template>
  <v-container fluid class="bg-white">
    <div class="mx-16">
      <v-sheet
        class=" text-center mx-auto px-4"
        height="200"
        max-width="800"
        width="100%"
      >
        <div class="text-h2 font-weight-black text-black my-5">기사</div>
        <SearchField />
      </v-sheet>  
      <v-divider class="my-4 border-opacity-100" :thickness="3" />

    <v-row>
      <v-col cols="12" md="2">
        <v-sheet color="white" height="700px" class="pa-2" border> 
          Filter section1
        </v-sheet>
      </v-col>

      <v-col cols="12" md="10">
        <ArticleView />
      </v-col>
    </v-row>
  </div>
  </v-container>
</template>
