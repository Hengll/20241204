<template>
  <v-container>
    <v-row justify="center" class="text-center">
      <v-col cols="12">
        <h1 class="text-center border">首頁</h1>
      </v-col>
      <v-col cols="12">
        <p>{{ store.number }}</p>
        <p>{{ store.square }}</p>
        <v-btn @click="store.plus">+</v-btn>
        <v-btn @click="store.mines">-</v-btn>
        <br />
        <v-btn @click="store.number++">++</v-btn>
        <v-btn @click="store.number--">--</v-btn>
        <br />
        <v-btn @click="console.log(store)">console</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { useAppStore } from '@/stores/app'

const store = useAppStore()
</script>
