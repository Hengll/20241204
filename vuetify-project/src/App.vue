<template>
  <v-app>
    <v-app-bar>
      <v-container class="d-flex align-center">
        <v-app-bar-title>VUETIFY</v-app-bar-title>
        <v-btn prepend-icon="mdi-home" to="/">首頁</v-btn>
        <v-btn prepend-icon="mdi-ab-testing" to="/test">其他頁</v-btn>
      </v-container>
    </v-app-bar>
    <v-main>
      <RouterView></RouterView>
    </v-main>
  </v-app>
</template>
