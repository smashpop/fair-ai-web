<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function onClickImage() {
  router.push('/home')
}
</script>

<template>
  <div class="pt-1" style="width: 260px; height: 48px">
    <!-- 로고 -->
    <v-img
      src="@/assets/images/BI_new.svg"
      class="cursor-pointer"
      height="40"
      alt="Logo"
      @click="onClickImage"
    />
  </div>
</template>
