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
    style="width: 660px; height: 68px; padding: 3px"
    @click.stop="clickProc()"
  >
    <div class="bg-white rounded-pill" style="width: 654px; height: 62px; padding: 6px">
      <div class="bg-black rounded-pill pa-3" style="width: 110px; height: 50px; padding: 4px; margin-left: 530px">
        <strong class="text-18 text-white font-weight-regular ml-6">검색</strong>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
