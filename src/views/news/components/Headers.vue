<script setup></script>

<template>
  <v-app-bar color="indigo-darken-3" flat height="48">
    <v-row class="d-flex align-center justify-center">
      <v-btn to="/news/notice">
        <strong class="text-subtitle-1 font-weight-bold">공지사항</strong>
      </v-btn>
      <v-btn to="/news/event">
        <strong class="text-subtitle-1 font-weight-bold">관련행사</strong>
      </v-btn>
      <v-btn to="/news/eventCalendar">
        <strong class="text-subtitle-1 font-weight-bold">행사캘린더</strong>
      </v-btn>
      <v-btn to="/news/eventRegist">
        <strong class="text-subtitle-1 font-weight-bold">행사신청</strong>
      </v-btn>
    </v-row>
  </v-app-bar>
</template>
