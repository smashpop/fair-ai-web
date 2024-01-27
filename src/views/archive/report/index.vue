<script setup>
// Components
import ReportView from '@/views/archive/components/ReportView.vue'
import FeaturesV1 from '@/components/features/Features-v1'
import GalleryV1 from '@/components/gallery/Gallery-v1'
</script>

<template>
  <v-container>
    <v-responsive class="align-center text-center fill-height">
      <strong class="text-h4 font-weight-bold">보고서</strong>
      <ReportView />

      <GalleryV1 />

      <div class="py-1" />

      <FeaturesV1 />

      <div class="py-1" />
    </v-responsive>
  </v-container>
</template>
