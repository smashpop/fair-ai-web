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
            <div class="text-20 font-weight-semi-bold text-black line-height-normal">
              {{ props.thesis.title }}
            </div>
          </v-row>

          <v-row no-gutters class="align-center mt-3">
            <v-chip color="primary" size="small" label>
              <v-icon start icon="mdi-web"></v-icon>
              <span class="text-body-1">
                {{ props.thesis.orgType }}
              </span>
            </v-chip>

            <span class="text-body-1 font-weight-semi-bold text-color-727171 ml-5"> 저자 </span>
            <span class="text-body-1 ml-2 author text-color-727171">
              {{ props.thesis.author }}
            </span>
            <span class="text-body-1 font-weight-semi-bold text-color-727171 ml-5"> 발행지명 </span>
            <span class="text-body-1 ml-2 text-color-727171">
              {{ props.thesis.publisher }}
            </span>
            <span class="text-body-1 font-weight-semi-bold text-color-727171 ml-5"> 발행연도 </span>
            <span class="text-body-1 ml-2 text-color-727171">
              {{ props.thesis.publishedYear }}
            </span>
          </v-row>

          <v-row no-gutters class="mt-6">
            <div class="text-body-1 text-color-555 more-text close" v-bind:id="'more-text-'+props.thesis.id">{{ abstract }}...</div>
          </v-row>
        </v-container>
      </v-col>

      <v-col style="max-width: 83px; margin-left: 140px; flex: 0 0 auto;">
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
        variant="plain"
        @click="moreChk(props.thesis.id)"
      >
        더보기
      </v-btn>
    </v-row>
  </v-card>
</template>

<script>
export default {
   data() {
      return {
      };
   },

   methods: {
     moreChk(e) {
      const moreElement = document.getElementById("more-text-"+e);

      if(moreElement.classList.contains('active')){
        moreElement.classList.replace('active', 'close');
      }
      else{
        moreElement.classList.replace('close', 'active');
      }
     }
   },
};
</script>

<style lang="scss" scoped>
.author { max-width: 400px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; word-wrap: normal; }
.more-text.close { overflow: hidden; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; text-overflow: ellipsis; }
.more-text.active {}
</style>