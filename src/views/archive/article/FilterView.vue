<script setup>
// Components

// Utilities
import { ref } from 'vue'
const items = ref([])
</script>

<template>
  <v-container class="pa-0">
    <v-row justify="start" no-gutters class="mt-10">
      <div class="text-16 text-color-555 font-weight-semi-bold">
        발행일 
      </div>



      <v-btn block size="large" variant="flat" class="bg-main-color mt-3">
        <div class="text-body-1 font-weight-medium text-white">적용</div>
      </v-btn>
    </v-row>

    <v-divider class="my-6" />

    <v-row class="my-4" justify="start" dense no-gutters>
      <div class="text-16 font-weight-bold text-black text-medium-emphasis">발행연도</div>
    </v-row>
    <v-row dense no-gutters>
      <v-col cols="8">
        <div>
          <v-checkbox
            v-model="items"
            label="2024 (98)"
            color="info"
            value="info"
            density="compact"
            hide-details
          ></v-checkbox>
        </div>

        <div>
          <v-checkbox
            v-model="items"
            label="2023 (1128)"
            color="info"
            value="info"
            density="compact"
            hide-details
          ></v-checkbox>
        </div>

        <div>
          <v-checkbox
            v-model="items"
            label="2022 (156)"
            color="info"
            value="info"
            density="compact"
            hide-details
          ></v-checkbox>
        </div>

        <div>
          <v-checkbox
            v-model="items"
            label="2021 (214)"
            color="info"
            value="info"
            density="compact"
            hide-details
          ></v-checkbox>
        </div>
      </v-col>
    </v-row>

    <v-divider class="my-6" />

    <v-row class="my-4" justify="start" dense no-gutters>
      <div class="text-16 font-weight-bold text-black text-medium-emphasis">국내/해외</div>
    </v-row>

    <v-row dense no-gutters>
      <v-col cols="8">
        <v-checkbox
          v-model="items"
          label="국내"
          color="info"
          value="info"
          density="compact"
          hide-details
        ></v-checkbox>
        <v-checkbox
          v-model="items"
          label="해외"
          color="info"
          value="info"
          density="compact"
          hide-details
        ></v-checkbox>
      </v-col>
    </v-row>
    <v-divider class="my-6" />
  </v-container>
</template>
