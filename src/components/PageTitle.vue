<script setup>
const props = defineProps({
  title: {
    type: String,
    default: 'Button',
    required: true
  },
  icon: {
    type: String,
    default: null
  }
})
</script>

<template>
  <v-row dense>
    <div class="d-flex align-center">
      <div class="px-3 py-2 rounded">
        <i class="tio- text-primary text-24">{{ props.icon }}</i>
      </div>
      <div class="text-h5 font-weight-regular">{{ props.title }}</div>
    </div>
  </v-row>
</template>

<style scoped></style>
