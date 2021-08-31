<template>
  <div>
    <el-button @click="getTime">AJAX</el-button>
    <div>{{ time }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      time: "",
    };
  },
  created() {
    this.time = this.$route.path;
  },
  methods: {
    async getTime() {
      const res = await this.$axios.get(
        "/api/rest/api3.do?api=mtop.common.getTimestamp"
      );
      this.time = JSON.stringify(res);
    },
  },
};
</script>

<style lang="scss" scoped>
* {
  color: #000;
}
</style>
