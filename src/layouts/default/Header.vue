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
  <v-app-bar v-scroll.self="onScroll" color="transparent" border flat height="60">
    <template #prepend>
      <logo />

      <div class="mx-12">
        <v-menu open-on-hover>
          <template #activator="{ props }">
            <v-btn v-bind="props" variant="text">
              <div class="text-20 font-weight-bold">소개</div>
            </v-btn>
          </template>

          <v-sheet
            height="48"
            width="1920"
            style="position: static; top: 0px; left: 0px; z-index: 1"
          >
            <v-list>
              <v-list-item>
                <v-row class="d-flex align-center justify-center" dense>

                <v-btn to="/introduce/introduce" variant="text">
                  <div class="text-16 font-weight-bold">재단소개</div>
                </v-btn>
                <v-btn to="/introduce/ai-ethics" variant="text">
                  <div class="text-16 font-weight-bold">AI윤리</div>
                </v-btn>
              </v-row>

              </v-list-item>
            </v-list>
          </v-sheet>
        </v-menu>

        <v-menu open-on-hover>
          <template #activator="{ props }">
            <v-btn v-bind="props" variant="text">
              <div class="text-20 font-weight-bold">자료실</div>
            </v-btn>
          </template>

          <v-sheet
            height="48"
            width="1920"
            style="position: static; top: 0px; left: 0px; z-index: 1"
          >
            <v-list>
              <v-list-item>
                <v-row class="d-flex align-center justify-center" dense>
                  <v-btn to="/archive/thesis" variant="text">
                    <div class="text-subtitle-1 font-weight-bold">논문</div>
                  </v-btn>

                  <v-btn to="/archive/report" variant="text">
                    <div class="text-subtitle-1 font-weight-bold">보고서</div>
                  </v-btn>

                  <v-btn to="/archive/article" variant="text">
                    <div class="text-subtitle-1 font-weight-bold">기사</div>
                  </v-btn>

                  <v-btn to="/archive/guideline" variant="text">
                    <div class="text-subtitle-1 font-weight-bold">가이드라인</div>
                  </v-btn>

                  <v-btn to="/archive/curriculum" variant="text">
                    <div class="text-subtitle-1 font-weight-bold">교육커리큘럼</div>
                  </v-btn>

                  <v-btn to="/archive/refSite" variant="text">
                    <div class="text-subtitle-1 font-weight-bold">참고사이트</div>
                  </v-btn>
                </v-row>
              </v-list-item>
            </v-list>
          </v-sheet>
        </v-menu>

        <v-btn to="/news" variant="text">
          <div class="text-20 font-weight-bold">소식</div>
        </v-btn>

        <v-btn to="/suggest" variant="text">
          <div class="text-20 font-weight-bold">문의·제안</div>
        </v-btn>
      </div>
      <div></div>
    </template>
  </v-app-bar>
</template>
