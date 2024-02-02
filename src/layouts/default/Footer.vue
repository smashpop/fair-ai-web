<script setup></script>

<template>
  <v-card color="#F4F4F4">
    <v-container>
      <div class="pa-4 mx-8">
        <v-row dense>
          <v-col cols="12" md="3">
            <logo />
          </v-col>

          <v-col cols="12" md="3">
            <v-row dense>
              <v-col cols="12">
                <v-btn to="/introduce" variant="text" density="compact">
                  <strong class="text-20 font-weight-bold text-grey-darken-1">소개</strong>
                </v-btn>
              </v-col>
            </v-row>

            <v-row dense>
              <v-col cols="12">
                <v-btn to="/archive" variant="text" density="compact">
                  <strong class="text-20 font-weight-bold text-grey-darken-1"
                    >자료실</strong
                  >
                </v-btn>
              </v-col>
            </v-row>

            <v-row dense>
              <v-col cols="12">
                <v-btn to="/news" variant="text" density="compact">
                  <strong class="text-20 font-weight-bold text-grey-darken-1">소식</strong>
                </v-btn>
              </v-col>
            </v-row>

            <v-row dense>
              <v-col cols="12">
                <v-btn to="/suggest" variant="text" density="compact">
                  <strong class="text-20 font-weight-bold text-grey-darken-1"
                    >문의/제안</strong
                  >
                </v-btn>
              </v-col>
            </v-row>
          </v-col>

          <v-col cols="12" md="3">
            <v-row dense>
              <v-col cols="12">
                <v-btn to="/news/event-regist" variant="text" density="compact">
                  <strong class="text-subtitle-1 font-weight-bold text-grey-darken-1">
                    행사등록 신청
                  </strong>
                </v-btn>
              </v-col>
            </v-row>

            <v-row dense>
              <v-col cols="12">
                <v-btn to="/privacy-polocy" variant="text" density="compact">
                  <strong class="text-subtitle-1 font-weight-bold text-grey-darken-1"
                    >개인정보처리방침</strong
                  >
                </v-btn>
              </v-col>
            </v-row>
          </v-col>

          <v-col cols="12" md="3" class="text-end">
            <v-select
              :items="['나의AAC', 'NC문화재단', 'NC SOFT']"
              class="ml-4"
              variant="underlined"
              density="compact"
            >
              <template #label>
                <strong class="text-subtitle-1 font-weight-bold"> 관련사이트 </strong>
              </template>
            </v-select>

            <div class="d-flex flex-wrap mt-4 justify-end">
              <v-btn class="mx-3" color="grey" icon="mdi-facebook" variant="outlined" />
              <v-btn color="grey" icon="mdi-youtube" variant="outlined" />
            </div>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </v-card>
</template>
