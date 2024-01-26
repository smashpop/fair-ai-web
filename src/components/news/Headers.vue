
<script setup>
</script>

<template>
  <v-card theme="dark" color="#0d2141">
    <v-layout class="fill-height">
      <v-app-bar color="transparent" flat height="48">
        <div class="d-flex align-center justify-center">
        <v-btn text="공지사항" href="/news/notice" />
        <v-btn text="관련행사" href="/news/event" />
        <v-btn text="행사캘린더" href="/news/eventCalendar" />
        <v-btn text="행사신청" href="/news/eventRegist" />
      </div>
      </v-app-bar>

      <v-main> </v-main>
    </v-layout>
  </v-card>
</template>

