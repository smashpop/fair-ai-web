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
                  <v-radio-group inline>
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

              <v-divider />

              <v-row no-gutters>
                <v-col>
                  <v-row dense>
                    <v-col cols="2">
                      <div class="ml-6">전체</div>
                    </v-col>
                    <v-col cols="7">
                      <v-text-field
                        label="AI윤리"
                        variant="outlined"
                        density="compact"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="3">
                      <v-select
                        label="AND"
                        :items="['AND', 'OR']"
                        density="compact"
                        variant="outlined"
                      ></v-select>
                    </v-col>
                  </v-row>
                </v-col>

                <v-col>
                  <v-row dense>
                    <v-col cols="2">
                      <div class="ml-3">논문명</div>
                    </v-col>
                    <v-col cols="7">
                      <v-text-field
                        label="AI윤리"
                        variant="outlined"
                        density="compact"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="3">
                      <v-select
                        label="AND"
                        :items="['AND', 'OR']"
                        density="compact"
                        variant="outlined"
                      ></v-select>
                    </v-col>
                  </v-row>
                </v-col>

                <v-col>
                  <v-row dense>
                    <v-col cols="2">
                      <div class="ml-6">저자</div>
                    </v-col>
                    <v-col cols="7">
                      <v-text-field
                        label="AI윤리"
                        variant="outlined"
                        density="compact"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="3">
                      <v-select
                        label="AND"
                        :items="['AND', 'OR']"
                        density="compact"
                        variant="outlined"
                      ></v-select>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>

              <v-divider />

              <v-row dense>
                <v-col>
                  <v-row dense>
                    <v-col cols="2"> 발행기관 </v-col>
                    <v-col cols="7">
                      <v-text-field
                        label="AI윤리"
                        variant="outlined"
                        density="compact"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="3">
                      <v-select
                        label="AND"
                        :items="['AND', 'OR']"
                        density="compact"
                        variant="outlined"
                      ></v-select>
                    </v-col>
                  </v-row>
                </v-col>

                <v-col>
                  <v-row dense>
                    <v-col cols="2">
                      <div class="ml-6">초록</div>
                    </v-col>
                    <v-col cols="7">
                      <v-text-field
                        label="AI윤리"
                        variant="outlined"
                        density="compact"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="3">
                      <v-select
                        label="AND"
                        :items="['AND', 'OR']"
                        density="compact"
                        variant="outlined"
                      ></v-select>
                    </v-col>
                  </v-row>
                </v-col>

                <v-col>
                  <v-row dense>
                    <v-col cols="2"> 발행년도 </v-col>
                    <v-col cols="7">
                      <v-text-field
                        label="AI윤리"
                        variant="outlined"
                        density="compact"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="3">
                      <v-select
                        label="AND"
                        :items="['AND', 'OR']"
                        density="compact"
                        variant="outlined"
                      ></v-select>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>

              <v-divider />

              <v-row dense>
                <v-col>
                  <v-row dense>
                    <v-col cols="2">
                      <div class="ml-6">국내</div>
                    </v-col>
                    <v-col cols="7">
                      <v-text-field
                        label="AI윤리"
                        variant="outlined"
                        density="compact"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="3">
                      <v-select
                        label="AND"
                        :items="['AND', 'OR']"
                        density="compact"
                        variant="outlined"
                      ></v-select>
                    </v-col>
                  </v-row>
                </v-col>

                <v-col>
                  <v-row dense>
                    <v-col cols="2">
                      <div class="ml-4">인용수</div>
                    </v-col>
                    <v-col cols="7">
                      <v-text-field
                        label="AI윤리"
                        variant="outlined"
                        density="compact"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="3">
                      <v-select
                        label="AND"
                        :items="['AND', 'OR']"
                        density="compact"
                        variant="outlined"
                      ></v-select>
                    </v-col>
                  </v-row>
                </v-col>

                <v-col>
                  <v-row dense>
                    <v-col cols="2"> 작성언어 </v-col>
                    <v-col cols="7">
                      <v-text-field
                        label="선택하세요"
                        variant="outlined"
                        density="compact"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="3">
                      <v-select
                        label="AND"
                        :items="['AND', 'OR']"
                        density="compact"
                        variant="outlined"
                      ></v-select>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>

              <v-divider />

              <v-row>
                <v-col> </v-col>
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
.v-expansion-panels .v-expansion-panel:deep(.v-expansion-panel-title--active) { min-height: auto; }
.v-expansion-panels .v-expansion-panel:deep(.v-expansion-panel-title) > span { display: none; }

.v-expansion-panels .v-expansion-panel:deep(.v-expansion-panel-text) { background: #E2E7ED; padding: 0 40px; box-sizing: border-box; }
</style>
