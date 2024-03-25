<script setup></script>

<template>
  <v-footer color="#F4F4F4" class="pa-0 pt-10 pb-15">
    <v-sheet class="mx-auto" width="1360" color="#F4F4F4">
      <v-container class="pa-0" fluid>
        <v-row no-gutters>
          <v-col class="pa-0">
            <logo />
          </v-col>

          <v-col class="d-flex flex-column justify-space-between align-start" style="height: 144px">
            <v-btn to="/introduce" variant="plain" class="btn-plain-custom">
              <strong class="text-20 font-weight-bold text-color-222">소개</strong>
            </v-btn>

            <v-btn to="/archive" variant="plain" class="btn-plain-custom">
              <strong class="text-20 font-weight-bold text-color-222">자료실</strong>
            </v-btn>

            <v-btn to="/news" variant="plain" class="btn-plain-custom">
              <strong class="text-20 font-weight-bold text-color-222">소식</strong>
            </v-btn>
            <v-btn to="/suggest" variant="plain" class="btn-plain-custom">
              <strong class="text-20 font-weight-bold text-color-222">문의·제안</strong>
            </v-btn>
          </v-col>

          <v-col class="d-flex flex-column justify-space-between">
            <v-row no-gutters class="d-flex flex-column align-start flex-0-0">
              <v-btn to="/news/event-regist" variant="plain" class="btn-plain-custom">
                <strong class="text-16 font-weight-semi-bold text-color-727171"
                  >행사등록 제안</strong
                >
              </v-btn>

              <v-btn to="/privacy-polocy" variant="plain" class="btn-plain-custom mt-4">
                <strong class="text-16 font-weight-semi-bold text-color-727171"
                  >개인정보처리방침</strong
                >
              </v-btn>
            </v-row>

            <v-row no-gutters class="d-flex flex-column flex-0-0 text-color-999">
              <p>재단법인 엔씨문화재단</p>
              <p>© NC Cultural Foundation. All Rights Reserved.</p>
            </v-row>
          </v-col>

          <v-col class="d-flex flex-column justify-space-between">
            <v-sheet width="325" class="site">
              <v-menu location="top" content-class="footer-site">
                <template v-slot:activator="{ props }">
                  <v-btn
                    v-bind="props"
                    variant="plain"
                    class="btn-plain-custom"
                    rounded="0"
                    :ripple="false"
                  >
                    관련 사이트
                  </v-btn>
                </template>

                <v-list>
                  <v-list-item href="https://naver.com" target="_blank">
                    <v-list-item-title>NC문화재단</v-list-item-title>
                  </v-list-item>

                  <v-list-item href="https://naver.com" target="_blank">
                    <v-list-item-title>NC소프트</v-list-item-title>
                  </v-list-item>

                  <v-list-item href="https://naver.com" target="_blank">
                    <v-list-item-title>NC Japan</v-list-item-title>
                  </v-list-item>

                  <v-list-item href="https://naver.com" target="_blank">
                    <v-list-item-title>NC Taiwan</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </v-sheet>

            <div class="d-flex justify-end">
              <v-btn
                href="https://facebook.com"
                target="_blank"
                variant="plain"
                class="btn-plain-custom"
                :ripple="false"
              >
                <v-img
                  src="@/assets/images/button-facebook.svg"
                  class="cursor-pointer"
                  width="40"
                  height="40"
                  alt="facebook"
                />
              </v-btn>

              <v-btn
                href="https://youtube.com"
                target="_blank"
                variant="plain"
                class="btn-plain-custom ml-3"
                :ripple="false"
              >
                <v-img
                  src="@/assets/images/button-youtube.svg"
                  class="cursor-pointer"
                  width="40"
                  height="40"
                  alt="youtube"
                />
              </v-btn>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>
  </v-footer>
</template>

<style lang="scss" scoped>
.site {
  background: transparent;
}
.site .v-btn {
  width: 100%;
  justify-content: start;
  border-bottom: 1px solid #727171;
  background: url('/src/assets/images/footer-site-arrow.svg') 100% center no-repeat;
}
.site .v-btn[aria-expanded='true'] {
}
.site .v-btn::v-deep .v-btn__content {
  height: 59px;
  width: 100%;
  font-size: 16px;
  font-weight: 600;
  color: #727171;
}

.footer-site .v-list {
  box-shadow: none;
  border: 1px solid #222;
  padding: 0;
}
.footer-site .v-list .v-list-item {
  height: 40px;
  min-height: 40px;
  padding: 0 20px;
  box-sizing: border-box;
}
.footer-site .v-list .v-list-item:hover {
  background: #f0f3f7;
}
.footer-site .v-list .v-list-item .v-list-item__overlay {
  opacity: 0;
}
.footer-site .v-list .v-list-item .v-list-item-title {
  font-size: 16px;
  color: #222;
}
.footer-site .v-list .v-list-item:hover .v-list-item-title {
  font-weight: 600;
  color: #000;
}
</style>
