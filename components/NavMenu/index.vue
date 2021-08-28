<template>
  <el-menu
    :mode="mode"
    text-color="#000"
    active-text-color="#52ba30"
    :default-active="$route.path"
    router
  >
    <el-menu-item
      v-for="item in routerData"
      :key="item.name"
      :index="item.path"
      >{{ item.name }}</el-menu-item
    >
  </el-menu>
</template>

<script>
export default {
  props: {
    routerData: {
      type: Array,
      required: true,
    },
    mode: {
      type: String,
      default: "vertical",
    },
  },
};
</script>
