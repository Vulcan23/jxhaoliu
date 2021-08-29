<template>
  <div>
    <div class="main">
      <div v-for="item in list" :key="item" :data-year="item"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: ["2019", "2020", "2021", "2022"],
    };
  },
};
</script>

<style lang="scss" scoped>
.main {
  background-color: #000;
  width: 60rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;

  div {
    background-color: #fff;
    color: #000;
    width: 15%;
    padding-bottom: 15%;
    border-radius: 50%;
    position: relative;

    &::before {
      content: attr(data-year);
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    &::after {
      content: "";
      position: absolute;
      left: 100%;
      top: 50%;
      height: 1px;
      width: 66.6666%;
      background-color: #fff;
    }

    &:last-of-type::after {
      display: none;
    }
  }
}
</style>
