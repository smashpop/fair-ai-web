<script setup>
// Components
import SelectEnforceDate from '@/views/privacyPolicy/components/SelectEnforceDate'

// Utilities
import { ref } from 'vue'
import { usePrivacyPolicys } from '@/stores/privacyPolicy'

const privacyPolicys = usePrivacyPolicys()
const selectItem = ref(privacyPolicys.list[0])

function setPrivacyPolicy(item) {
  console.log('sel item=', item)
  // selectItem.value = value
}
</script>

<template>
  <BaseCard>
    <v-row >
      <v-col cols="10">
        <strong class="pa-0 mb-4 text-h6 font-weight-bold"> 개인정보처리방침 </strong>
      </v-col>

      <v-col cols="2">
        <div class="d-flex flex-wrap mt-4 justify-end">

        <SelectEnforceDate
          v-model="selectItem"
          :items="privacyPolicys.list"
          class="ms-2 select"
          @update:model-value="setPrivacyPolicy"
        />
      </div>

      </v-col>
    </v-row>

    <div class="py-1" />

    <v-sheet class="pa-2" color="grey-lighten-4" border rounded min-height="700">
      <span
        class="text-body-2"
        style="white-space: pre-line"
        v-text="selectItem ? selectItem.terms : null"
      />
    </v-sheet>
  </BaseCard>
</template>

<style lang="scss" scoped></style>
