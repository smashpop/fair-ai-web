<script setup>
// Components
import Header from './Header'
import MainView from './MainView'
import Footer from './Footer'

// Utilities
</script>

<template>
  <v-app class="bg_image">
    <Header />
    <MainView />
    <Footer />
  </v-app>
</template>

<style lang="scss" scoped>
.bg_image {
  background: url('../../assets/images/GettyImages.png');
  background-repeat: no-repeat;
  background-color: linear-gradient(180deg, #F0F3F7 0%, rgba(255, 255, 255, 0.00) 100%);
}
</style>
