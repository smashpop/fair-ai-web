<script setup>
// Components
import SearchField from '@/components/app/SearchField'

// Utilities
import { useRouter } from 'vue-router'

const router = useRouter()

function searchProc(keyword) {
  console.log('keyword=', keyword)
  router.push({
    name: 'Search',
    state: {
      dataObj: { searchStr: keyword }
    }
  })
}

function clickProc(keyword) {
  console.log('keyword=', keyword)
  router.push({ name: 'Search' })
}
</script>

<template>
    <v-container 
      fluid 
      class="pa-0" 
      style="padding-top: 148px !important; background: #F0F3F7;"
      >
      <v-sheet 
        class="mx-auto" 
        width="1360" 
        style="min-width: 1360px; background: transparent;"
        >
      <v-row no-gutters align="center">
        <v-col class="text-48 text-color-222 letter">
          <div><strong>검색어 입력</strong></div>
          <div><strong>또는 상세검색</strong>을 통해</div>
          <div>자료를 검색해 보세요.</div>
        </v-col>

        <v-col 
          style="position: relative;" 
          class="d-flex justify-end"
          >
          <!-- <SearchField class="ms-2" @search="searchProc" /> -->
          <SearchField @click="clickProc" />

          <div 
            class="d-flex keyword" 
            style="position: absolute; right: 0; bottom: -57px;"
            >
            <v-btn variant="outlined">
              <p>#딥페이크</p>
            </v-btn>

            <v-btn variant="outlined">
              <p>#의료 AI윤리</p>
            </v-btn>

            <v-btn variant="outlined">
              <p>#강인공지능</p>
            </v-btn>

            <v-btn variant="outlined">
              <p>#Autonomous Vehicle</p>
            </v-btn>
          </div>
        </v-col>
      </v-row>


      <v-expansion-panels class="mt-11" elevation="0">
        <v-expansion-panel>
          <template #title>
            상세검색
          </template>

          <template #text>
            <v-container fluid class="pa-0">
              <v-row no-gutters>
                <v-col>
                  <v-radio-group 
                    inline 
                    hide-details
                    class="radio-gr"
                    >
                    <v-radio label="논문" value="one"></v-radio>
                    <v-radio label="보고서" value="two"></v-radio>
                    <v-radio label="기사" value="three"></v-radio>
                    <v-radio label="가이드라인" value="one"></v-radio>
                    <v-radio label="참고사이트" value="two"></v-radio>
                    <v-radio label="교육커리큘럼" value="three"></v-radio>
                    <v-radio label="행사" value="three"></v-radio>
                  </v-radio-group>
                </v-col>
              </v-row>

              <v-divider style="opacity: 0.25; " />

              <v-row no-gutters class="custom pt-3">
                <v-col>
                  <div>전체</div>

                  <v-text-field
                    variant="outlined"
                    density="compact"
                    style="width: 239px;"
                    hide-details
                  ></v-text-field>

                  <v-select
                    label="AND"
                    :items="['AND', 'OR']"
                    density="compact"
                    variant="outlined"
                    style="width: 90px;"
                    hide-details
                  ></v-select>
                </v-col>

                <v-col>
                  <div>논문명</div>

                  <v-text-field
                    variant="outlined"
                    density="compact"
                    style="width: 239px;"
                    hide-details
                  ></v-text-field>

                  <v-select
                    label="AND"
                    :items="['AND', 'OR']"
                    density="compact"
                    variant="outlined"
                    style="width: 90px;"
                    hide-details
                  ></v-select>
                </v-col>

                <v-col>
                  <div>저자</div>

                  <v-text-field
                    variant="outlined"
                    density="compact"
                    style="width: 239px;"
                    hide-details
                  ></v-text-field>

                  <v-select
                    label="AND"
                    :items="['AND', 'OR']"
                    density="compact"
                    variant="outlined"
                    style="width: 90px;"
                    hide-details
                  ></v-select>
                </v-col>
              </v-row>

              <v-divider style="opacity: 0.25;" />

              <v-row no-gutters class="custom">
                <v-col>
                  <div>발행기관</div>

                  <v-text-field
                    variant="outlined"
                    density="compact"
                    hide-details
                    style="width: 239px;"
                  ></v-text-field>

                  <v-select
                    label="AND"
                    :items="['AND', 'OR']"
                    density="compact"
                    variant="outlined"
                    hide-details
                    style="width: 90px;"
                  ></v-select>
                </v-col>

                <v-col>
                  <div>초록</div>

                  <v-text-field
                    variant="outlined"
                    density="compact"
                    hide-details
                    style="width: 239px;"
                  ></v-text-field>

                  <v-select
                    label="AND"
                    :items="['AND', 'OR']"
                    density="compact"
                    variant="outlined"
                    hide-details
                    style="width: 90px;"
                  ></v-select>
                </v-col>

                <v-col>
                  <div>발행년도</div>

                  <v-select
                    label="선택하세요"
                    :items="['AND', 'OR']"
                    density="compact"
                    variant="outlined"
                    hide-details
                    style="width: 154px;"
                  ></v-select>
                  -
                  <v-select
                    label="선택하세요"
                    :items="['AND', 'OR']"
                    density="compact"
                    variant="outlined"
                    hide-details
                    style="width: 154px;"
                  ></v-select>
                </v-col>
              </v-row>

              <v-divider style="opacity: 0.25" />

              <v-row no-gutters class="custom pb-3">
                <v-col>
                  <div>국내/국외</div>

                  <v-select
                    label="선택하세요"
                    :items="['AND', 'OR']"
                    density="compact"
                    variant="outlined"
                    hide-details
                    style="width: 335px;"
                  ></v-select>
                </v-col>

                <v-col>
                  <div class="ml-4">KCI 등재</div>

                  <v-select
                    label="선택하세요"
                    :items="['AND', 'OR']"
                    density="compact"
                    variant="outlined"
                    hide-details
                    style="width: 335px;"
                  ></v-select>
                </v-col>

                <v-col>
                  <div>작성언어</div>

                  <v-select
                    label="선택하세요"
                    :items="['AND', 'OR']"
                    density="compact"
                    variant="outlined"
                    hide-details
                    style="width: 335px;"
                  ></v-select>
                </v-col>
              </v-row>

              <v-divider style="opacity: 0.25;" />

              <v-row no-gutters class="pt-5 pb-7">
                <v-col class="d-flex justify-end">
                  <v-btn
                    variant="plain"
                    class="btn-plain-custom reset text-16 font-weight-bold text-color-555 d-flex justify-center align-center"
                    :ripple="false"
                  >
                    초기화
                  </v-btn>

                  <v-btn
                    variant="plain"
                    class="btn-plain-custom search text-16 font-weight-bold text-white d-flex justify-center align-center"
                    :ripple="false"
                  >
                    검색
                  </v-btn>
                </v-col>
              </v-row>
            </v-container>
          </template>
        </v-expansion-panel>
      </v-expansion-panels>

      <div class="py-16" />
      <div class="py-16" />
      <div class="py-16" />
      </v-sheet>
    </v-container>
