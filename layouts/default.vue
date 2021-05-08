<template>
  <el-container>
    <el-header>
      <div>
        <router-link to="/">
          <img v-lazy="require('~/assets/logo.png')" />
        </router-link>
        <el-menu
          mode="horizontal"
          text-color="#000"
          active-text-color="#52ba30"
          :default-active="$route.path"
        >
          <el-menu-item
            v-for="item in routerData"
            :key="item.name"
            :index="item.path"
            @click="handleCommand(item.path)"
            >{{ item.name }}</el-menu-item
          >
        </el-menu>
        <el-dropdown
          trigger="click"
          @command="handleCommand"
          @visible-change="(visible) => (linkActivated = visible)"
        >
          <div
            class="el-dropdown-link"
            :class="{ 'link-activated': linkActivated }"
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item
              v-for="item in routerData"
              :key="item.path"
              :command="item.path"
              >{{ item.name }}</el-dropdown-item
            >
          </el-dropdown-menu>
        </el-dropdown>
      </div>
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
export default {
  data() {
    return {
      routerData: [
        {
          name: "首页",
          path: "/",
        },
        {
          name: "广告投放",
          path: "/wechatad",
        },
        {
          name: "品牌案例",
          path: "/brandcase",
        },
        {
          name: "公司介绍",
          path: "/companyprofile",
        },
        {
          name: "联系我们",
          path: "/contactus",
        },
      ],
      linkActivated: false,
    };
  },
  beforeMount() {
    let path = this.$route.path;
    for (let i of this.routerData) {
      if (i.path === path) {
        document.title = i.name + " | 好六网络";
        break;
      }
    }
  },
  methods: {
    handleCommand(command) {
      let path = this.$route.path;
      if (path !== command) {
        this.$router.push(command);
        for (let i of this.routerData) {
          if (i.path === command) {
            document.title = i.name + " | 好六网络";
            break;
          }
        }
      }
    },
  },
};
</script>

<style lang="scss">
$brand-color: #52ba30;

html {
  overflow: hidden auto;
  font-size: 6px;

  @media (min-width: 576px) {
    font-size: 9px;
  }

  @media (min-width: 768px) {
    font-size: 12px;
  }

  @media (min-width: 992px) {
    font-size: 16px;
  }

  @media (min-width: 1200px) {
    font-size: 19px;
  }

  @media (min-width: 1400px) {
    font-size: 22px;
  }
}

body {
  margin: 0;
}

html,
body {
  height: 100%;
}

.el-container {
  min-height: 100%;
}

img {
  display: block;
}

h1,
h2,
h3,
p {
  font-weight: normal;
}

h1 {
  font-size: (30rem/11);
}

p {
  font-size: (16rem/11);
}

.el-header {
  padding: 0 !important;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);

  @media (max-width: 767px) {
    &,
    img {
      height: 40px !important;
    }
  }

  > div {
    height: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 60rem;

    @media (min-width: 992px) {
      > :last-child {
        display: none;
      }

      @at-root {
        .el-dropdown-menu {
          display: none;
        }
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

    .el-dropdown-link {
      padding: 2px 5px;

      &.link-activated {
        background-color: rgba(0, 0, 0, 0.06);
      }

      &:focus {
        outline: none;
      }

      span {
        display: block;
        background-color: #2c2c2c;
        width: 28px;
        height: 3px;
        margin: 4px 0;
      }

      &:hover {
        cursor: pointer;
      }
    }
  }

  @media (max-width: 575px) {
    & {
      padding: 0 15px !important;
    }

    > div {
      width: 100%;
    }
  }
}

.el-main {
  padding: 0 !important;
  overflow: hidden;
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
        color: white;
      }
    }

    > div {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;

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
        color: white;
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