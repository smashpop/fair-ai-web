<script setup>
// Components
import RefSiteView from '@/views/archive/components/RefSiteView.vue'
import ContentV1 from '@/components/content/Content-v1'

</script>

<template>
  <v-container>
    <v-responsive class="align-center text-center fill-height">
      <strong class="text-h4 font-weight-bold">참고사이트</strong>
      <RefSiteView />

    <div class="py-1" />

    <ContentV1 />
  </v-responsive>
  </v-container>
</template>

