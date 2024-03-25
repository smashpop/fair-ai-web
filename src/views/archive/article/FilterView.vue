<script setup>
// Components
import DatePicker from '@/components/ui/DatePicker.vue'

// Utilities
import { ref } from 'vue'
const items = ref([])
</script>

<template>
  <v-container class="pa-0">
    <v-row no-gutters class="mt-10 flex-column">
      <div class="text-16 text-color-555 font-weight-semi-bold">발행일</div>

      <div class="d-flex justify-space-between align-center mt-5">
        <v-sheet width="114">
          <DatePicker />
        </v-sheet>
        -
        <v-sheet width="114">
          <DatePicker />
        </v-sheet>
      </div>

      <v-btn block variant="text" class="bg-main-color mt-3">
        <div class="text-body-1 font-weight-medium text-white">적용</div>
      </v-btn>
    </v-row>

    <v-divider class="my-7" style="border-color: #a0a0a0; opacity: 1" />

    <v-row justify="start" no-gutters class="flex-column">
      <div class="text-16 text-color-555 font-weight-semi-bold">최근 인기 키워드</div>

      <div class="side-keyword mt-5 scroll3">
        <p><v-btn rounded="xl" variant="outlined">#인공지능 윤리</v-btn></p>
        <p><v-btn rounded="xl" variant="outlined">#자율주행</v-btn></p>
        <p><v-btn rounded="xl" variant="outlined">#Mid journey</v-btn></p>
        <p><v-btn rounded="xl" variant="outlined">#Urban Transportation System</v-btn></p>
        <p><v-btn rounded="xl" variant="outlined">#차세대 전력반도체</v-btn></p>
      </div>
    </v-row>

    <v-divider class="mt-7" style="border-color: #a0a0a0; opacity: 1" />
  </v-container>
</template>
