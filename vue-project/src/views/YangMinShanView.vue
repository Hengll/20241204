<template>
  <h1>陽明山</h1>
  <ul>
    <li>{{ route.name }}</li>
    <li>{{ route.path }}</li>
    <li>{{ route.meta.title }}</li>
  </ul>
  <input type="button" value="顯示" @click="showInfo" />
</template>

<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()
const showInfo = () => {
  console.log(route)
}
</script>

<!-- <script>
export default {
  methods: {
    showInfo() {
      console.log(this.$route)
    },
  },
}
</script> -->
