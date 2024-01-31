<script setup>
// Components
import SearchSection from './components/SearchSection'
import PopularitySection from './components/PopularitySection'
import ArticleSection from './components/ArticleSection'
import ThesisSection from './components/ThesisSection'
import EventSection from './components/EventSection'
import NoticeSection from './components/NoticeSection'

</script>

<template>
  <v-container>
    <div class="py-2" />
    <SearchSection />

    <div class="py-2" />
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
