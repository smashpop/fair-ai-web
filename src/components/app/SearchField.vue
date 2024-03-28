<script setup>
// Utilities

const emit = defineEmits(['click'])

function clickProc() {
  console.log('Click()=')
  emit('click')
}
</script>

<template>
  <div
    class="bg-black rounded-pill cursor-pointer"
    style="width: 670px; height: 68px; padding: 3px; box-sizing: border-box;"
    @click.stop="clickProc()"
  >
    <div 
      class="bg-white rounded-pill d-flex align-center justify-end" 
      style="width: 100%; height: 100%; padding: 0 10px;"
      >
      <div
        class="bg-black rounded-pill"
        style="width: 102px; height: 50px; line-height: 50px; text-align: center;"
      >
        <p class="text-18 text-white font-weight-medium">검색</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
