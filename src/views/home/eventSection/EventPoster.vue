<script setup></script>

<template>
  <v-container fluid class="pa-0">
    <v-row no-gutters>
      <v-col style="width: 460px; flex: 0 0 auto; border-bottom: 1px solid rgba( 255,255,255,0.2);">
        <p class="text-white text-48 font-weight-bold line-height-normal">행사 안내</p>
        <p class="text-white text-body-1 font-weight-medium line-height-normal mt-5 d-flex align-center">
          <span class="text-34 font-weight-semi-bold" style="text-decoration: underline;">3</span> 
          <span class="ml-1">개의<br>중요 행사 안내</span>
        </p>
      </v-col>

      <v-col style="width: 900px; flex: 0 0 auto; border-bottom: 1px solid rgba( 255,255,255,0.2);">
        <v-carousel height="380">
          <v-carousel-item
            src="@/assets/images/poster.png"
            cover
          ></v-carousel-item>

          <v-carousel-item
            src="@/assets/images/poster.png"
            cover
          ></v-carousel-item>

          <v-carousel-item
            src="@/assets/images/poster.png"
            cover
          ></v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>
  </v-container> 
</template>
