<script setup>
// Components
import ContentV1 from '@/components/content/Content-v1'

import ContentV2 from '@/components/content/Content-v2'
</script>

<template>
  <v-container class="fill-height">
    <v-responsive class="align-center text-center fill-height">
      <Strong class="text-h4 font-weight-bold">AI윤리</Strong>
      <div class="py-2" />

      <ContentV2 />
      <div class="py-2" />

      <v-sheet class="py-16">
        <section id="ethics">
          <v-container>
            <div class="py-2" />

            <ContentV1 />
          </v-container>
        </section>
      </v-sheet>
    </v-responsive>
  </v-container>
</template>
