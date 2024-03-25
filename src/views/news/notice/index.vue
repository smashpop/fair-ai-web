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

  <v-sheet class="mx-auto mt-15" width="1360">
    <v-card class="notice-top-card" elevation="0" max-width="" variant="outlined">
      <v-card-item>
        <v-card-title class="text-30 text-black font-weight-bold">
          신규자료 업데이트 안내
        </v-card-title>
        <v-card-subtitle class="text-16 text-color-727171 font-weight-medium" style="opacity: 1">
          2023.12.15
        </v-card-subtitle>
      </v-card-item>

      <v-card-text class="mt-4 text-16 text-color-222" style="line-height: 24px">
        한국지능정보사회진흥원은 「생성형 AI윤리 가이드북」을 발간하였다.- 생성형 AI윤리 가이드북은
        생성형 AI를 윤리적이고 생산적으로 활용하는데 참고할 수 있도록 방송통신위원회와
        한국지능정보사회진흥원에서 기획·발간한 보고서임.
      </v-card-text>
    </v-card>
  </v-sheet>

  <v-sheet class="mx-auto board mt-10" width="1360">
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
          <NoticeView />
        </v-sheet>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<style lang="scss" scoped>
.notice-top-card {
  padding: 40px 50px;
  box-sizing: border-box;
  border: 1px solid #cfcfcf !important;
  border-radius: 8px;
}
.notice-top-card .v-card-item {
  padding: 0;
}
.notice-top-card::v-deep .v-card-item__content {
  display: flex;
  justify-content: space-between;
  overflow: visible;
}
.notice-top-card::v-deep .v-card-item__content .v-card-title {
  position: relative;
  overflow: visible;
}
.notice-top-card::v-deep .v-card-item__content .v-card-title::before {
  content: '';
  position: absolute;
  left: -12px;
  top: -12px;
  width: 10px;
  height: 10px;
  border-radius: 10px;
  background: var(--main-color);
}
.notice-top-card .v-card-text {
  padding: 0;
  max-width: 840px;
  word-break: keep-all;
}
</style>
