<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function onClickImage() {
  router.push('/home')
}
</script>

<template>
  <div class="ml-5" style="width: 137px; height: 40px">
    <!-- 로고 -->
    <v-img
      src="@/assets/images/BI_logo.svg"
      class="cursor-pointer"
      height="40"
      alt="Logo"
      @click="onClickImage"
    />
  </div>
</template>
