<script setup>
// Components
import SearchSection from './searchSection'
import PopularitySection from './popularitySection'
import ArticleSection from './articleSection'
import ThesisSection from './thesisSection'
import EventSection from './eventSection'
import NoticeSection from './noticeSection'
</script>

<template>
  <v-container class="w-75">
    <SearchSection />

    <PopularitySection />

    <div class="py-1" />
    <ArticleSection />

    <div class="py-2" />
    <ThesisSection />
  </v-container>

  <EventSection />

  <v-container>
    <NoticeSection />
  </v-container>
</template>
