<script setup>
// Components
import SmallSearchField from '@/components/app/SmallSearchField'
import NationView from './NationView.vue'
import OrganizationView from './OrganizationView.vue'

// Utilities
import { ref } from 'vue'
const type = ref('국가')

</script>

<template>
  <v-sheet class="mx-auto d-flex justify-center align-end" width="1360" height="180">
    <p class="text-68 font-weight-bold text-black">가이드라인</p>
  </v-sheet>

  <v-sheet class="bo-sch mt-3 d-flex justify-center mx-auto" width="1360">
    <SmallSearchField />
  </v-sheet>

  <v-divider class="mt-15 mb-4" :thickness="1" />
  <v-sheet class="mx-auto snb" width="1360">
    <v-btn 
      variant="plain" 
      :ripple="false" 
      class="btn-plain-custom on"
      @click="type = '국가'"
    >
      국가
    </v-btn>
    <v-btn 
      variant="plain" 
      :ripple="false" 
      class="btn-plain-custom"
      @click="type = '국제기구'"
    >
      국제기구
    </v-btn>
  </v-sheet>

  <v-divider class="mt-4" :thickness="1" />
  <div v-if="type==='국가'">
    <NationView />
  </div>
  <div v-if="type==='국제기구'">
    <OrganizationView />
  </div>
</template>
