<script setup>
// Utilities
import { ref } from 'vue'
import { useRouter } from 'vue-router'

// Constants
const router = useRouter()
const scrollInvoked = ref(0)

// Methods
function onScroll() {
  scrollInvoked.value++
  console.log('scrollInvoked.value=', scrollInvoked.value)
}
</script>

<template>
  <v-app-bar
    v-scroll.self="onScroll"
    color="transparent"
    flat
    height="72"
    :class="{ active: isScrollDown }"
  >
    <template #prepend>
      <logo />

      <div>
        <v-menu open-on-hover transition="slide-y-transition" close-delay="100" open-delay="100" attach>
          <template #activator="{ props }">
            <v-btn v-bind="props" variant="plain" class="btn-plain-custom" :ripple="false">
              <div>소개</div>
            </v-btn>
          </template>

          <v-list variant="plain" elevation="0" rounded="0" class="btn-plain-custom">
            <v-list-item variant="plain" class="btn-plain-custom">
              <v-row class="d-flex align-center justify-center" no-gutters>
                <v-btn to="/introduce/introduce" variant="plain" :ripple="false">
                  <div>재단소개</div>
                </v-btn>
                <v-btn to="/introduce/ai-ethics" variant="plain" :ripple="false">
                  <div>AI윤리</div>
                </v-btn>
              </v-row>
            </v-list-item>
          </v-list>
        </v-menu>

        <v-menu open-on-hover transition="slide-y-transition" close-delay="100" open-delay="100" attach>
          <template #activator="{ props }">
            <v-btn v-bind="props" variant="plain" class="btn-plain-custom" :ripple="false">
              <div>자료실</div>
            </v-btn>
          </template>

          <v-list variant="plain" elevation="0" rounded="0" class="btn-plain-custom">
            <v-list-item variant="plain" class="btn-plain-custom">
              <v-row class="d-flex align-center justify-center" no-gutters>
                <v-btn to="/archive/thesis" variant="plain" :ripple="false">
                  <div>논문</div>
                </v-btn>

                <v-btn to="/archive/report" variant="plain" :ripple="false">
                  <div>보고서</div>
                </v-btn>

                <v-btn to="/archive/article" variant="plain" :ripple="false">
                  <div>뉴스</div>
                </v-btn>

                <v-btn to="/archive/guideline" variant="plain" :ripple="false">
                  <div>가이드라인</div>
                </v-btn>

                <v-btn to="/archive/refSite" variant="plain" :ripple="false">
                  <div>참고사이트</div>
                </v-btn>

                <v-btn to="/archive/curriculum" variant="plain" :ripple="false">
                  <div>전공/커리큘럼</div>
                </v-btn>
              </v-row>
            </v-list-item>
          </v-list>
        </v-menu>

        <v-menu open-on-hover transition="slide-y-transition" close-delay="100" open-delay="100" attach>
          <template #activator="{ props }">
            <v-btn v-bind="props" variant="plain" class="btn-plain-custom" :ripple="false">
              <div>소식</div>
            </v-btn>
          </template>

          <v-list variant="plain" elevation="0" rounded="0" class="btn-plain-custom">
            <v-list-item variant="plain" class="btn-plain-custom">
              <v-row class="d-flex align-center justify-center" no-gutters>
                <v-btn to="/news/notice" variant="plain" :ripple="false">
                  <div>공지사항</div>
                </v-btn>
                <v-btn to="/news/event-calendar" variant="plain" :ripple="false">
                  <div>관련행사</div>
                </v-btn>
                <v-btn to="/news/event-regist" variant="plain" :ripple="false">
                  <div>행사등록 신청</div>
                </v-btn>
              </v-row>
            </v-list-item>
          </v-list>
        </v-menu>

        <v-menu open-on-hover transition="slide-y-transition" close-delay="100" open-delay="100" attach>
          <template #activator="{ props }">
            <v-btn v-bind="props" variant="plain" class="btn-plain-custom" :ripple="false">
              <div>문의·제안</div>
            </v-btn>
          </template>

          <v-list variant="plain" elevation="0" rounded="0" class="btn-plain-custom">
            <v-list-item variant="plain" class="btn-plain-custom">
              <v-row class="d-flex align-center justify-center" no-gutters>
                <v-btn to="/suggest/faq" variant="plain" :ripple="false">
                  <div>FAQ</div>
                </v-btn>
                <v-btn to="/suggest/suggest" variant="plain" :ripple="false">
                  <div>문의·제안</div>
                </v-btn>
              </v-row>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </template>

    <template #append>
      <v-btn variant="plain" class="btn-plain-custom pr-5" :ripple="false" @click="router.push('/news/event-calendar')">
        <p class="text-16 font-weight-medium calendar">행사 캘린더</p>
      </v-btn>
    </template>
  </v-app-bar>
