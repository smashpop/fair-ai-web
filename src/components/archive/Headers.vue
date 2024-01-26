<template>
  <v-card theme="dark" color="#0d2141">
    <v-layout class="fill-height">
      <v-app-bar color="transparent" flat height="48">
        <template #append>
          <div v-if="mdAndUp">
            <v-btn text="논문" />
            <v-btn text="보고서" />
            <v-btn text="기사" />
            <v-btn text="가이드라인" />
            <v-btn text="교육커리큘럼" />
            <v-btn text="참고사이트" />
          </div>
        </template>
      </v-app-bar>

      <v-main> </v-main>
    </v-layout>
  </v-card>
</template>

<script setup>
import { useDisplay } from 'vuetify'

const { mdAndUp } = useDisplay()
</script>
