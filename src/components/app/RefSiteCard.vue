<script setup>
// Utilities
import { computed } from 'vue'
import tempImageSrc from '@/assets/images/TempImage.png'
const props = defineProps({
  item: {
    type: Object,
    default: null
  }
})

const description = computed(() => {
  return props.item.description ? props.item.description.substring(0, 400) : null
})
</script>

<template>
  <v-card class="mx-2" flat>
    <v-row dense>
      <v-col cols="12" md="9">
        <v-container>
          <v-row>
            <div class="text-20 my-2 mr-12" style="font-weight: 600">
              {{ props.item.siteName }}
            </div>
          </v-row>

          <v-row style="height: 70px">
            <div class="text-medium-emphasis text-body-2 mr-12">{{ description }}...</div>
          </v-row>

          <v-row>
            <span class="text-subtitle-1 text-medium-emphasis font-weight-bold ml-6"
              >자세히보기</span
            >
            <span class="ml-1">
              <v-btn
                :href="props.item.url"
                rel="noopener noreferrer"
                target="_blank"
                variant="text"
                @click.stop
              >
                <v-icon icon="mdi-arrow-top-right" size="large" start />
              </v-btn>
            </span>
          </v-row>
        </v-container>
      </v-col>

      <v-col cols="12" md="3">
        <v-img
          :src="props.item.imageUrl ? props.item.imageUrl : tempImageSrc"
          height="140"
          class="mt-1 rounded"
          cover
        />
      </v-col>
    </v-row>
  </v-card>
</template>
