<script setup></script>

<template>
  <v-footer color="#F4F4F4" class="pa-0 pt-10 pb-15">
    <v-sheet class="mx-auto" width="1360" color="#F4F4F4">
      <v-container class="pa-0" fluid>
        <v-row no-gutters>
          <v-col class="pa-0">
            <logo />
          </v-col>

          <v-col class="d-flex flex-column justify-space-between align-start" style="height: 144px;">
            <v-btn to="/introduce" variant="plain" class="btn-plain-custom">
              <strong class="text-20 font-weight-bold text-color-222">소개</strong>
            </v-btn>

            <v-btn to="/archive" variant="plain" class="btn-plain-custom">
              <strong class="text-20 font-weight-bold text-color-222">자료실</strong>
            </v-btn>

            <v-btn to="/news" variant="plain" class="btn-plain-custom">
              <strong class="text-20 font-weight-bold text-color-222">소식</strong>
            </v-btn>
            <v-btn to="/suggest" variant="plain" class="btn-plain-custom">
              <strong class="text-20 font-weight-bold text-color-222">문의·제안</strong>
            </v-btn>
          </v-col>

          <v-col class="d-flex flex-column justify-space-between">
            <v-row no-gutters class="d-flex flex-column align-start flex-0-0">
              <v-btn to="/news/event-regist" variant="plain" class="btn-plain-custom">
                <strong class="text-16 font-weight-semi-bold text-color-727171">행사등록 제안</strong>
              </v-btn>

              <v-btn to="/privacy-polocy" variant="plain" class="btn-plain-custom mt-4">
                <strong class="text-16 font-weight-semi-bold text-color-727171">개인정보처리방침</strong>
              </v-btn>
            </v-row>

            <v-row no-gutters class="d-flex flex-column flex-0-0 text-color-999">
              <p>재단법인 엔씨문화재단</p>
              <p>© NC Cultural Foundation. All Rights Reserved.</p>
            </v-row>
          </v-col>

          <v-col class="d-flex flex-column justify-space-between">
            <v-select
              :items="['나의AAC', 'NC문화재단', 'NC SOFT']"
              class="ml-4"
              variant="underlined"
              density="compact"
            >
              <template #label>
                <strong class="text-16 font-weight-bold"> 관련사이트 </strong>
              </template>
            </v-select>

            <div class="d-flex justify-end">
              <v-btn color="grey" icon="mdi-facebook" variant="outlined" />
              <v-btn color="grey" icon="mdi-youtube" variant="outlined" />
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>
  </v-footer>
</template>

<style lang="scss" scoped>
</style>