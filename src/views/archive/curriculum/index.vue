<script setup>
// Components
import CurriculumView from '@/views/archive/components/CurriculumView.vue'
import ContentV1 from '@/components/content/Content-v1'
</script>

<template>
  <v-container>
    <v-responsive class="align-center text-center fill-height">
      <strong class="text-h4 font-weight-bold">교육 커리큘럼</strong>
      <CurriculumView />

      <div class="py-1" />

      <ContentV1 />
    </v-responsive>
  </v-container>
</template>
