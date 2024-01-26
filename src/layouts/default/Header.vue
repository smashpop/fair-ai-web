<script setup>
import { useDisplay } from 'vuetify'

const { mdAndUp } = useDisplay()
</script>

<template>
  <v-app-bar color="#0d2141" flat height="48">
    <template v-if="mdAndUp" #prepend>
      <logo />
    </template>

    <template #append>
      <div v-if="mdAndUp">
        <v-btn text="HOME" to="/home" />
        <v-btn text="FAIR AI 소개" to="/introduce" />
        <v-btn text="최신자료" to="/archive" />
        <v-btn text="소식" to="/news" />
        <v-btn text="문의/제안" to="/suggest" />
      </div>
    </template>
  </v-app-bar>
</template>
