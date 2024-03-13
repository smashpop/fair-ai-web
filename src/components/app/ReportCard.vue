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
            <div class="text-20 font-weight-semi-bold text-black">
              {{ props.report.title }}
            </div>
          </v-row>

          <v-row no-gutters class="mt-3 text-color-727171 align-center">
            <v-chip color="primary" size="small" label>
              <v-icon start icon="mdi-web"></v-icon>
              <span class="text-body-1">
                {{ props.report.orgType }}
              </span>
            </v-chip>

            <span class="text-body-1 font-weight-semi-bold ml-6"> 저자 </span>
            <span class="text-body-1 ml-2">
              {{ props.report.author }}
            </span>
            <span class="text-body-1 font-weight-semi-bold ml-6"> 발행지명 </span>
            <span class="text-body-1 ml-2">
              {{ props.report.publisher }}
            </span>
            <span class="text-body-1 font-weight-semi-bold ml-6"> 발행연도 </span>
            <span class="text-body-1 ml-2">
              {{ props.report.publishedYear }}
            </span>
          </v-row>

          <v-row no-gutters class="mt-6">
            <div class="text-body-1 text-color-555">{{ abstract }}...</div>
          </v-row>

          <v-row no-gutters class="justify-end mt-3">
            <v-btn
              class="btn-plain-custom"
              :href="props.report.url"
              rel="noopener noreferrer"
              target="_blank"
              variant="plain"
              @click.stop
            >
              원문보기
            </v-btn>
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
