<script setup>
// Components
import ArticleView from './ArticleView'
</script>

<template>
  <v-sheet class="mx-16" elevation="0">
    <div class="mx-16">
      <v-row no-gutters>
        <v-col cols="12" md="4">
          <v-container>
            <div>
              <strong class="text-h4 font-weight-black mb-24">최근AI이슈</strong>
            </div>

            <div class="mt-24">
              <strong class="text-subtitle-1 font-weight-black text-disabled"
                >이슈관련 키워드</strong
              >
            </div>

            <div>
              <v-btn rounded="xl" size="x-large" variant="outlined">
                <p class="text-subtitle-1 font-weight-black text-disabled">#AI윤리</p>
              </v-btn>
            </div>
            <div>
              <v-btn rounded="xl" size="x-large" variant="outlined">
                <p class="text-subtitle-1 font-weight-black text-disabled">#CES2024</p>
              </v-btn>

              <v-btn rounded="xl" size="x-large" variant="outlined">
                <p class="text-subtitle-1 font-weight-black text-disabled">#의료AI</p>
              </v-btn>
            </div>
            <div>
              <v-btn rounded="xl" size="x-large" variant="outlined">
                <p class="text-subtitle-1 font-weight-black text-disabled">#자율주행</p>
              </v-btn>
              <v-btn rounded="xl" size="x-large" variant="outlined">
                <p class="text-subtitle-1 font-weight-black text-disabled">#강인공지능</p>
              </v-btn>
            </div>
            <div>
              <v-btn calss="ma-2" rounded="xl" size="x-large" variant="outlined">
                <p class="text-subtitle-1 font-weight-black text-disabled">#딥러닝</p>
              </v-btn>
              <v-btn calss="ma-2" rounded="xl" size="x-large" variant="outlined">
                <p class="text-subtitle-1 font-weight-black text-disabled">#게임형 학습 콘텐츠</p>
              </v-btn>
            </div>
          </v-container>
        </v-col>

        <v-col cols="12" md="8">
          <ArticleView />
        </v-col>
      </v-row>
    </div>
  </v-sheet>
</template>
