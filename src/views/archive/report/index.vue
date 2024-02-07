<script setup>
// Components
import ReportView from './ReportView.vue'
</script>

<template>
  <v-container fluid class="bg-white">
    <div class="mx-16">
    <strong class="text-h5 font-weight-bold">보고서</strong>
    <v-row>
      <v-col cols="12" md="2">
        <v-sheet color="white" height="700px" class="pa-2" border> 
            Filter section1
         </v-sheet>
      </v-col>

      <v-col cols="12" md="10">
        <ReportView />
      </v-col>
    </v-row>

  </div>
  </v-container>
</template>
