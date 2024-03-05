<script setup>
// Utilities
import { ref } from 'vue'
const scrollInvoked = ref(0)

function onScroll() {
  scrollInvoked.value++
  console.log('scrollInvoked.value=', scrollInvoked.value)
}
</script>

<template>
  <v-app-bar v-scroll.self="onScroll" color="transparent" flat height="72">
    <template #prepend>
      <logo />

      <div>
        <v-menu open-on-hover transition="slide-y-transition">
          <template #activator="{ props }">
            <v-btn v-bind="props" variant="text" height="72">
              <div class="text-20 font-weight-bold">소개</div>
            </v-btn>
          </template>

          <v-list>
            <v-list-item>
              <v-row class="d-flex align-center justify-center" dense>
                <v-btn to="/introduce/introduce" variant="text">
                  <div class="text-18 font-weight-bold">재단소개</div>
                </v-btn>
                <v-btn to="/introduce/ai-ethics" variant="text">
                  <div class="text-18 font-weight-bold">AI윤리</div>
                </v-btn>
              </v-row>
            </v-list-item>
          </v-list>
        </v-menu>

        <v-menu open-on-hover transition="slide-y-transition">
          <template #activator="{ props }">
            <v-btn v-bind="props" variant="text" height="72">
              <div class="text-20 font-weight-bold">자료실</div>
            </v-btn>
          </template>

          <v-list>
            <v-list-item>
              <v-row class="d-flex align-center justify-center" dense>
                <v-btn to="/archive/thesis" variant="text">
                  <div class="text-18 font-weight-bold">논문</div>
                </v-btn>

                <v-btn to="/archive/report" variant="text">
                  <div class="text-18 font-weight-bold">보고서</div>
                </v-btn>

                <v-btn to="/archive/article" variant="text">
                  <div class="text-18 font-weight-bold">기사</div>
                </v-btn>

                <v-btn to="/archive/guideline" variant="text">
                  <div class="text-18 font-weight-bold">가이드라인</div>
                </v-btn>

                <v-btn to="/archive/curriculum" variant="text">
                  <div class="text-18 font-weight-bold">교육커리큘럼</div>
                </v-btn>

                <v-btn to="/archive/refSite" variant="text">
                  <div class="text-18 font-weight-bold">참고사이트</div>
                </v-btn>
              </v-row>
            </v-list-item>
          </v-list>
        </v-menu>

        <v-menu open-on-hover transition="slide-y-transition">
          <template #activator="{ props }">
            <v-btn v-bind="props" variant="text" height="72">
              <div class="text-20 font-weight-bold">소식</div>
            </v-btn>
          </template>

          <v-list>
            <v-list-item>
              <v-row class="d-flex align-center justify-center" dense>
                <v-btn to="/news/notice" variant="text">
                  <div class="text-18 font-weight-bold">공지사항</div>
                </v-btn>
                <v-btn to="/news/event" variant="text">
                  <div class="text-18 font-weight-bold">관련행사</div>
                </v-btn>
                <v-btn to="/news/event-calendar" variant="text">
                  <div class="text-18 font-weight-bold">행사캘린더</div>
                </v-btn>
                <v-btn to="/news/event-regist" variant="text">
                  <div class="text-18 font-weight-bold">행사신청</div>
                </v-btn>
              </v-row>
            </v-list-item>
          </v-list>
        </v-menu>

        <v-menu open-on-hover transition="slide-y-transition">
          <template #activator="{ props }">
            <v-btn v-bind="props" variant="text" height="72">
              <div class="text-20 font-weight-bold">문의·제안</div>
            </v-btn>
          </template>

          <v-list>
            <v-list-item>
              <v-row class="d-flex align-center justify-center" dense>
                <v-btn to="/suggest/faq" variant="text">
                  <div class="text-18 font-weight-bold">FAQ</div>
                </v-btn>
                <v-btn to="/suggest/suggest" variant="text">
                  <div class="text-18 font-weight-bold">문의/제안</div>
                </v-btn>
              </v-row>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>      
    </template>

    <template #append>
      <v-btn append-icon="$vuetify" variant="text" class="pr-5">
        <p class="text-16 font-weight-medium">행사 캘린더</p>
      </v-btn>
    </template>
  </v-app-bar>
</template>

<style lang="scss" scoped>
.v-app-bar::v-deep .v-toolbar__content { border-bottom: 1px solid rgba(0,0,0,0.15); }
.v-app-bar::v-deep .v-toolbar__prepend > div:nth-of-type(2) { margin-left: 58px; }

.v-btn::v-deep .v-btn__content > p { color: #222; }
</style>