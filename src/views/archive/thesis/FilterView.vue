<script setup>
// Components

// Utilities
import { ref } from 'vue'
const items = ref([])
</script>

<template>
  <v-container class="pa-0 pt-10" fluid>
    <div>
      <v-row no-gutters>
        <div class="text-14 text-color-222 font-weight-medium">
          저자, 설명 등의 조합 키워드 검색은 <br />상세검색을 이용해 주세요.
        </div>

        <v-btn
          block
          rounded="xl"
          variant="plain"
          style="width: 100%; height: 44px; border: 1px solid #000; opacity: 1"
          class="mt-4"
          :ripple="false"
        >
          <div class="text-16 font-weight-semi-bold text-black">상세검색</div>
        </v-btn>
      </v-row>

      <v-divider class="my-7" />

      <v-row no-gutters>
        <div class="text-16 font-weight-semi-bold text-color-555">발행연도</div>
      </v-row>

      <v-row no-gutters class="mt-5">
        <v-col class="scroll2" style="max-height: 195px">
          <div>
            <v-checkbox
              v-model="items"
              label="2024 (98)"
              value="1"
              hide-details
              class="input-chk-custom"
              :ripple="false"
            ></v-checkbox>
          </div>

          <div>
            <v-checkbox
              v-model="items"
              label="2023 (1128)"
              value="2"
              hide-details
              class="input-chk-custom mt-2"
              :ripple="false"
            ></v-checkbox>
          </div>

          <div>
            <v-checkbox
              v-model="items"
              label="2022 (156)"
              value="info"
              hide-details
              class="input-chk-custom mt-2"
              :ripple="false"
            ></v-checkbox>
          </div>

          <div>
            <v-checkbox
              v-model="items"
              label="2021 (214)"
              value="info"
              hide-details
              class="input-chk-custom mt-2"
              :ripple="false"
            ></v-checkbox>
          </div>

          <div>
            <v-checkbox
              v-model="items"
              label="2020 (214)"
              value="info"
              hide-details
              class="input-chk-custom mt-2"
              :ripple="false"
            ></v-checkbox>
          </div>

          <div>
            <v-checkbox
              v-model="items"
              label="2019 (214)"
              value="info"
              hide-details
              class="input-chk-custom mt-2"
              :ripple="false"
            ></v-checkbox>
          </div>

          <div>
            <v-checkbox
              v-model="items"
              label="2018 (214)"
              value="info"
              hide-details
              class="input-chk-custom mt-2"
              :ripple="false"
            ></v-checkbox>
          </div>
        </v-col>
      </v-row>

      <v-divider class="my-7" />

      <v-row no-gutters>
        <div class="text-16 font-weight-semi-bold text-color-555">KCI 등재여부</div>
      </v-row>

      <v-row no-gutters class="mt-5">
        <v-col>
          <v-radio-group hide-details>
            <v-radio label=" 등재" value="1" class="input-radio-custom"></v-radio>

            <v-radio label=" 미등재" value="2" class="input-radio-custom mt-2"></v-radio>
          </v-radio-group>
        </v-col>
      </v-row>

      <v-divider class="my-7" />

      <v-row no-gutters>
        <div class="text-16 font-weight-semi-bold text-color-555">국내/국외</div>
      </v-row>

      <v-row no-gutters class="mt-5">
        <v-col>
          <v-checkbox
            v-model="items"
            label="국내"
            value="1"
            hide-details
            class="input-chk-custom"
            :ripple="false"
          ></v-checkbox>

          <v-checkbox
            v-model="items"
            label="국외"
            value="2"
            hide-details
            class="input-chk-custom mt-2"
            :ripple="false"
          ></v-checkbox>
        </v-col>
      </v-row>

      <v-divider class="my-7" />
    </div>
  </v-container>
</template>

<style lang="scss" scoped></style>
