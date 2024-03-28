<script setup>
// Components
import ArticleView from './ArticleView'
</script>

<template> 
  <v-sheet elevation="0" class="mx-auto" width="1360" height="687" style="padding-top: 188px !important; background: transparent; min-width: 1360px;">
    <v-row no-gutters>
      <v-col class="d-flex flex-column justify-space-between" style="height: 447px;">
        <div>
          <strong class="text-48 font-weight-bold text-black letter">최근 AI 이슈</strong>
        </div>
        
        <div class="keyword">
          <p>
            <strong class="text-16 font-weight-bold tex-color-727171">이슈관련 키워드</strong>
          </p>

          <div class="mt-7">
            <v-btn 
            variant="plain"
            class="btn-plain-custom"
            >
              <p>#AI윤리</p>
            </v-btn>
          </div>

          <div>
            <v-btn 
            variant="plain"
            class="btn-plain-custom"
            >
              <p>#CES 2024</p>
            </v-btn>

            <v-btn 
            variant="plain"
            class="btn-plain-custom"
            >
              <p>#의료 AI</p>
            </v-btn>
          </div>

          <div>
            <v-btn 
            variant="plain"
            class="btn-plain-custom"
            >
              <p>#자율주행</p>
            </v-btn>

            <v-btn 
            variant="plain"
            class="btn-plain-custom"
            >
              <p>#강인공지능</p>
            </v-btn>
          </div>

          <div>
            <v-btn 
            variant="plain"
            class="btn-plain-custom"
            >
              <p>#딥러닝</p>
            </v-btn>

            <v-btn 
            variant="plain"
            class="btn-plain-custom"
            >
              <p>#게임형 학습 콘텐츠</p>
            </v-btn>
          </div>
        </div>
      </v-col>

      <v-col style="width: 900px; flex: 0 0 auto; height: 447px;">
        <ArticleView />
      </v-col>
    </v-row>
  </v-sheet>
</template>

<style lang="scss" scoped>
.letter {
  line-height: normal;
  letter-spacing: 0;
}

.keyword {}
.keyword > div {}
.keyword > div~div { margin-top: 10px; }
.keyword > div > .v-btn {}
.keyword > div > .v-btn~.v-btn { margin-left: 10px;  }
.keyword > div > .v-btn:deep(.v-btn__content) { padding: 0 18px; height: 49px; border: 1px solid #c0c0c0; border-radius: 500px; line-height: 49px; text-align: center; font-size: 18px; color: #727171; font-weight: 500; }
</style>
