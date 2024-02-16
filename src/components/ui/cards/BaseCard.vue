<script setup>
const props = defineProps({
  cardTitle: {
    type: String,
    default: null
  },
  icon: {
    type: String,
    default: null
  },
  noPadding: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <v-card class="card" elevation="8">
    <div v-show="props.cardTitle" class="card-header">
      <i class="tio- text-18">{{ props.icon }}</i>
      <div class="card-title">{{ props.cardTitle }}</div>
    </div>
    <slot />
  </v-card>
</template>

<style lang="scss" scoped>
.card {
  box-shadow: 0px 12px 50px 2px rgba(19, 80, 124, 0.14);
  border-radius: 8px;
  background-color: #fff;
  padding: 1.25rem;
  // height: 100%;
  overflow: hidden;
}
.card-header {
  display: flex;
  align-items: center;
  border-bottom: 1px solid #dbe9f2;
  padding: 1.25rem;
  .card-title {
    color: #131e3e;
    font-size: 14px;
    font-weight: 600;
  }
}
</style>
