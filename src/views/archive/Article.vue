<script setup>
// Components
import ArticleView from '@/views/archive/components/ArticleView.vue'
import Team1 from '@/components/team/Team-v1'
</script>

<template>
  <v-container>
    <v-responsive class="align-center text-center fill-height">
      <strong class="text-h4 font-weight-bold">기사</strong>
      <ArticleView />

    <div class="py-1" />

    <Team1 />
  </v-responsive>
  </v-container>
</template>