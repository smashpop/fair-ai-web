<script setup>
// Components
import SmallSearchField from '@/components/app/SmallSearchField'
import ThesisView from './ThesisView.vue'
import FilterView from './FilterView'
</script>

<template>
  <v-sheet class="mx-auto d-flex justify-center align-end" width="1360" height="180"> 
    <p class="text-68 font-weight-bold text-black">논문</p>
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
          <v-btn 
            class="btn-plain-custom btn-excel text-black font-weight-medium text-body-1" 
            variant="plain" 
            :ripple="false">
            엑셀 다운로드
          </v-btn>

          <v-sheet class="list-sort ml-8">
            <v-menu location="bottom" content-class="list-sort-content">
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

      <v-row no-gutters class="justify-space-between">
        <v-col class="side-menu">
          <FilterView />
        </v-col>

        <v-col class="contents pt-10">
          <ThesisView />
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<style lang="scss" scoped>
.list-sort { background: transparent; }
.list-sort .v-btn { background: url('/src/assets/images/sort-arrow-close.svg') 100% center no-repeat; padding-right: 24px; }
.list-sort .v-btn[aria-expanded=true] { background: url('/src/assets/images/sort-arrow-open.svg') 100% center no-repeat; }
.list-sort .v-btn[aria-expanded=true]::v-deep .v-btn__content { color: #136BFC; }
.list-sort .v-btn::v-deep .v-btn__content {}

.v-overlay-container .list-sort-content .v-list { width: 120px; box-shadow: none; border: 1px solid #222; padding: 0; }
.v-overlay-container .list-sort-content .v-list .v-list-item { height: 40px; min-height: 40px; padding: 0 20px; box-sizing: border-box; }
.v-overlay-container .list-sort-content .v-list .v-list-item:hover { background: #F0F3F7; }
.v-overlay-container .list-sort-content .v-list .v-list-item .v-list-item__overlay { opacity: 0; }
.v-overlay-container .list-sort-content .v-list .v-list-item .v-list-item-title { font-size: 14px; color: #222; }
.v-overlay-container .list-sort-content .v-list .v-list-item:hover .v-list-item-title { font-weight: 600; color: #000; }
</style>