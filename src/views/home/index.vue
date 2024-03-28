<script setup>
// Utilities
import { ref, onMounted } from 'vue'
import { popularImageSrc } from '@/utils/common'

// Components
import SearchSection from './searchSection'
import PopularitySection from './popularitySection'
import ArticleSection from './articleSection'
import ThesisSection from './thesisSection'
import EventSection from './eventSection'
import NoticeSection from './noticeSection'

// Apis
import { fetchList } from '@/apis/popular'

// Constants
const populars = ref(null)
const serverItemsLength = ref(0)

// initial load
onMounted(() => {
  loadFromServer()
})

// Methods
async function loadFromServer() {
  await fetchList()
    .then((response) => {
      populars.value = response.data.items
      serverItemsLength.value = response.data.total
    })
    .catch((error) => {
      console.log(error)
    })

  console.log('popular items=', populars.value)
}
</script>

<template>
  <!-- 검색 -->
  <p 
  v-if="populars" 
  style="position: absolute; top: 0; left: 0; width: 100%; height: 860px; background: green;"
  >
    <v-img
      max-height="64"
      :src="popularImageSrc(populars[0].id)"
    />
  </p>
  
  <v-container class="pa-0" fluid style="position: relative; z-index: 2; padding-top: 118px !important; height: 788px;">
    <v-row no-gutters>
      <v-sheet class="mx-auto" width="1360" style="background: transparent; min-width: 1360px;">      
        <v-chip-group style="position: absolute; left: 50%; top: 150px;">
          <v-chip>Chip 1</v-chip>

          <v-chip>Chip 2</v-chip>

          <v-chip>Chip 3</v-chip>
        </v-chip-group>   
        <SearchSection />
      </v-sheet>

      <v-sheet class="mx-auto" width="1360" style="background: transparent; margin-top: 94px; min-width: 1360px;">
        <PopularitySection :populars="populars" />
      </v-sheet>    
    </v-row>
  </v-container>

  <!-- 최근 ai 이슈 -->
  <v-container class="pa-0" fluid>
    <v-row no-gutters style="background: linear-gradient(180deg, #F0F3F7 0%, rgba(255, 255, 255, 0.00) 100%);">          
      <ArticleSection />
    </v-row>

    <v-divider class="border-opacity-100 mb-15 mx-auto" width="1360" />

    <v-row no-gutters>      
      <ThesisSection />
    </v-row>
  </v-container>

  <!-- 행사안내 -->
  <v-container class="pa-0" fluid>
    <EventSection />
  </v-container>

  <!-- 공지사항 -->
  <v-container class="pa-0" fluid>
    <NoticeSection />
  </v-container>
</template>

<!--
<p @click="schTypeSelect('최근이슈')">{{ schType }}</p>
<script>
export default {
  data() {
    return {
      schType: '인기검색어'
    }
  },

    methods: {
      schTypeSelect: function (keyword) {
        this.schType = keyword;
        console.log(1, this.schType);
      }
   },
};
</script>
-->