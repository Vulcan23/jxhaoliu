<template>
  <div class="action-options">
    <el-select v-model="selectValue">
      <el-option
        v-for="item in selectArr"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </el-select>
    <el-table :data="data" border>
      <el-table-column prop="grade" label="等级" width="50" align="center" />
      <el-table-column
        v-if="!selectValue"
        key="0"
        prop="thresholdInterval"
        label="阈值/°"
        align="center"
      />
      <el-table-column v-else key="1" label="阈值/°" align="center">
        <template slot-scope="{ $index }">
          <div>{{ $index + 1 }}</div>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectValue: 0,
      selectArr: [
        {
          label: "国家分级标准",
          value: 0,
        },
        {
          label: "自定义分级标准",
          value: 1,
        },
      ],
      data: [
        {
          grade: 1,
          thresholdInterval: "25 ~ 90",
        },
        {
          grade: 2,
          thresholdInterval: "15 ~ 25",
        },
        {
          grade: 3,
          thresholdInterval: "8 ~ 15",
        },
        {
          grade: 4,
          thresholdInterval: "3 ~ 8",
        },
        {
          grade: 5,
          thresholdInterval: "0 ~ 3",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.action-options {
  width: 300px;
}
</style>