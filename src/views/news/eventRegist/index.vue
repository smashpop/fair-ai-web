<script setup></script>

<template>
  <v-container class="fill-height">
    <v-responsive class="align-center text-center fill-height">
      <strong class="text-h4 font-weight-bold">행사등록</strong>

      <v-row class="d-flex align-center justify-center">
        <v-col cols="auto">
          <v-btn href="/news/notice" min-width="164" rel="noopener noreferrer" variant="text">
            <v-icon icon="mdi-view-dashboard" size="large" start />
            공지사항
          </v-btn>
        </v-col>

        <v-col cols="auto">
          <v-btn href="/news/event" min-width="164" rel="noopener noreferrer" variant="text">
            <v-icon icon="mdi-account-group" size="large" start />
            관련행사
          </v-btn>
        </v-col>

        <v-col cols="auto">
          <v-btn
            href="/news/eventCalendar"
            min-width="164"
            rel="noopener noreferrer"
            variant="text"
          >
            <v-icon icon="mdi-account-group" size="large" start />
            행사캘린더
          </v-btn>
        </v-col>

        <v-col cols="auto">
          <v-btn href="/news/event-regist" min-width="164" rel="noopener noreferrer" variant="text">
            <v-icon icon="mdi-account-group" size="large" start />
            행사신청
          </v-btn>
        </v-col>
      </v-row>
    </v-responsive>
  </v-container>
</template>
