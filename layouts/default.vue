<template>
  <el-container>
    <el-header>
      <div>
        <NuxtLink to="/">
          <img v-lazy="require('~/assets/logo.png')" />
        </NuxtLink>
        <nav-menu :router-data="routerData" mode="horizontal" />
        <el-button
          type="text"
          @click="(visible) => (linkActivated = !linkActivated)"
          @mouseup.native.stop
          :class="{ 'link-activated': linkActivated }"
        >
          <div></div>
          <div></div>
          <div></div>
        </el-button>
      </div>
      <transition name="move">
        <div v-show="linkActivated">
          <nav-menu :router-data="routerData" />
        </div>
      </transition>
    </el-header>
    <el-main>
      <Nuxt />
    </el-main>
    <el-footer>
      <div>
        <div>
          <img v-lazy="require('~/assets/QR_code.jpg')" />
          <div>
            <h1>联系我们</h1>
            <p>江西好六网络科技有限公司</p>
            <p>地 址：江西省南昌市青山湖区上海路699文化创意园B1栋</p>
            <p>电 话：189-4234-7263</p>
          </div>
          <div>
            <h1>服务时间</h1>
            <p>星期一至星期五</p>
            <p>09:00--12:00</p>
            <p>13:30--18:00</p>
            <p>欢迎咨询</p>
          </div>
          <div>
            <h1>江西好六网络科技有限公司</h1>
            <p>邮编：330029</p>
            <p>网 址：jxhaoliu.com</p>
            <p>全国服务热线：189-4234-7263</p>
          </div>
        </div>
        <el-divider />
        <a href="http://beian.miit.gov.cn">
          Copyright © 2021 www.jxhaoliu.com 江西好六网络科技有限公司版权所有
          赣ICP备17007793号-3
        </a>
      </div>
    </el-footer>
  </el-container>
</template>

<script>
import { routerData } from "~/plugins/route";
import NavMenu from "~/components/NavMenu";
export default {
  components: {
    NavMenu,
  },
  data() {
    return {
      routerData,
      linkActivated: false,
    };
  },
  beforeMount() {
    window.addEventListener("mouseup", this.putAway);
  },
  methods: {
    handleCommand(command) {
      this.$route.path !== command && this.$router.push(command);
    },
    putAway() {
      this.linkActivated = false;
    },
  },
  beforeDestroy() {
    window.removeEventListener("mouseup", this.putAway);
  },
};
</script>

<style lang="scss">
@import "swiper/swiper-bundle";
@import "~/assets/css/index";
@import "~/assets/css/move";

.el-header {
  padding: 0 !important;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  z-index: 2;
  position: relative;

  @media (max-width: 767px) {
    &,
    img {
      height: 40px !important;
    }
  }

  > :first-child {
    height: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 60rem;
    background-color: #fff;

    @media (min-width: 992px) {
      .el-button {
        display: none;
      }
    }

    @media (max-width: 991px) {
      .el-menu {
        display: none;
      }
    }

    img {
      height: 60px;
    }

    .el-button {
      padding: 2px 5px;

      &.link-activated {
        background-color: rgba(0, 0, 0, 0.06);
      }

      &:hover {
        cursor: pointer;
        background-color: rgba(0, 0, 0, 0.06);
      }

      div {
        background-color: #2c2c2c;
        width: 28px;
        height: 3px;
        margin: 4px 0;
      }
    }
  }

  > :last-child {
    position: absolute;
    width: 100%;
    background-color: #fff;
    box-sizing: border-box;
    transform-origin: top;

    .el-menu {
      width: 60rem;
      margin: 0 auto;
      border: none;
      border-top: 1px rgba(0, 0, 0, 0.06) solid;
    }

    @media (min-width: 992px) {
      & {
        display: none;
      }
    }

    @media (max-width: 767px) {
      & {
        top: 40px;
      }
    }

    @media (max-width: 575px) {
      & {
        left: 0;
        padding: 0 15px;
      }

      .el-menu {
        width: 100%;
      }
    }
  }

  @media (max-width: 575px) {
    & {
      padding: 0 15px !important;
    }

    > :first-child {
      width: 100%;
    }
  }
}

.el-main {
  padding: 0 !important;
  overflow: hidden !important;
}

.el-footer {
  height: auto !important;
  background-color: #1f2229;
  padding: 60px 0 30px 0 !important;
  color: rgba(255, 255, 255, 0.3);
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);

  > div {
    margin: 0 auto;
    font-size: 13px;
    width: 60rem;

    @media (max-width: 575px) {
      width: 100%;
    }

    h1 {
      color: rgba(255, 255, 255, 0.6);
      margin: 0;
      font-size: 16px;
    }

    p {
      font-size: 1em;
      margin: 0.5em 0;
      transition: color 0.25s ease-out;

      &:hover {
        color: #fff;
      }
    }

    > div {
      display: flex;
      justify-content: space-between;

      /* img {
        width: 150px;
        height: 150px;
        object-fit: cover;
      } */
    }

    .el-divider {
      background-color: rgba(255, 255, 255, 0.05);
    }

    a {
      display: block;
      text-align: center;
      text-decoration: none;
      color: rgba(255, 255, 255, 0.3);
      transition: color 0.25s ease-out;

      &:hover {
        color: #fff;
      }
    }
  }

  @media (max-width: 991px) {
    padding-top: 30px;

    > div > div {
      flex-direction: column;
      align-items: center;

      > div {
        text-align: center;
      }
    }
  }
}
</style>
