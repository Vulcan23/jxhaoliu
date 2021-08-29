<template>
  <div>
    <swiper :options="swiperOptions" :height="carouselHeight">
      <swiper-slide v-for="path in 3" :key="path">
        <img
          :src="require(`~/assets/carousel${path}.jpg`)"
          @load="initCarouselHeight"
        />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <section class="top">
      <div>
        <h1>我们能为你做些什么</h1>
        <p>
          专注于平台建设、移动营销推广、品牌活动策划领域，是一家集设计、开发、运营于一体的综合性互联网服务公司；公司提供最具实效的网销服务和战略指导、最全面可靠的平台搭建及运营咨询。
        </p>
        <el-row
          v-for="item in introduceBusiness"
          :key="item.path"
          type="flex"
          justify="space-between"
          align="middle"
        >
          <el-col :span="11" :offset="1" :pull="item.path === '2' ? 1 : 0">
            <h2>{{ item.text.title }}</h2>
            <p>{{ item.text.content }}</p>
          </el-col>
          <el-col
            :span="12"
            tag="img"
            v-lazy="require(`~/assets/introduce_business${item.path}.jpg`)"
          />
        </el-row>
      </div>
    </section>
    <section class="middle">
      <h1>品牌案例</h1>
      <div>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div>
        <el-card v-for="path in 4" :key="path" shadow="hover">
          <a href="http://baidu.com">
            <img v-lazy="require(`~/assets/case${path}.jpg`)" />
          </a>
        </el-card>
      </div>
    </section>
    <section class="bottom">
      <img v-lazy="require('~/assets/background_bottom.jpg')" />
      <p>“诚信、分享、共赢、创新”为价值观</p>
    </section>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";

function throttle(callback, delay = 600) {
  let last = 0;
  let timer = null;
  return () => {
    clearTimeout(timer);
    let now = Date.now();
    if (now - last >= delay) {
      callback();
      last = now;
    } else {
      timer = setTimeout(callback, delay);
    }
  };
}

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      carouselHeight: "0",
      swiperOptions: {
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        on: {
          paginationRender: (swiper, paginationEl) => {
            let children = paginationEl.children;
            for (let element of children) {
              element.addEventListener("mouseover", (event) => {
                event.target.click();
              });
            }
          },
        },
      },
      introduceBusiness: [
        {
          path: "1",
          text: {
            title: "平台合作",
            content: "最全面可靠的平台搭建技术。",
          },
        },
        {
          path: "2",
          text: {
            title: "网络服务+战略指导",
            content: "助力传统企业完成互联网转型、扩大品牌影响力。",
          },
        },
        {
          path: "3",
          text: {
            title: "精准广告投放",
            content:
              "为腾讯、头条、抖音、快手等多家电商企业、运营商、品牌客户提供精准广告投放服务。",
          },
        },
      ],
    };
  },
  methods: {
    initCarouselHeight() {
      this.carouselHeight = "auto";
    },
  },
};
</script>

<style lang="scss" scoped>
$brand-color: #52ba30;

img {
  width: 100%;
}

::v-deep .swiper-container {
  .swiper-pagination-bullet {
    border-radius: 0;
    width: 3rem;
    height: 8px;

    &.swiper-pagination-bullet-active {
      background-color: $brand-color;
    }

    @media (max-width: 767px) {
      border-radius: 50%;
      width: (8rem/9);
      height: (8rem/9);
    }
  }
}

.top {
  padding: (30rem/11) 0;
  background: url("~/assets/background_top.jpg") left/cover;

  > div {
    margin: 0 auto;
    width: 60rem;

    h1 {
      text-align: center;
      margin-top: 0;
    }

    h2 {
      font-size: (30rem/11);
    }

    > p {
      font-size: (17rem/11);
      text-indent: 2em;
    }

    .el-row {
      margin-top: 7%;
      color: #000;

      img {
        width: 35%;
      }

      &:hover {
        color: #fff;
        background-color: rgba(0, 0, 0, 0.46);
      }
    }

    .el-row:nth-of-type(2) {
      img {
        order: -1;
      }
    }
  }

  @media (max-width: 575px) {
    padding: 2.7272727273rem 15px;

    > div {
      width: 100%;
    }
  }
}

.middle {
  margin: 4.54545% auto;
  width: 60rem;
  color: #000;

  @media (max-width: 575px) {
    width: 100%;

    & > div:nth-of-type(2) {
      margin: 0 15px;
    }
  }

  h1 {
    text-align: center;
    margin-bottom: 0;
  }

  & > div:first-of-type {
    text-align: center;
    font-size: 16px;
    margin-bottom: 4.54545%;
  }

  span {
    display: inline-block;
    border-radius: 50%;
    margin: 0 4px;
    width: (7rem/11);
    height: (7rem/11);

    &:nth-of-type(1) {
      background-color: #50c3ff;
    }

    &:nth-of-type(2) {
      background-color: #0ba5f5;
    }

    &:nth-of-type(3) {
      background-color: #1597db;
    }
  }

  & > div:nth-of-type(2) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: (20rem/11) (40rem/11);

    ::v-deep .el-card__body {
      padding: 0;
    }
  }
}

.bottom {
  position: relative;

  p {
    position: absolute;
    left: (35rem/19);
    bottom: (35rem/19);
    margin: 0;
    font-size: (24rem/11);
  }
}
</style>
