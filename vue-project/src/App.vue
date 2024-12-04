<template>
  <TopImg></TopImg>
  <div id="left">
    <LeftTable></LeftTable>
  </div>
  <div id="right">
    <RightMarquee></RightMarquee>
    <div id="view">
      <RouterView></RouterView>
    </div>
  </div>
  <BottomFooter></BottomFooter>
</template>

<style lang="scss">
#app {
  width: 1024px;
  height: 768px;
  margin: auto;
}

#left {
  width: 200px;
  height: calc(768px - 65px - 20px);
  margin-left: 12px;
  float: left;
  background: #00ffff;
}

#right {
  width: 800px;
  height: calc(768px - 65px - 20px);
  margin-right: 12px;
  float: right;

  #view {
    width: 800px;
    height: calc(768px - 65px - 20px - 29px);
  }
}
</style>

<script setup>
import TopImg from '@/components/TopImg.vue'
import LeftTable from '@/components/LeftTable.vue'
import RightMarquee from '@/components/RightMarquee.vue'
import BottomFooter from '@/components/BottomFooter.vue'
</script>
