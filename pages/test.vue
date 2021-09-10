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
    <!-- v-if改成v-show来判断就没有bug -->
    <div v-if="!selectValue">
      <el-table :data="data0" border>
        <el-table-column prop="grade" label="等级" width="50" align="center" />
        <el-table-column
          prop="thresholdInterval"
          label="阈值/°"
          align="center"
        />
      </el-table>
    </div>
    <div v-else-if="selectValue">
      <el-table :data="data1" border>
        <el-table-column prop="grade" label="等级" width="50" align="center" />
        <el-table-column label="阈值/°" align="center">
          <template slot-scope="{ $index }">
            <div>{{ $index + 1 }}</div>
          </template>
        </el-table-column>
      </el-table>
    </div>
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
      data0: [
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
      data1: [
        {
          grade: 1,
        },
        {
          grade: 2,
        },
        {
          grade: 3,
        },
        {
          grade: 4,
        },
        {
          grade: 5,
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