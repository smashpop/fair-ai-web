<script setup>
// Components
import GuidelineView from '@/views/archive/components/GuidelineView.vue'
import ContentV1 from '@/components/content/Content-v1'

</script>

<template>
  <v-container>
    <v-responsive class="align-center text-center fill-height">
      <strong class="text-h4 font-weight-bold">가이드라인</strong>
      <GuidelineView />

    <div class="py-1" />

    <ContentV1 />
  </v-responsive>
  </v-container>
</template>

