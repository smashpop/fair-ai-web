<script setup>
// Components
import ThesisView from '@/views/archive/components/ThesisView.vue'
import Team1 from '@/components/team/Team-v1'
</script>

<template>
  <v-container>
    <v-responsive class="align-center text-center fill-height">
      <strong class="text-h4 font-weight-bold">논문</strong>
      <ThesisView />

    <div class="py-1" />

    <Team1 />
  </v-responsive>
  </v-container>
</template>
