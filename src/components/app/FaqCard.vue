<script setup>
// Utilities

const props = defineProps({
  faq: {
    type: Object,
    default: null
  }
})


</script>

<template>
  <v-card class="pa-2" flat>
    <v-row>
      <v-col cols="12" md="7">
        <v-container>
          <h1 class="text-h5 mb-4">
            {{ props.faq.title }}
          </h1>

          <div class="text-medium-emphasis text-body-2">{{ props.faq.contents }}...</div>

          
        </v-container>
      </v-col>

      <v-spacer></v-spacer>
      <v-col cols="12" md="3">
        <!-- <v-img :src="props.article.thumbnailUrl" height="150" class="rounded" cover /> -->
      </v-col>
    </v-row>
  </v-card>
</template>
