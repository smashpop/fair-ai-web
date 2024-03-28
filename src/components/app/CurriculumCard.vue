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
  return props.item.description ? props.item.description.substring(0, 500) : null
})

//console.log(props.item);
</script>

<template>
  <v-card flat>
    <v-row no-gutters>
      <v-col style="max-width: 210px">
        <v-img
          :src="props.item.imageUrl ? props.item.imageUrl : tempImageSrc"
          width="210"
          height="116"
          class="rounded"
          cover
        />
      </v-col>

      <v-col class="pl-7">
        <v-container fluid class="pa-0">
          <v-row no-gutters>
            <div class="text-20 text-black font-weight-semi-bold">
              {{ props.item.programName }}
            </div>
          </v-row>

          <v-row no-gutters class="mt-3">
            <div class="text-16 text-color-555">{{ description }}</div>
          </v-row>

          <v-row no-gutters class="mt-3">
            <span>
              <v-btn
                class="btn-plain-custom text-color-555 text-body-1"
                :href="props.item.url"
                rel="noopener noreferrer"
                target="_blank"
                variant="plain"
                @click.stop
              >
                {{ props.item.url }}
              </v-btn>
            </span>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-card>
</template>
