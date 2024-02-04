<script setup>
// Components
import ArticleView from './ArticleView'
</script>

<template>
  <v-sheet elevation="0">
    <v-row no-gutters>
      <v-col cols="12" md="4">
        <v-container>
          <div style="height: 180px">
            <strong class="text-48 font-weight-black mb-24">최근AI이슈</strong>
          </div>

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
        </v-container>
      </v-col>

      <v-col cols="12" md="8">
        <ArticleView />
      </v-col>
    </v-row>
  </v-sheet>
</template>
