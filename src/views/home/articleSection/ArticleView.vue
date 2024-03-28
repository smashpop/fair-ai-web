<script setup>
// Components
import ArticleCard from './ArticleCard'

// Utilities
import { ref } from 'vue'
import { fetchLastList } from '@/apis/article'

const items = ref([])
const loading = ref(false)
const serverItemsLength = ref(0)

async function loadFromServer() {
  loading.value = true

  await fetchLastList()
    .then((response) => {
      items.value = response.data.items
      serverItemsLength.value = response.data.total
    })
    .catch((error) => {
      console.log(error)
    })

  loading.value = false
  console.log('article card items=', items.value)
}

// initial load
loadFromServer()
</script>

<template>
  <v-sheet class="mx-0" elevation="0" style="background: transparent;">

    <v-divider class="border-opacity-100" :thickness="3" />

    <v-carousel style="height: auto;">
      <p style="width: 100%; height: 60px; position: absolute; top: -60px; left: 0;" class="text-16 font-weight-bold text-black d-flex align-center">관련뉴스</p>

      <v-carousel-item>
        <v-row no-gutters class="d-flex justify-space-between">      
          <v-col style="max-width: none; width: 410px; flex: 0 0 auto;">
            <ArticleCard :card="items[0]" />
          </v-col>

          <v-divider vertical/>

          <v-col style="max-width: none; width: 410px; flex: 0 0 auto;">
            <ArticleCard :card="items[1]" />
          </v-col>
        </v-row>
      </v-carousel-item>

      <v-carousel-item>
        <v-row no-gutters class="d-flex justify-space-between">      
          <v-col style="max-width: none; width: 410px; flex: 0 0 auto;">
            <ArticleCard :card="items[2]" />
          </v-col>

          <v-divider vertical/>

          <v-col style="max-width: none; width: 410px; flex: 0 0 auto;">
            <ArticleCard :card="items[3]" />
          </v-col>
        </v-row>
      </v-carousel-item>

      <v-carousel-item>
        <v-row no-gutters class="d-flex justify-space-between">      
          <v-col style="max-width: none; width: 410px; flex: 0 0 auto;">
            <ArticleCard :card="items[4]" />
          </v-col>

          <v-divider vertical/>

          <v-col style="max-width: none; width: 410px; flex: 0 0 auto;">
            <ArticleCard :card="items[5]" />
          </v-col>
        </v-row>
      </v-carousel-item>
    </v-carousel>
    <!--
    <v-row no-gutters class="d-flex justify-space-between">      
      <v-col style="max-width: none; width: 410px; flex: 0 0 auto;">
        <ArticleCard :card="items[0]" />
      </v-col>

      <v-divider vertical/>

      <v-col style="max-width: none; width: 410px; flex: 0 0 auto;">
        <ArticleCard :card="items[1]" />
      </v-col>
    </v-row>
    -->
  </v-sheet>
</template>

<style lang="scss" scoped>
.v-carousel { padding-top: 60px; }
.v-carousel:deep(.v-window__container) {}
.v-carousel:deep(.v-window__container) .v-carousel-item { height: auto; }

.v-carousel:deep(.v-window__container) .v-window__controls { width: 90px; top: -50px; left: auto; right: 0; height: 40px; margin: 0; padding: 0; }
.v-carousel:deep(.v-window__container) .v-window__controls button { width: 40px; height: 40px; box-shadow: none; border: 1px solid #e4e4e4; }
.v-carousel:deep(.v-window__container) .v-window__controls button .v-btn__overlay { display: none; }

.v-carousel:deep(.v-carousel__controls) { top: 26px; left: 66px !important; width: auto; height: 8px; margin: 0; padding: 0; background: transparent; }
.v-carousel:deep(.v-carousel__controls) button { width: 8px; height: 8px; margin: 0; padding: 0; margin-right: 8px; }
.v-carousel:deep(.v-carousel__controls) button .v-btn__content { width: 8px; height: 8px; margin: 0; padding: 0; background: rgba(0,0,0,0.2); border-radius: 8px; }
.v-carousel:deep(.v-carousel__controls) button.v-btn--active .v-btn__content { background: #000; }
.v-carousel:deep(.v-carousel__controls) button .v-btn__content i { display: none; }
</style>