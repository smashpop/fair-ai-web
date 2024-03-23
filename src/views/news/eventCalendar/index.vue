<script setup>
// Components
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import koLocale from '@fullcalendar/core/locales/ko'
import SmallSearchField from '@/components/app/SmallSearchField'

// Utilities
import { ref } from 'vue'
import { fetchEventList } from '@/apis/event'

const calendarOptions = ref({
  plugins: [dayGridPlugin],
  initialView: 'dayGridMonth',
  weekends: true,
  locale: koLocale,
  contentHeight: 740,
  events: [{ title: 'Meeting', start: new Date() }]
})

const loading = ref(false)
const total = ref(0)

async function loadFromServer() {
  loading.value = true

  await fetchEventList()
    .then((response) => {
      console.log('response.data=', response.data)
      calendarOptions.value.events = response.data.items
      total.value = response.data.total
    })
    .catch((error) => {
      console.log(error)
    })

  loading.value = false
}

// initial load
loadFromServer()
</script>


<template>
  <v-sheet class="mx-auto d-flex justify-center align-end" width="1360" height="180"> 
    <p class="text-68 font-weight-bold text-black">관련행사</p>
  </v-sheet>

  <v-sheet class="bo-sch mt-3 d-flex justify-center mx-auto" width="1360">
    <SmallSearchField />
  </v-sheet>

  <v-divider class="mt-15 mb-4" :thickness="1" />
    <v-sheet class="mx-auto snb" width="1360">
      <v-btn variant="plain" :ripple="false" href="/news/event-calendar" class="btn-plain-custom on">월간</v-btn>
      <v-btn variant="plain" :ripple="false" href="/news/event" class="btn-plain-custom">목록</v-btn>
    </v-sheet>
  <v-divider class="mt-4" :thickness="1" />


  <v-sheet class="mx-auto board mt-15" width="1360">
    <v-container fluid class="pa-0">
      <div class="calendar-custom">
        <FullCalendar :options="calendarOptions" />
      </div>
    </v-container>
  </v-sheet>
</template>

<!--
<template>
  <v-container fluid class="bg-white">
    <v-responsive class="align-center text-center fill-height">
      <v-row class="d-flex align-center justify-center">
        <v-col cols="2">
          <strong class="text-h4 font-weight-bold">행사캘린더</strong>
        </v-col>
      </v-row>
      <v-container>
        <div class="mx-12">
          <FullCalendar :options="calendarOptions" />
        </div>
      </v-container>
    </v-responsive>
  </v-container>
</template>
-->

<style lang="scss" scoped>
</style>
