<script setup>
// Components
import FooterV1 from '@/components/footer/Footer-v1'
import GalleryV1 from '@/components/gallery/Gallery-v1'
import ArticleView from '@/views/archive/components/ArticleView'
import NoticeView from '@/views/news/components/NoticeView.vue'

</script>

<template>
  <v-container>
    <div class="py-2" />
    <div class="d-flex justify-center">
      <v-text-field
        append-inner-icon="mdi-magnify"
        rounded
        density="comfortable"
        placeholder="Type to search..."
        variant="outlined"
        hide-details
        style="width: 500px"
      />
    </div>
    <div class="py-2" />
    <GalleryV1 />

    <div class="py-1" />
    <ArticleView />

    <div class="py-1" />
    <NoticeView />

    <div class="py-1" />
    <FooterV1 />
  </v-container>
</template>
