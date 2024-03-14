<script setup>
// Components
import SmallSearchField from '@/components/app/SmallSearchField'
import ArticleView from './ArticleView'
import FilterView from './FilterView'
</script>

<template>
  <v-sheet class="mx-auto d-flex justify-center align-end" width="1360" height="180"> 
    <p class="text-68 font-weight-bold text-black">뉴스</p>
  </v-sheet>

  <v-sheet class="bo-sch mt-3 d-flex justify-center mx-auto" width="1360">
    <SmallSearchField />
  </v-sheet>

  <v-sheet class="mx-auto board mt-15" width="1360">
    <v-container class="pa-0" fluid>
      <v-row justify="space-between" align="center" no-gutters>
        <v-col class="d-flex align-center line-height-normal">
          <p class="text-34 font-weight-bold text-main-color">1,016</p>
          <p class="text-color-555" style="margin-left: 6px;">건의 자료가<br>있습니다.</p>
        </v-col>

        <v-col class="d-flex justify-end">
          <v-btn class="btn-plain-custom btn-excel text-black font-weight-medium text-body-1" variant="plain">엑셀 다운로드</v-btn>
        </v-col>
      </v-row>

      <v-divider class="border-opacity-100 mt-5" :thickness="3" />

      <v-row no-gutters class="justify-space-between">
        <v-col class="side-menu">
          <FilterView />
        </v-col>

        <v-col class="contents pt-10">
          <ArticleView />
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<style lang="scss" scoped>
</style>