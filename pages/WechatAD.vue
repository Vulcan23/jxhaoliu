<template>
  <div class="wechat-ad">
    <section class="top">
      <img v-lazy="require('~/assets/wechatad_background.jpg')" />
      <h1>更多平台选择</h1>
      <p>
        广告精准投放既包括微信、QQ等强势社交产品，也包括用户移动生活所须的各类应用，贯穿用户每日24小时真实生活。
      </p>
    </section>
    <section class="middle">
      <div
        v-for="item in iconWechat"
        :key="item.path"
        ref="iconWechat"
        :style="{
          height: iconWechatHeight,
          paddingBottom: iconWechatPaddingBottom,
        }"
      >
        <img
          v-lazy="require(`~/assets/icon_${item.path}.png`)"
          @load="synchronousHeight"
        />
        <h2>{{ item.text.title }}</h2>
        <p>{{ item.text.content }}</p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      iconWechat: [
        {
          path: "tencentad",
          text: {
            title: "腾讯应用广告投放",
            content:
              "汇集多样优质APP，覆盖海量移动端用户，基于腾讯联盟生态体系和广点通技术在腾讯联盟流量上展示的广告。",
          },
        },
        {
          path: "toutiao",
          text: {
            title: "头条应用广告投放",
            content:
              "以原生社交广告为主，帮助品牌有效拉动活动转化，建立品牌认知，和引爆年轻用户的社交效应。",
          },
        },
        {
          path: "tiktok",
          text: {
            title: "抖音应用广告投放",
            content:
              "以年轻化广告为主，帮助品牌有效拉动活动转化，建立品牌认知，和引爆年轻用户的购买欲望。",
          },
        },
        {
          path: "kuaishou",
          text: {
            title: "快手应用广告投放",
            content: "热门IP+优质内容，高效触达泛娱乐人群、消费中坚力量。",
          },
        },
        {
          path: "wechat",
          text: {
            title: "微信应用广告投放",
            content: "以类似朋友的原创内容形式在朋友圈中展示的原生广告。",
          },
        },
      ],
      iconWechatHeight: "auto",
      iconWechatPaddingBottom: "12.5%",
      b: true,
    };
  },
  methods: {
    synchronousHeight() {
      if (this.b) {
        this.b = false;
        this.iconWechatHeight =
          Math.max(...this.$refs.iconWechat.map((item) => item.clientHeight)) +
          "px";
        this.iconWechatPaddingBottom = "0";
      }
    },
    synchronousHeightResize() {
      this.iconWechatHeight = "auto";
      this.iconWechatPaddingBottom = "12.5%";
      this.$nextTick(() => {
        this.iconWechatHeight =
          Math.max(...this.$refs.iconWechat.map((item) => item.clientHeight)) +
          "px";
        this.iconWechatPaddingBottom = "0";
      });
    },
  },
  mounted() {
    window.addEventListener("resize", this.synchronousHeightResize);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.synchronousHeightResize);
  },
};
</script>

<style lang="scss">
$brand-color: #52ba30;

.wechat-ad {
  color: #fff;

  h1 {
    text-align: center;
  }

  img {
    width: 100%;
  }

  .top {
    position: relative;

    h1,
    p {
      position: absolute;
      right: 3%;
      width: (400rem/11);
      margin: 0;
    }

    h1 {
      bottom: 54%;
    }

    p {
      top: 64%;
      text-indent: 2em;
    }
  }

  .middle {
    color: #000;
    width: 60rem;
    margin: (30rem/11) auto;
    display: grid;
    grid-template-columns: 1fr 28% 2fr 28% 2fr 28% 1fr;
    row-gap: (15rem/11);
    font-size: 1rem;

    h2 {
      font-size: (38em/22);
    }

    p {
      font-size: 1em;
      margin: 0 .5em;
    }

    div {
      text-align: center;

      img {
        width: 50%;
        margin: 12.5% auto;
      }

      &:nth-of-type(3n + 1) {
        grid-column: 2 / 3;
      }

      &:nth-of-type(3n + 2) {
        grid-column: 4 / 5;
      }

      &:nth-of-type(3n + 3) {
        grid-column: 6 / 7;
      }

      &:hover {
        background-color: $brand-color;
        color: #fff;
      }
    }

    @media (max-width: 767px) {
      grid-template-columns: 1fr 42% 2fr 42% 1fr;
      font-size: (3rem/2);

      div {
        &:nth-of-type(2n + 1) {
          grid-column: 2 / 3;
        }

        &:nth-of-type(2n + 2) {
          grid-column: 4 / 5;
        }
      }
    }

    @media (max-width: 575px) {
      width: 100%;
      margin: 4.54545% auto;
    }
  }
}
</style>
