<script setup></script>

<template>
  <v-app-bar color="indigo-darken-3" flat height="48">
    <v-row class="d-flex align-center justify-center">
      <v-btn text="공지사항" to="/news/notice" />
      <v-btn text="관련행사" to="/news/event" />
      <v-btn text="행사캘린더" to="/news/eventCalendar" />
      <v-btn text="행사신청" to="/news/eventRegist" />
    </v-row>
  </v-app-bar>
</template>