</template>

<script>
/*
window.addEventListener('scroll', function(){
  console.log( window.scrollY );
});
*/

export default {
  data() {
    return {
      isScrollDown: false, // class active 변수
      scrollTop: 0 // 스크롤 값 저장용
    }
  },

  // 1번 가상 돔 마운트 시, 이벤트 등록
  mounted() {
    document.addEventListener('scroll', this.handleScroll)
  },
  // 3번 마운트 해제 전, 이벤트 삭제하기
  beforeUnmount() {
    document.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    // 2번 이벤트 액션
    handleScroll: function (e) {
      this.scrollTop = window.scrollY
      if (this.scrollTop > 0) {
        this.isScrollDown = true
      } else {
        this.isScrollDown = false
      }
      //console.log(this.scrollTop);
    }
  }
}
</script>

<style lang="scss" scoped>
.v-app-bar { overflow: visible; }
.v-app-bar:hover::v-deep .v-toolbar__content,
.v-app-bar.active::v-deep .v-toolbar__content { background: #fff; }

.v-app-bar::v-deep .v-toolbar__content { min-width: 1360px; border-bottom: 1px solid rgba(0, 0, 0, 0.15); }
.v-app-bar::v-deep .v-toolbar__prepend > div:nth-of-type(2) { margin-left: 75px; }
.v-app-bar::v-deep .v-toolbar__prepend .v-btn { opacity: 1; padding: 0; font-size: 20px; font-weight: 700; color: #000; height: 72px !important;}
.v-app-bar::v-deep .v-toolbar__prepend .v-btn ~ .v-btn { margin-left: 35px;}
.v-app-bar::v-deep .v-toolbar__prepend .v-btn:hover { color: #136bfc; }

.v-btn::v-deep .v-btn__content > p { color: #222; }
.calendar { padding-right: 25px; background: url('/src/assets/images/calendar.svg') 100% 1px no-repeat; }

.v-app-bar .v-overlay.v-menu {}
.v-app-bar .v-overlay.v-menu::after {
  content: '';
  position: fixed;
  top: 72px;
  left: 0;
  width: 100%;
  height: 80px;
  background: #fff;
  z-index: -1;
  box-shadow: 0 3px 10px 0px rgba(0,0,0,0.05);
}

.v-app-bar .v-overlay.v-menu::v-deep .v-overlay__content {
}
.v-app-bar .v-overlay.v-menu::v-deep .v-overlay__content .v-list {
  background: transparent;
}
.v-app-bar .v-overlay.v-menu::v-deep .v-overlay__content .v-list .v-list-item {
  height: 80px !important;
  padding: 0;
}
.v-app-bar .v-overlay.v-menu::v-deep
  .v-overlay__content
  .v-list
  .v-list-item
  .v-list-item__content
  .v-btn {
  opacity: 1;
  font-size: 16px;
  color: #555;
  font-weight: 500;
  line-height: normal;
  padding: 0;
  min-width: auto;
}
.v-app-bar .v-overlay.v-menu::v-deep
  .v-overlay__content
  .v-list
  .v-list-item
  .v-list-item__content
  .v-btn
  ~ .v-btn {
  margin-left: 72px;
}
.v-app-bar .v-overlay.v-menu::v-deep
  .v-overlay__content
  .v-list
  .v-list-item
  .v-list-item__content
  .v-btn:hover {
  color: #136bfc;
  font-weight: 700;
}
</style>
