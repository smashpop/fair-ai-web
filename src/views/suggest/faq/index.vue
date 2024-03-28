<script setup>
// Components
import FaqView from './FaqView'
import SmallSearchField from '@/components/app/SmallSearchField'
</script>

<template>
  <v-sheet class="mx-auto d-flex justify-center align-end" width="1360" height="180">
    <p class="text-68 font-weight-bold text-black">FAQ</p>
  </v-sheet>

  <v-sheet class="bo-sch mt-3 d-flex justify-center mx-auto" width="1360">
    <SmallSearchField />
  </v-sheet>

  <v-divider class="mt-15 mb-4" :thickness="1" />
  <v-sheet class="mx-auto snb" width="1360">
    <v-btn variant="plain" :ripple="false" class="btn-plain-custom on">전체 <span>23</span></v-btn>
    <v-btn variant="plain" :ripple="false" class="btn-plain-custom">검색관련 <span>15</span></v-btn>
    <v-btn variant="plain" :ripple="false" class="btn-plain-custom">자료관련 <span>8</span></v-btn>
  </v-sheet>
  <v-divider class="mt-4" :thickness="1" />

  <v-sheet class="mx-auto board mt-15" width="1360">
    <v-container class="pa-0" fluid>
      <v-row justify="space-between" align="center" no-gutters>
        <v-col class="d-flex align-center line-height-normal">
          <p class="text-20 font-weight-bold text-black">
            전체 <span class="ml-2 text-main-color">1,016</span>
          </p>
        </v-col>

        <v-col class="d-flex justify-end">
          <v-sheet class="list-sort ml-8">
            <v-menu location="bottom" attach>
              <template v-slot:activator="{ props }">
                <v-btn
                  v-bind="props"
                  variant="plain"
                  class="btn-plain-custom text-black font-weight-medium text-body-1"
                  rounded="0"
                  :ripple="false"
                >
                  최신순
                </v-btn>
              </template>

              <v-list>
                <v-list-item>
                  <v-list-item-title>최신순</v-list-item-title>
                </v-list-item>
                <v-list-item>
                  <v-list-item-title>최신순</v-list-item-title>
                </v-list-item>
                <v-list-item>
                  <v-list-item-title>최신순</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-sheet>
        </v-col>
      </v-row>

      <v-divider class="border-opacity-100 mt-5" :thickness="3" />

      <v-row no-gutters>
        <v-sheet class="w-100">
          <FaqView />
        </v-sheet>
      </v-row>
    </v-container>
  </v-sheet>
</template>
<!--
<template>
  <v-container fluid class="bg-white h-screen">
    <div class="text-center text-h2 font-weight-black text-black mx-16 my-5">FAQ</div>
    <v-divider class="my-4 border-opacity-100" :thickness="3" />

    <FaqView />
  </v-container>
</template>
-->
