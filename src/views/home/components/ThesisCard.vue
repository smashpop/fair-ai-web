<script setup>
const props = defineProps({
  thesis: {
    type: Object,
    default: null
  }
})
</script>

<template>
  <v-container>
    <v-sheet class="pa-4" elevation="0">
      <div>
        <h6 class="text-subtitle-1 mb-4">논문 해외</h6>
      </div>

      <div>
        <v-sheet height="150" elevation="0">
          <strong class="text-h5" font-weight-bold>
            Navigating the generative AI era: Introducing the AI assessment scale for ethical GenAI
            assessment
            {{ props.thesis ? props.thesis.title : '' }}
          </strong>
        </v-sheet>
      </div>

      <div>
        <v-row>
          <v-col cols="12" md="5">
            <v-img height="200" gradient="#262626, #262626" class="rounded elevation-5" />
          </v-col>
          <v-col cols="12" md="7">
            <div>
              <strong class="text-subtitle-1 mb-4">저자</strong>
            </div>
            <div>
              <strong class="text-subtitle-1 mb-4">발행</strong>
            </div>
            <div>
              <strong class="text-subtitle-1 mb-4">연도</strong>
            </div>
          </v-col>
        </v-row>
      </div>
    </v-sheet>
  </v-container>
</template>
