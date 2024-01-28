<script setup></script>

<template>
  <v-app-bar color="indigo-darken-3" flat height="48">
    <v-row class="d-flex align-center justify-center">
      <v-btn to="/archive/thesis">
        <strong class="text-subtitle-1 font-weight-bold">논문</strong>
      </v-btn>

      <v-btn to="/archive/report">
        <strong class="text-subtitle-1 font-weight-bold">보고서</strong>
      </v-btn>

      <v-btn to="/archive/article">
        <strong class="text-subtitle-1 font-weight-bold">기사</strong>
      </v-btn>

      <v-btn to="/archive/guideline">
        <strong class="text-subtitle-1 font-weight-bold">가이드라인</strong>
      </v-btn>

      <v-btn to="/archive/curriculum">
        <strong class="text-subtitle-1 font-weight-bold">교육커리큘럼</strong>
      </v-btn>

      <v-btn to="/archive/refSite">
        <strong class="text-subtitle-1 font-weight-bold">참고사이트</strong>
      </v-btn>
    </v-row>
  </v-app-bar>
</template>
