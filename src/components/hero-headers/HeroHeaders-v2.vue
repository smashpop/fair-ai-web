<template>
  <v-card
    theme="dark"
    color="#0d2141"
  >
    <v-layout class="fill-height">
      <v-app-bar
        color="transparent"
        flat
        height="48"
      >
        
        <template #append>
          <div v-if="mdAndUp">
            <v-btn text="Home" />
            <v-btn text="About us" />
            <v-btn text="Portfolio" />
            <v-btn text="Services" />
            <v-btn text="Contact" />
          </div>
        </template>
      </v-app-bar>

      <v-main>
       
      </v-main>
    </v-layout>
  </v-card>
</template>

<script setup>
import { useDisplay } from 'vuetify'

const { mdAndUp } = useDisplay()
</script>
