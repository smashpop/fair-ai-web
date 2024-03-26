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
  <v-container fluid class="pa-0">
    <v-row no-gutters class="align-center">
      <v-col>
        <div>
          <strong class="text-68 font-weight-light text-black letter">AI 윤리 관련</strong>
        </div>
        <div>
          <strong class="text-68 font-weight-black text-black letter">인기 검색어</strong>
          <strong class="text-68 font-weight-light text-black letter">에 대해</strong>
        </div>
        <div>
          <strong class="text-68 font-weight-light text-black letter">알아보세요.</strong>
        </div>
      </v-col>

      <v-col>
        <!-- <SearchField class="ms-2" @search="searchProc" /> -->
        <SearchField class="ms-2" @click="clickProc" />
      </v-col>
    </v-row>
  </v-container>
</template>

<style lang="scss" scoped>
.letter {
  line-height: normal;
  letter-spacing: 0;
}
</style>
