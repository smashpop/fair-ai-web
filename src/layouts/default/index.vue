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
  background-size: cover;
  background-color: #1efefe;
  height: 100vh;
}
</style>
