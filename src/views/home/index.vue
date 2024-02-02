<script setup>
// Components
import SearchSection from './components/searchSection'
import PopularitySection from './components/popularitySection'
import ArticleSection from './components/articleSection'
import ThesisSection from './components/thesisSection'
import EventSection from './components/eventSection'
import NoticeSection from './components/noticeSection'
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
