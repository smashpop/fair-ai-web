<script setup>
// Components
import SelectEnforceDate from '@/views/privacyPolicy/components/SelectEnforceDate'

// Utilities
import { ref } from 'vue'
import { usePrivacyPolicys } from '@/stores/privacyPolicy'

const privacyPolicys = usePrivacyPolicys()
const selectItem = ref(privacyPolicys.list[0])

function setPrivacyPolicy(value) {
  console.log('sel item=', value)
  selectItem.value = value
}
</script>

<template>
  <BaseCard>
    <div class="d-flex justify-space-between">
      <v-card-title class="pa-0 mb-4 text-h6 font-weight-bold"> 개인정보처리방침 </v-card-title>
    </div>

      <div class="d-flex flex-wrap justify-end" style="width: 250px">
        <SelectEnforceDate
          v-model="selectItem"
          :items="privacyPolicys.list"
          class="ms-2 select"
          @update:model-value="setPrivacyPolicy(value)"
        />
      </div>

      <div class="py-1" />

    <v-sheet class="pa-2" color="grey-lighten-4" border rounded min-height="300">
      <span
        class="text-body-2"
        style="white-space: pre-line"
        v-text="selectItem ? selectItem.terms : null"
      />
    </v-sheet>
  </BaseCard>
</template>

<style lang="scss" scoped></style>
