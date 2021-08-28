<template>
  <div class="brand-case">
    <section class="top">
      <img v-lazy="require('~/assets/brandcase_background.jpg')" />
      <div>
        <h1>看得见的有效案例</h1>
        <p>
          组合投放优化推广，搞笑实现品牌区域化运营<br />
          创意文案+优惠领取，提高品牌曝光量
        </p>
      </div>
    </section>
    <section class="middle">
      <el-card v-for="item in brandCase" :key="item.path" shadow="hover">
        <a href="http://baidu.com">
          <img v-lazy="require(`~/assets/case${item.path}.jpg`)" />
          <h2>{{ item.text.title }}</h2>
          <div>
            <div>
              <el-divider />
              <el-divider />
            </div>
            <i class="el-icon-arrow-right"></i>
            <i class="el-icon-arrow-right"></i>
          </div>
          <p>{{ item.text.content }}</p>
        </a>
      </el-card>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      brandCase: [
        {
          path: "1",
          text: {
            title: "现代汝窑",
            content:
              "江西好六策划组将从产品定位、命名、包装设计、宣传推广等方面为其量身定制品牌策略及传播计划。",
          },
        },
        {
          path: "2",
          text: {
            title: "电商枫叶",
            content: "实现线上下单，缩短潜在客户与实体的路径，实现业务的增长。",
          },
        },
        {
          path: "3",
          text: {
            title: "杏花醇酒",
            content:
              "杏花醇生产于2001，窖藏长达19年，秉承每一滴酒都是纯粮酿造的宗旨，推出珍藏级的精品，力争让更多人了解纯粮老酒的文化历史。",
          },
        },
        {
          path: "4",
          text: {
            title: "李渡酒",
            content:
              "国宝李渡酒新产品上市，前期需要测试产品的市场表现，第一阶段采用线上预销售的模式，配合一定程度上的宣传推广，以获取消费者对新品的反馈。",
          },
        },
      ],
    };
  },
};
</script>

<style lang="scss">
$brand-color: #52ba30;

.brand-case {
  color: #fff;

  h1 {
    text-align: center;
  }

  img {
    width: 100%;
  }

  .top {
    position: relative;

    div {
      position: absolute;
      top: 17%;
      right: 5.2%;
    }
  }

  .middle {
    color: #000;
    width: 60rem;
    margin: (30rem/11) auto;
    display: grid;
    grid-template-columns: 1fr 28% 2fr 28% 2fr 28% 1fr;
    row-gap: 3rem;
    font-size: 1rem;

    h2 {
      font-size: (14em/11);
      margin-bottom: 0;

      @media (max-width: 575px) {
        font-size: 14px;
      }
    }

    .el-divider {
      margin: 1px 0;
      background-color: #000;
    }

    i:first-of-type {
      transform: translateX(-.25em);
    }

    i:last-of-type {
      transform: translateX(-1em);
    }

    p {
      font-size: (9em/11);
      margin: 0;
    }

    .el-card {
      border: none;

      > div {
        padding: 0;

        > a {
          text-decoration: none;
          color: #000;

          > div {
            display: flex;
            align-items: center;
            margin: 2px 0;

            > div {
              width: (62em/11);
            }
          }
        }
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
    }

    @media (max-width: 767px) {
      grid-template-columns: 1fr 42% 2fr 42% 1fr;
      font-size: (3rem/2);

      .el-card {
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
