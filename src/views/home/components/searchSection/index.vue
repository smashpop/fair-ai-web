<script setup>
// Components
import SearchField from '@/components/app/SearchField'

// Utilities
import { useRouter } from 'vue-router'

const router = useRouter()

function searchProc(keyword) {
  console.log('keyword=', keyword)
  router.push({
    name: 'Result',
    state: {
      dataObj: { searchStr: keyword }
    }
  })
}
</script>

<template>
  <v-container>
    <div class="mx-16 my-16">
      <v-row no-gutters>
        <v-col cols="5">
          <div>
            <strong class="text-h2 font-weight-light text-black">AI 윤리 관련</strong>
          </div>
          <div>
            <strong class="text-h2 font-weight-black text-black">최근 이슈</strong>
            <strong class="text-h2 font-weight-light text-black">에 대해</strong>
          </div>
          <div>
            <strong class="text-h2 font-weight-light text-black">알아보세요.</strong>
          </div>
        </v-col>
        <v-col cols="7">
          <SearchField class="ms-2" @search="searchProc" />
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>
