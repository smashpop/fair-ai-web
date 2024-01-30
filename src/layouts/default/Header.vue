<script setup>
// Utilities
// import { useDisplay } from 'vuetify'

// const { mdAndUp } = useDisplay()
</script>

<template>
  <v-app-bar color="transparent" flat height="48">
    <template #prepend>
      <logo />

      <div class="mx-12">
        <v-btn to="/introduce">
          <strong class="text-h6 font-weight-bold">소개</strong>
        </v-btn>
        <v-btn to="/archive">
          <strong class="text-h6 font-weight-bold">최신자료</strong>
        </v-btn>

        <v-btn to="/news">
          <strong class="text-h6 font-weight-bold">소식</strong>
        </v-btn>

        <v-btn to="/suggest">
          <strong class="text-h6 font-weight-bold">문의/제안</strong>
        </v-btn>
      </div>
    </template>
  </v-app-bar>
</template>
