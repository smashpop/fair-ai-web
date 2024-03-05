<script setup>
// Components
import SmallSearchField from '@/components/app/SmallSearchField'
import ArticleView from './ArticleView'
import FilterView from './FilterView'
</script>

<template>
  <v-container fluid class="bg-white">
    <div>
      <v-sheet class="text-center mx-auto" width="100%">
        <div class="text-68 font-weight-bold black text-black">기사</div>
      </v-sheet>

      <v-row class="sch mt-5" justify="center">
        <SmallSearchField />
      </v-row>

      <v-row justify="end">
        <v-col cols="12" md="2">
          <div class="font-weight-bold text-body-2">최신순</div>
        </v-col>
      </v-row>

      <v-divider class="mx-auto border-opacity-100" :thickness="3" />

      <v-row>
        <v-col cols="12" md="2">
          <FilterView />
        </v-col>

        <v-col cols="12" md="10">
          <ArticleView />
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<style lang="scss" scoped>
.v-container > div { margin-top: 82px; }
.v-container .v-row { width: 1360px; margin: 0 auto; }

.v-container .v-divider { width: 1360px; }

.sch .v-input {}
.sch .v-input::v-deep .v-input__control .v-field { background-color: #F0F3F7 !important; }
.sch .v-input::v-deep .v-input__control input { height: 52px; }
.sch .v-input::v-deep .v-input__control .v-field__outline { display: none; }
</style>