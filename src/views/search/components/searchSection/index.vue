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
    <v-btn
      class="close-btn btn-plain-custom"
      variant="plain"
      href="/home"
      >
      <svg xmlns="http://www.w3.org/2000/svg" width="68" height="68" viewBox="0 0 68 68" fill="none">
      <rect width="68" height="68" rx="34" fill="white"/>
      <path d="M44 44L24 24" stroke="#555555" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M24 44L44 24" stroke="#555555" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </v-btn>

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
            <p class="detail-sch">상세검색</p>
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
                  <div>KCI 등재</div>

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
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 16 15" fill="none" style="margin-right: 8px; margin-bottom: 2px;">
                      <path d="M1 1.71484V6.04817H5.2003" stroke="#555555" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M2.75712 9.65992C3.21103 10.9891 4.07135 12.13 5.20846 12.9109C6.34556 13.6918 7.69785 14.0702 9.06157 13.9893C10.4253 13.9083 11.7266 13.3723 12.7693 12.462C13.8121 11.5517 14.5398 10.3164 14.8429 8.94229C15.146 7.56819 15.0081 6.12967 14.4498 4.8435C13.8915 3.55732 12.9432 2.49317 11.7477 1.81137C10.5523 1.12957 9.17441 0.867064 7.82176 1.0634C6.4691 1.25974 5.21494 1.90429 4.24823 2.89993L1 6.04881" stroke="#555555" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span>초기화</span>
                  </v-btn>

                  <v-btn
                    variant="plain"
                    class="btn-plain-custom search text-16 font-weight-bold text-white d-flex justify-center align-center ml-2"
                    :ripple="false"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" style="margin-right: 8px; margin-bottom: 2px;">
                      <path d="M7.22221 13.4444C10.6586 13.4444 13.4444 10.6586 13.4444 7.22221C13.4444 3.78578 10.6586 1 7.22221 1C3.78578 1 1 3.78578 1 7.22221C1 10.6586 3.78578 13.4444 7.22221 13.4444Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M15.0005 15.0005L11.6172 11.6172" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span>검색</span>
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
 
 /* 검색 키워드 */
.keyword {}
.keyword .v-btn { height: 41px; border: 1px solid #cfcfcf; border-radius: 500px; padding: 0 18px; }
.keyword .v-btn~.v-btn { margin-left: 8px; }
.keyword .v-btn:deep(.v-btn__content) { font-size: 14px; font-weight: 500; color: #555; }

/* 확장패널 */
.v-expansion-panels { background: transparent; }
.v-expansion-panels .v-expansion-panel { background: transparent; border-radius: 0; }
.v-expansion-panels .v-expansion-panel:deep(.v-expansion-panel__shadow) { display: none; }

.v-expansion-panels .v-expansion-panel:deep(.v-expansion-panel-title) { height: 64px; padding: 0; margin: 0; display: flex; justify-content: flex-end; border-bottom: 1px solid #000; color: var(--main-color); font-size: 16px; font-weight: 700; line-height: normal; }
.v-expansion-panels .v-expansion-panel:deep(.v-expansion-panel-title--active) { min-height: auto; border-bottom: 3px solid #136BFC; }
.v-expansion-panels .v-expansion-panel:deep(.v-expansion-panel-title) > span { display: none; }

.v-expansion-panels .v-expansion-panel:deep(.v-expansion-panel-text) { background: #E2E7ED; padding: 0 40px; box-sizing: border-box; }
.v-expansion-panels .v-expansion-panel:deep(.v-expansion-panel-text) .v-expansion-panel-text__wrapper { padding: 0; }

/* 라디오 그룹 */
.radio-gr { height: 75px; display: flex; align-items: center;}
.radio-gr:deep(.v-input__control) {}
.radio-gr:deep(.v-input__control) .v-radio {}
.radio-gr:deep(.v-input__control) .v-radio~.v-radio { margin-left: 24px; }
.radio-gr:deep(.v-input__control) .v-radio .v-selection-control__wrapper { display: none; }
.radio-gr:deep(.v-input__control) .v-radio .v-selection-control__wrapper .v-selection-control__input {}
.radio-gr:deep(.v-input__control) .v-radio .v-selection-control__wrapper .v-selection-control__input i {}

.radio-gr:deep(.v-input__control) .v-radio .v-label { position: relative; color: #000; font-size: 16px; opacity: 1; }
.radio-gr:deep(.v-input__control) .v-radio .v-label::before { content: ''; width: 26px; height: 26px; border-radius: 26px; background: url('@/assets/images/detail-sch-radio-off.svg'); margin-right: 8px; }
.radio-gr:deep(.v-input__control) .v-radio.v-selection-control--dirty .v-label::before { background: url('@/assets/images/detail-sch-radio-on.svg'); }

/* form 커스텀 */
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

/* 버튼 */
.reset { width: 118px; height: 46px !important; border: 1px solid #a0a0a0; border-radius: 500px; background: #E2E7ED; }
.search { width: 118px; height: 46px !important; border-radius: 500px; background: #136BFC; }

.detail-sch { padding-right: 30px; position: relative; }
.detail-sch::after { content: ''; position: absolute; right: 0; top: -2px; width: 22px; height: 22px; background: url('@/assets/images/detail-sch.svg'); }
.v-expansion-panels .v-expansion-panel:deep(.v-expansion-panel-title--active) .detail-sch::after { background: url('@/assets/images/detail-sch-on.svg'); }

.close-btn { position: absolute; top: 96px; right: 30px; width: 68px; height: 68px !important; background: #fff; border-radius: 68px; }
</style>
