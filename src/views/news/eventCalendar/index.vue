<script setup>
// Components
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import koLocale from '@fullcalendar/core/locales/ko'

// Utilities
import { ref } from 'vue'
import { fetchEventList } from '@/apis/event'

const calendarOptions = ref({
  plugins: [dayGridPlugin],
  initialView: 'dayGridMonth',
  weekends: true,
  locale: koLocale,
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

<style lang="scss" scoped></style>
