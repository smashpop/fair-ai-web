<script setup>
// Components
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import koLocale from '@fullcalendar/core/locales/ko'

// Utilities
import { ref } from 'vue'

const calendarOptions = ref({
  plugins: [dayGridPlugin],
  initialView: 'dayGridMonth',
  weekends: true,
  locale: koLocale,
  events: [{ title: 'Meeting', start: new Date() }]
})
</script>

<template>
  <v-container class="fill-height">
    <v-responsive class="align-center text-center fill-height">
      <v-row class="d-flex align-center justify-center">
        <v-col cols="2">
          <strong class="text-h4 font-weight-bold">행사캘린더</strong>
        </v-col>
      </v-row>

      <FullCalendar :options="calendarOptions" />
    </v-responsive>
  </v-container>
</template>


<style lang="scss" scoped>
</style>


