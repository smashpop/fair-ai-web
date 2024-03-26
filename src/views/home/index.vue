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

  <!-- 검색 -->
  <p style="position: absolute; top: 0; left: 0; width: 100%; height: 860px; background: green;"></p>
  <v-container class="pa-0" fluid style="position: relative; z-index: 2; padding-top: 118px !important; height: 788px;">
    <v-row no-gutters>
      <v-sheet class="mx-auto" width="1360" style="background: transparent; min-width: 1360px;">
        <SearchSection />
      </v-sheet>

      <v-sheet class="mx-auto" width="1360" style="background: transparent; margin-top: 94px; min-width: 1360px;">
        <PopularitySection />
      </v-sheet>    
    </v-row>
  </v-container>

  <!-- 최근 ai 이슈 -->
  <v-container class="pa-0" fluid>
    <v-row no-gutters style="background: linear-gradient(180deg, #F0F3F7 0%, rgba(255, 255, 255, 0.00) 100%);">          
      <ArticleSection />
    </v-row>

    <v-divider class="border-opacity-100 my-15 mx-auto" width="1360" />

    <v-row no-gutters>      
      <ThesisSection />
    </v-row>
  </v-container>

  <!-- 행사안내 -->
  <v-container class="pa-0" fluid>
    <EventSection />
  </v-container>

  <!-- 공지사항 -->
  <v-container class="pa-0" fluid>
    <NoticeSection />
  </v-container>
</template>
