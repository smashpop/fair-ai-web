<script setup>
// Utilities
import { computed } from 'vue'

const props = defineProps({
  thesis: {
    type: Object,
    default: null
  }
})
const abstract = computed(() => {
  return props.thesis.abstract ? props.thesis.abstract.substring(0, 400) : null
})
</script>

<template>
  <v-card flat>
    <v-row no-gutters justify="space-between" align="center">
      <v-col>
        <v-container fluid class="pa-0">
          <v-row no-gutters>
            <div class="text-20">
              {{ props.thesis.title }}
            </div>
          </v-row>

          <v-row no-gutters class="align-center">
            <v-chip color="primary" size="small" label>
              <v-icon start icon="mdi-web"></v-icon>
              <span class="text-body-1">
                {{ props.thesis.orgType }}
              </span>
            </v-chip>

            <span class="text-body-1 font-weight-bold ml-6"> 저자 </span>
            <span class="text-body-1 ml-2">
              {{ props.thesis.author }}
            </span>
            <span class="text-body-1 font-weight-bold ml-6"> 발행지명 </span>
            <span class="text-body-1 ml-2">
              {{ props.thesis.publisher }}
            </span>
            <span class="text-body-1 font-weight-bold ml-6"> 발행연도 </span>
            <span class="text-body-1 ml-2">
              {{ props.thesis.publishedYear }}
            </span>
          </v-row>

          <v-row no-gutters>
            <div class="text-body-1">{{ abstract }}...</div>
          </v-row>
        </v-container>
      </v-col>

      <v-col style="max-width: 83px; margin-left: 140px;">
        <v-img src="@/assets/images/GettyImages.png" width="83" height="107" class="rounded" cover />
      </v-col>
    </v-row>

    <v-row no-gutters justify="end">
      <v-btn
        class="text-subtitle-1 btn-plain-custom"
        :href="props.thesis.url"
        rel="noopener noreferrer"
        target="_blank"
        variant="plain"
        @click.stop
      >
        원문보기
      </v-btn>

      <v-btn
        class="text-subtitle-1 btn-plain-custom ml-8"
        :href="props.thesis.url"
        rel="noopener noreferrer"
        target="_blank"
        variant="plain"
        @click.stop
      >
        더보기
      </v-btn>
    </v-row>
  </v-card>
</template>
