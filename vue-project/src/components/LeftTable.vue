<template>
  <!-- <RouterLink to="/yangminshan">yangminshan</RouterLink> -->
  <!-- <RouterLink to="{ name: 'home' }">home</RouterLink> -->
  <div id="menu">
    <table>
      <template v-for="(link, i) in links" :key="i">
        <tr>
          <td>
            <RouterLink :to="link.to">
              <img :src="link.image" />
            </RouterLink>
          </td>
        </tr>
        <tr>
          <td class="a">&nbsp;</td>
        </tr>
      </template>
    </table>
  </div>
</template>

<script setup>
const links = [
  { to: '/yangminshan', image: new URL('@/assets/park0302.jpg', import.meta.url).href },
  { to: '/', image: new URL('@/assets/park0303.jpg', import.meta.url).href },
  { to: '/', image: new URL('@/assets/park0304.jpg', import.meta.url).href },
  { to: '/', image: new URL('@/assets/park0305.jpg', import.meta.url).href },
]
</script>

<style scoped lang="scss">
#menu {
  width: 100%;
  height: 40px;
  text-align: center;

  table {
    margin: auto;
  }

  img {
    width: 120px;
    height: 40px;

    &:hover {
      filter: hue-rotate(120deg);
    }
  }
}
</style>
