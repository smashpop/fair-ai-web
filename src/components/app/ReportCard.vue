<script setup>
// Utilities
import { computed } from 'vue'

const props = defineProps({
  report: {
    type: Object,
    default: null
  }
})
const abstract = computed(() => {
  return props.report.abstract ? props.report.abstract.substring(0, 400) : null
})
</script>

<template>
  <v-card flat>
    <v-row no-gutters justify="space-between" align="center">
      <v-col>
        <v-container fluid class="pa-0">
          <v-row no-gutters>
            <div class="text-20">
              {{ props.report.title }}
            </div>
          </v-row>

          <v-row no-gutters>
            <v-chip color="primary" size="small" label>
              <v-icon start icon="mdi-web"></v-icon>
              <span class="text-body-1">
                {{ props.report.orgType }}
              </span>
            </v-chip>

            <span class="text-body-1 font-weight-bold ml-6"> 저자 </span>
            <span class="text-body-1 ml-2">
              {{ props.report.author }}
            </span>
            <span class="text-body-1 font-weight-bold ml-6"> 발행지명 </span>
            <span class="text-body-1 ml-2">
              {{ props.report.publisher }}
            </span>
            <span class="text-body-1 font-weight-bold ml-6"> 발행연도 </span>
            <span class="text-body-1 ml-2">
              {{ props.report.publishedYear }}
            </span>
          </v-row>

          <v-row no-gutters>
            <div class="text-medium-emphasis text-body-2 mr-12">{{ abstract }}...</div>
          </v-row>

          <v-row no-gutters>
            <span class="text-subtitle-1 font-weight-bold text-medium-emphasis">원문보기</span>
            <span class="mr-4">
              <v-btn
                :href="props.report.url"
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

      <!--
      <v-col>
        <v-img src="@/assets/images/GettyImages.png" height="180" class="mt-2 rounded" cover />
      </v-col>
      -->
    </v-row>
  </v-card>
</template>
