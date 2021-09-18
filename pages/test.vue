<template>
  <div class="wrap">
    <div style="line-height: 30px">面包屑</div>
    <div class="main-wrap">
      <el-scrollbar>
        <div class="aside">
          <p>{{ "我是文字".repeat(199) }}</p>
        </div>
      </el-scrollbar>
      <div class="scrollx">
        <span>{{ "我是scrollx的文字".repeat(199) }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.wrap {
  position: fixed;
  top: 60px;
  width: 100%;
  height: calc(100vh - 60px);
  background-color: #fff;
  display: flex;
  flex-direction: column;
}

.main-wrap {
  flex: 1;
  display: flex;
  height: calc(100% - 30px);
}

.el-scrollbar {
  min-width: 200px;
  background-color: cornflowerblue;

  ::v-deep .el-scrollbar__wrap {
    overflow-x: hidden;
  }
}

.aside {
  width: 200px;
  background-color: darkblue;
}

.scrollx {
  flex: 1;
  overflow-x: auto;

  span {
    white-space: nowrap;
  }
}
</style>
