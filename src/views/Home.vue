<script setup>
// Components
import SearchField from '@/components/app/SearchField'
import ArticleView from '@/components/app/ArticleView'
import NoticeView from '@/components/app/NoticeView'
import EventView from '@/components/app/EventView'
import GalleryV1 from '@/components/gallery/Gallery-v1'

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
    <div class="py-2" />
    <div class="d-flex justify-center">
      <SearchField class="ms-2" @search="searchProc" />
    </div>
    <div class="py-2" />
    <GalleryV1 />

    <div class="py-1" />
    <ArticleView />

    <div class="py-1" />
    <EventView />

    <div class="py-4" />
    <NoticeView />

  </v-container>
</template>
