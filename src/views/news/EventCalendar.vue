<script setup>
import { ref } from 'vue'
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import koLocale from '@fullcalendar/core/locales/ko';

const calendarOptions = ref({
  plugins: [dayGridPlugin],
  initialView: 'dayGridMonth',
  weekends: true,
  locale: koLocale,
  events: [
    { title: 'Meeting', start: new Date() }
  ]
})

</script>

<template>
  <v-container class="fill-height">
    <v-responsive class="align-center text-center fill-height">
      <v-row class="d-flex align-center justify-center">
        <v-col cols="1">
          <v-img height="60" src="@/assets/logo.svg" />
        </v-col>
        <v-col cols="2">
          <h1 class="text-h3 font-weight-bold">행사캘린더</h1>
        </v-col>
      </v-row>

      <v-row class="d-flex align-center justify-center">
        <v-col cols="auto">
          <v-btn
            href="/news/notice"
            min-width="164"
            rel="noopener noreferrer"
            variant="text"
          >
            <v-icon
              icon="mdi-view-dashboard"
              size="large"
              start
            />
            공지사항
          </v-btn>
        </v-col>

        <v-col cols="auto">
          <v-btn
            href="/news/event"
            min-width="164"
            rel="noopener noreferrer"
            variant="text"
          >
            <v-icon
              icon="mdi-account-group"
              size="large"
              start
            />
            관련행사
          </v-btn>
        </v-col>

        <v-col cols="auto">
          <v-btn
            href="/news/eventCalendar"
            min-width="164"
            rel="noopener noreferrer"
            variant="text"
          >
            <v-icon
              icon="mdi-account-group"
              size="large"
              start
            />
            행사캘린더
          </v-btn>
        </v-col>   

        <v-col cols="auto">
          <v-btn
            href="/news/eventRegist"
            min-width="164"
            rel="noopener noreferrer"
            variant="text"
          >
            <v-icon
              icon="mdi-account-group"
              size="large"
              start
            />
            행사신청
          </v-btn>
        </v-col>               
      </v-row>

      <FullCalendar :options='calendarOptions' />

    </v-responsive>
  </v-container>
</template>