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
  return props.report.abstract ? props.report.abstract.substring(0, 800) : null
})
</script>

<template>
  <v-card flat>
    <v-row no-gutters justify="space-between" align="center">
      <v-col>
        <v-container fluid class="pa-0">
          <v-row no-gutters>
            <v-btn
              style="letter-spacing: 0"
              class="btn-plain-custom text-20 font-weight-semi-bold text-black line-height-normal"
              :href="props.report.url"
              rel="noopener noreferrer"
              target="_blank"
              variant="plain"
              @click.stop
            >
              {{ props.report.title }}
            </v-btn>
          </v-row>

          <v-row no-gutters class="align-center mt-3">
            <v-chip color="primary" class="chip-country" label>
              <span class="text-body-2 text-color-222 font-weight-semi-bold">
                {{ props.report.orgType }}
              </span>
            </v-chip>

            <span class="text-body-1 font-weight-semi-bold text-color-727171 ml-5"> 저자 </span>
            <span class="text-body-1 ml-2 author text-color-727171">
              {{ props.report.author }}
            </span>
            <span class="text-body-1 font-weight-semi-bold text-color-727171 ml-5"> 발행지명 </span>
            <span class="text-body-1 ml-2 text-color-727171">
              {{ props.report.publisher }}
            </span>
            <span class="text-body-1 font-weight-semi-bold text-color-727171 ml-5"> 발행연도 </span>
            <span class="text-body-1 ml-2 text-color-727171">
              {{ props.report.publishedYear }}
            </span>
          </v-row>

          <v-row no-gutters class="mt-6">
            <div
              class="text-body-1 text-color-555 more-text close"
              v-bind:id="'more-text-' + props.report.id"
            >
              {{ abstract }}...
            </div>
          </v-row>

          <v-row no-gutters justify="end" class="mt-3">
            <v-btn
              class="text-subtitle-1 btn-plain-custom ml-8 line-height-normal btn-more"
              :class="{ active: isActive }"
              variant="plain"
              :ripple="false"
              @click="moreChk(props.report.id)"
            >
              {{ btnText }}
            </v-btn>
          </v-row>

          <!--
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
          </v-row>-->
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

<script>
export default {
  data() {
    return {
      btnText: '더보기',
      isActive: false
    }
  },

  methods: {
    moreChk(e) {
      const moreElement = document.getElementById('more-text-' + e)

      if (moreElement.classList.contains('active')) {
        moreElement.classList.replace('active', 'close')
        this.btnText = '더보기'
        this.isActive = false
      } else {
        moreElement.classList.replace('close', 'active')
        this.btnText = '닫기'
        this.isActive = true
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.author {
  max-width: 400px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-wrap: normal;
}
.more-text.close {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
}
.more-text.active {
}
</style>
