<template>
  <img v-lazy="require('~/assets/background_top.jpg')" />
</template>

<script>
export default {
  beforeMount() {
    document.querySelector(".el-container").style.height = "100%";
  },
  beforeDestroy() {
    document.querySelector(".el-container").style.height = "auto";
  },
};
</script>

<style lang="scss" scoped>
img {
  height: 100%;
  width: 100%;
  object-fit: fill;
}
</style>
