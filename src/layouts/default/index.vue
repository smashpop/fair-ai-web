<script setup>
// Components
import Header from './Header'
import MainView from './MainView'
import Footer from './Footer'

// Utilities
</script>

<template>
  <v-app >
    <div class="bg_image">
      <Header />

      <MainView />

      <Footer />
    </div>

  </v-app>
</template>

<style lang="scss" scoped>
.bg_image {
  background: url('../../assets/GettyImages.png');
  background-size: cover;
  height: 100vh;
}
</style>

