<script setup>
// Utilities
// import { useDisplay } from 'vuetify'

// const { mdAndUp } = useDisplay()
</script>

<template>
  <v-app-bar color="indigo-darken-4" flat height="48">
    <template #prepend>
      <logo />
    </template>

    <template #append>
      <div class="mr-12">
        <v-btn text="HOME" to="/home" />
        <v-btn text="FAIR AI 소개" to="/introduce" />
        <v-btn text="최신자료" to="/archive" />
        <v-btn text="소식" to="/news" />
        <v-btn text="문의/제안" to="/suggest" />
      </div>
    </template>
  </v-app-bar>
</template>
