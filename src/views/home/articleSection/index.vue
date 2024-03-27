<script setup>
// Components
import ArticleView from './ArticleView'
</script>

<template> 
  <v-sheet elevation="0" class="mx-auto" width="1360" height="687" style="padding-top: 188px !important; background: transparent; min-width: 1360px;">
    <v-row no-gutters>
      <v-col class="d-flex flex-column justify-space-between">
        <div>
          <strong class="text-48 font-weight-bold text-black letter">최근 AI 이슈</strong>
        </div>
        
        <div>
          <div class="mt-24">
            <strong class="text-subtitle-1 font-weight-black text-disabled">이슈관련 키워드</strong>
          </div>

          <div>
            <v-btn class="ma-2" rounded="xl" variant="outlined">
              <strong class="text-subtitle-1 font-weight-black text-disabled">#AI윤리</strong>
            </v-btn>
          </div>
          <div>
            <v-btn class="ma-2" rounded="xl" variant="outlined">
              <strong class="text-subtitle-1 font-weight-black text-disabled">#CES2024</strong>
            </v-btn>
            <v-btn class="ma-2" rounded="xl" variant="outlined">
              <strong class="text-subtitle-1 font-weight-black text-disabled">#의료AI</strong>
            </v-btn>
          </div>
          <div>
            <v-btn class="ma-2" rounded="xl" variant="outlined">
              <strong class="text-subtitle-1 font-weight-black text-disabled">#자율주행</strong>
            </v-btn>
            <v-btn class="ma-2" rounded="xl" variant="outlined">
              <strong class="text-subtitle-1 font-weight-black text-disabled">#강인공지능</strong>
            </v-btn>
          </div>

          <div>
            <v-btn calss="ma-2" rounded="xl" variant="outlined">
              <strong class="text-subtitle-1 font-weight-black text-disabled">#딥러닝</strong>
            </v-btn>
            <v-btn calss="ma-2" rounded="xl" variant="outlined">
              <strong class="text-subtitle-1 font-weight-black text-disabled">#학습 콘텐츠</strong>
            </v-btn>
          </div>
        </div>
      </v-col>

      <v-col style="width: 900px; flex: 0 0 auto;">
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
</style>
