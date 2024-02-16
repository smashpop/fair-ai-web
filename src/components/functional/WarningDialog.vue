<script setup>
// Utilities

import { closeDialog } from 'vue3-promise-dialog'

const props = defineProps({
  text: {
    type: String,
    default: null
  }
})
</script>

<template>
  <div class="dialog">
    <div class="center">
      <v-card class="mx-auto" elevation="16" min-width="400">
        <v-toolbar color="red-lighten-1" density="compact">
          <div class="mx-4 text-h6 font-weight-bold">Warning</div>
        </v-toolbar>

        <v-divider></v-divider>

        <v-card-text>
          <div class="py-5 text-center">
            <v-icon class="mb-6" color="red" icon="mdi-check-circle-outline" size="96" />

            <div class="mx-12 text-h6 font-weight-bold">
              {{ props.text }}
            </div>
          </div>

          <v-divider></v-divider>

          <div class="pa-4 text-end">
            <v-btn
              class="text-none mx-2"
              color="medium-emphasis"
              min-width="80"
              rounded
              variant="outlined"
              @click.stop="closeDialog(false)"
            >
              <div class="text-h6 font-weight-bold">닫기</div>
            </v-btn>
          </div>
        </v-card-text>
      </v-card>
    </div>
  </div>
</template>

<style scoped>
.dialog {
  z-index: 99999;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
}

.center {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
