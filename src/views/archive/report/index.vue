<script setup>
// Components
import ReportView from '@/views/archive/components/ReportView.vue'
</script>

<template>
  <v-container>
    <strong class="text-h5 font-weight-bold">보고서</strong>
    <v-row>
      <v-col cols="12" md="2">
        <v-card title="Filter section" color="white" height="700px" class="pa-2" flat> </v-card>
      </v-col>

      <v-col cols="12" md="10">
        <ReportView />
      </v-col>
    </v-row>
  </v-container>
</template>
