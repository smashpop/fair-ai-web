<script setup>
// Components
import SmallSearchField from '@/components/app/SmallSearchField'
import ArticleView from './ArticleView'
import FilterView from './FilterView'
</script>

<template>
  <v-sheet class="mx-auto d-flex justify-center align-end" width="1360" height="180"> 
    <p class="text-68 font-weight-bold text-black">기사</p>
  </v-sheet>

  <v-sheet class="sch mt-3 d-flex justify-center mx-auto" width="1360">
    <SmallSearchField />
  </v-sheet>

  <v-sheet class="mx-auto board mt-15" width="1360">
    <v-container class="pa-0" fluid>
      <v-row justify="space-between" align="center" no-gutters>
        <v-col class="d-flex align-center">
          <p>1,016</p>
          <p>건의 자료가<br>있습니다.</p>
        </v-col>

        <v-col class="d-flex justify-end">
          <p>엑셀다운로드</p>
          <div class="font-weight-bold text-body-2">최신순</div>
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
body { overflow-x: scroll; }
.sch .v-input {}
.sch .v-input::v-deep .v-input__control .v-field { background-color: #F0F3F7 !important; }
.sch .v-input::v-deep .v-input__control input { height: 52px; }
.sch .v-input::v-deep .v-input__control input::placeholder { opacity: 0; }
.sch .v-input::v-deep .v-input__control .v-field__outline { display: none; }

.board {}
.board .side-menu { width: 245px; flex: 0 0 auto; }
.board .contents { width: 1015px; flex: 0 0 auto; }
</style>