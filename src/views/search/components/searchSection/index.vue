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
  <v-container>
    <v-row align="center" class="mx-0" style="height: 460px">
      <v-col cols="6">
        <div>
          <strong class="text-68 font-weight-light text-black letter text-disabled"
            >AI 윤리 관련
          </strong>
        </div>
        <div>
          <strong class="text-68 font-weight-black text-black letter text-disabled"
            >최근 이슈</strong
          >
          <strong class="text-68 font-weight-light text-black letter text-disabled">에 대해</strong>
        </div>
        <div>
          <strong class="text-68 font-weight-light text-black letter text-disabled"
            >알아보세요.</strong
          >
        </div>
      </v-col>
      <v-col cols="6">
        <!-- <SearchField class="ms-2" @search="searchProc" /> -->
        <SearchField class="ms-2" @click="clickProc" />
      </v-col>
    </v-row>

    <!-- <v-sheet class="ma-4" height="400" elevation="0"> -->
    <v-expansion-panels class="mb-16" color="blue-lighten-4" elevation="0" rounded>
      <v-expansion-panel>
        <template #title>
          <v-row dense>
            <v-col>
              <strong class="text-16 text-black text-medium-emphasis">인기검색어</strong>
              <v-btn class="mx-2" rounded="xl" size="small" variant="outlined">
                <strong class="text-subtitle-1 font-weight-black text-disabled">#AI윤리</strong>
              </v-btn>
              <v-btn class="mx-2" rounded="xl" size="small" variant="outlined">
                <strong class="text-subtitle-1 font-weight-black text-disabled">#CES2024</strong>
              </v-btn>
              <v-btn class="mx-2" rounded="xl" size="small" variant="outlined">
                <strong class="text-subtitle-1 font-weight-black text-disabled">#의료AI</strong>
              </v-btn>
              <v-btn class="mx-2" rounded="xl" size="small" variant="outlined">
                <strong class="text-subtitle-1 font-weight-black text-disabled">#자율주행</strong>
              </v-btn>
              <v-btn class="mx-2" rounded="xl" size="small" variant="outlined">
                <strong class="text-subtitle-1 font-weight-black text-disabled">#강인공지능</strong>
              </v-btn>
              <v-btn class="mx-2" rounded="xl" size="small" variant="outlined">
                <strong class="text-subtitle-1 font-weight-black text-disabled">#딥러닝</strong>
              </v-btn>
            </v-col>
          </v-row>
        </template>

        <template #text>
          <v-container>
            <v-row>
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

            <v-row dense>
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

    <!-- </v-sheet> -->
  </v-container>
</template>

<style lang="scss" scoped>
.letter {
  line-height: 1.2em;
  letter-spacing: -0.0625em;
}
</style>
