<script setup>
import './styles/overrides.scss'

// Utilities
import { usePrivacyPolicys } from '@/stores/privacyPolicy'

const privacyPolicys = usePrivacyPolicys()

privacyPolicys.loadPrivacyPolicys()
</script>

<template>
  <router-view />
</template>

<style lang="scss" scoped></style>
