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
            <v-expansion-panel
            >
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
                11Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima

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
