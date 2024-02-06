<script setup>
// Utilities
import { ref } from 'vue'

const category = ref(false)
const tel = ref(null)
const email = ref(null)

</script>

<template>
  <v-container>
    <p>담당자 검토를 거쳐 최종적으로 등록되며, 등록 후 입력하신 이메일이나, 연락처로 안내 드립니다.</p>
    <v-radio-group v-model="category" inline density="compact" color="primary">
      <v-radio label="시스템장애" value="시스템장애"></v-radio>
      <v-radio label="자료등록 신청" value="자료등록 신청"></v-radio>
      <v-radio label="기타" value="기타"></v-radio>
    </v-radio-group>

    <v-row>
      <v-col cols="6">
        <v-text-field
          v-model="email"
          label="e-mail"
          variant="outlined"
          density="compact"
        />
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="6">
        <v-text-field
          v-model="tel"
          label="연락처"
          variant="outlined"
          density="compact"
        />
      </v-col>
    </v-row>
  </v-container>
</template>
