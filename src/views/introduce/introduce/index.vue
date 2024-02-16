<script setup>
import ContentV1 from '@/components/content/Content-v1'
import ContentV2 from '@/components/content/Content-v2'
</script>

<template>
  <v-container class="fill-height">
    <strong class="text-h4 font-weight-bold">재단소개</strong>
    <div class="py-2" />

    <ContentV1 />

    <div class="py-2" />
    <ContentV2 />
  </v-container>
</template>
