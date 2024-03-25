<script setup>
// Components
import SuggestView from './SuggestView'
</script>

<template>
  <v-sheet class="mx-auto d-flex justify-center align-end" width="1360" height="180"> 
    <p class="text-68 font-weight-bold text-black">문의·제안 등록</p>
  </v-sheet>

  <v-sheet class="mx-auto board mt-15" width="1360">
    <v-container class="pa-0" fluid>
      <v-divider class="border-opacity-100 mt-5" :thickness="3" />

      <v-row no-gutters>
        <v-sheet width="1360" class="mx-auto pt-15">
          <SuggestView />
        </v-sheet>       
      </v-row>
    </v-container>
  </v-sheet>
</template>