</template>

<style lang="scss" scoped>
.letter {
  line-height: normal;
  letter-spacing: 0;
}

.keyword {}
.keyword .v-btn { height: 41px; border: 1px solid #cfcfcf; border-radius: 500px; padding: 0 18px; }
.keyword .v-btn~.v-btn { margin-left: 8px; }
.keyword .v-btn:deep(.v-btn__content) { font-size: 14px; font-weight: 500; color: #555; }

.v-expansion-panels { background: transparent; }
.v-expansion-panels .v-expansion-panel { background: transparent; border-radius: 0; }
.v-expansion-panels .v-expansion-panel:deep(.v-expansion-panel__shadow) { display: none; }

.v-expansion-panels .v-expansion-panel:deep(.v-expansion-panel-title) { height: 64px; padding: 0; margin: 0; display: flex; justify-content: flex-end; border-bottom: 1px solid #000; color: var(--main-color); font-size: 16px; font-weight: 700; line-height: normal; }
.v-expansion-panels .v-expansion-panel:deep(.v-expansion-panel-title--active) { min-height: auto; border-bottom: 3px solid #136BFC; }
.v-expansion-panels .v-expansion-panel:deep(.v-expansion-panel-title) > span { display: none; }

.v-expansion-panels .v-expansion-panel:deep(.v-expansion-panel-text) { background: #E2E7ED; padding: 0 40px; box-sizing: border-box; }
.v-expansion-panels .v-expansion-panel:deep(.v-expansion-panel-text) .v-expansion-panel-text__wrapper { padding: 0; }


.radio-gr { height: 75px; display: flex; align-items: center;}
.radio-gr:deep(.v-input__control) {}
.radio-gr:deep(.v-input__control) .v-radio {}
.radio-gr:deep(.v-input__control) .v-radio~.v-radio { margin-left: 24px; }
.radio-gr:deep(.v-input__control) .v-radio .v-selection-control__wrapper { display: none; }
.radio-gr:deep(.v-input__control) .v-radio .v-selection-control__wrapper .v-selection-control__input {}
.radio-gr:deep(.v-input__control) .v-radio .v-selection-control__wrapper .v-selection-control__input i {}

.radio-gr:deep(.v-input__control) .v-radio .v-label { position: relative; color: #000; font-size: 16px; }
.radio-gr:deep(.v-input__control) .v-radio .v-label::before { content: ''; width: 26px; height: 26px; border-radius: 26px; background: red; margin-right: 8px; }
.radio-gr:deep(.v-input__control) .v-radio.v-selection-control--dirty .v-label::before { background: green; }

.custom .v-col { display: flex; align-items: center; justify-content: space-between; height: 68px; width: 400px; min-width: auto; }
.custom .v-col~.v-col { margin-left: 40px; }
.custom .v-col > div { flex: 0 0 auto; }
.custom .v-col > div:nth-of-type(1) { font-size: 14px; color: #222; font-weight: 700; width: 65px; }

.custom .v-col > .v-text-field:deep(.v-input__control) input { 
  height: 44px; min-height: auto; padding: 0; border: 1px solid #e4e4e4; background: #fff; padding-left: 16px; /* input, select 공통 */
}

.custom .v-col > .v-select:deep(.v-input__control) .v-field { padding: 0; background: #fff; }
.custom .v-col > .v-select:deep(.v-input__control) .v-field .v-field__input { padding: 0; height: 44px; min-height: auto; }
.custom .v-col > .v-select:deep(.v-input__control) .v-field .v-field__input .v-select__selection-text { padding-left: 16px; }
.custom .v-col > .v-select:deep(.v-input__control) .v-field .v-field__input input { border: 0; background: transparent;}

.reset { width: 118px; height: 46px !important; border: 1px solid #a0a0a0; border-radius: 500px; background: #E2E7ED; }
.search { width: 118px; height: 46px !important; border-radius: 500px; background: #136BFC; }
</style>
