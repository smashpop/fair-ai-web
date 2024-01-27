<script setup>
// Components
import NoticeView from '@/components/app/NoticeView.vue'
</script>

<template>
  <v-container class="fill-height">
    <v-responsive class="align-center text-center fill-height">
      <strong class="text-h4 font-weight-bold">공지사항</strong>
      <NoticeView />
    </v-responsive>
  </v-container>
</template>
