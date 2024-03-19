<script setup>
// Components
import SmallSearchField from '@/components/app/SmallSearchField'
import NoticeView from './NoticeView'
</script>

<template>
  <v-sheet class="mx-auto d-flex justify-center align-end" width="1360" height="180"> 
    <p class="text-68 font-weight-bold text-black">공지사항</p>
  </v-sheet>

  <v-sheet class="bo-sch mt-3 d-flex justify-center mx-auto" width="1360">
    <SmallSearchField />
  </v-sheet>

  <v-divider class="mt-15 mb-4" :thickness="1" />
    <v-sheet class="mx-auto snb" width="1360">
      <v-btn variant="plain" :ripple="false" class="btn-plain-custom on">전체 <span>23</span></v-btn>
      <v-btn variant="plain" :ripple="false" class="btn-plain-custom">홍보 <span>15</span></v-btn>
    </v-sheet>
  <v-divider class="mt-4" :thickness="1" />


  <v-sheet class="mx-auto board mt-15" width="1360">
    <v-container class="pa-0" fluid>
      <v-row justify="space-between" align="center" no-gutters>
        <v-col class="d-flex align-center line-height-normal">
          <p class="text-20 font-weight-bold text-black">전체 <span>1016</span></p>
        </v-col>

        <v-col class="d-flex justify-end">
          <p class="text-black font-weight-medium">최신순</p>
        </v-col>
      </v-row>

      <v-divider class="border-opacity-100 mt-5" :thickness="3" />

      <v-row no-gutters>
        <v-sheet class="w-100">
          <NoticeView />
        </v-sheet>        
      </v-row>
    </v-container>
  </v-sheet>
</template>