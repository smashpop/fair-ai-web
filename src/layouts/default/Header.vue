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
        <v-btn text="HOME" to="/home">
          <strong class="text-subtitle-1 font-weight-bold">HOME</strong>
        </v-btn>

        <v-btn to="/introduce">
          <strong class="text-subtitle-1 font-weight-bold">FAIR AI 소개</strong>
        </v-btn>
        <v-btn to="/archive">
          <strong class="text-subtitle-1 font-weight-bold">최신자료</strong>
        </v-btn>

        <v-btn to="/news">
          <strong class="text-subtitle-1 font-weight-bold">소식</strong>
        </v-btn>

        <v-btn to="/suggest">
          <strong class="text-subtitle-1 font-weight-bold">문의/제안</strong>
        </v-btn>
      </div>
    </template>
  </v-app-bar>
</template>
