<template>
  <div class="company-profile">
    <section class="top">
      <img v-lazy="require('~/assets/companyprofile_background_top.jpg')" />
      <h1>诚信、分享、共赢、创新</h1>
      <p>提供优质解决方案，创造极致价值。</p>
    </section>
    <section class="about-us">
      <h2>关于我们</h2>
      <p class="gray-field">
        “诚信、分享、共赢、创新”为价值观。立足江西，发展全国，是每一个好六家人的心愿。
      </p>
      <div>
        <div>
          <h3>江西好六网络科技有限公司</h3>
          <el-divider />
          <p>
            是一家立足于新媒体头部流量整合，全面布局互联网广告营销生态企业。好六网络总部设立在江西省省会城市-南昌，并在广州、武汉、温州设有分公司。<br />
            2017年公司进入互联网广告分发行业，集聚了国内大量APP应用等优质头部流量，构建了强大的广告投放渠道，成为腾讯、头条、抖音、快手等知名互联网企业的核心流量供应商，并为腾讯、抖音、快手、抖音等在内的多家电商企业、运营商、品牌客户提供精准广告投放服务。<br />
            是中国优质的互联网广告投放服务提供商。
          </p>
        </div>
        <img
          v-lazy="require('~/assets/companyprofile_background_middle.jpg')"
        />
      </div>
    </section>
    <section class="history">
      <img v-lazy="require('~/assets/companyprofile_background_bottom.jpg')" />
      <div>
        <div>
          <h2>发展历程</h2>
          <p class="gray-field">
            好六网络总部设在江西省省会城市南昌，并在广州、武汉、温州设有分公司。
          </p>
          <div>
            <el-divider />
            <div
              class="history-item-circle"
              v-for="item in history"
              :key="item"
            >
              <p>{{ item }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="leader">
      <h2>团队管理</h2>
      <p class="gray-field">
        完整的链条部门体系，能够快速高效的为客户提供最优质的服务。
      </p>
      <el-popover
        v-for="item in leader"
        :key="item.path"
        placement="bottom"
        width="340"
        trigger="click"
      >
        <div>
          <h3>{{ item.name }}</h3>
          <p>{{ item.position }}</p>
          <p>{{ item.introduction }}</p>
        </div>
        <div slot="reference">
          <img v-lazy="require(`~/assets/${item.path}.png`)" />
          <p>{{ item.position }}</p>
          <div class="border-bottom"></div>
        </div>
      </el-popover>
    </section>
    <section class="sense-of-worth">
      <div>
        <h2>愿景及使命</h2>
        <div>
          <div class="sense-of-worth-center">
            <div v-for="item in senseOfWorth" :key="item.title">
              <h3>{{ item.title }}</h3>
              <p>{{ item.content }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      leader: [
        {
          path: "general_manager",
          position: "总经理",
          name: "朱健",
          introduction:
            "曾服务于腾讯、字节跳动等多家互联网巨头公司。非常专注于二类电商领域，业务经验丰富，人脉资源广泛。一年不到时间，现有全国渠道200家以上，精通新媒体流量变现玩法。一直以来秉承着一颗“感恩”的心，依托在北上广深的积累成功经验，2017年回归家乡再次创业，很好的复制在江西的老字号企业身上，公司在他的带领，特别在疫情如此艰难下，创造了骄人成绩。",
        },
        {
          path: "vice_general_manager",
          position: "副总经理",
          name: "严帅华",
          introduction:
            "从事互联网广告17年，渠道开发5年，15年销售管理经验，曾在上海、杭州等媒体公司管理200人以上的团队，本着对家乡的发展情怀回归江西，倡议江西以一县一品、一镇一特产的方式，多元化传播江西文化，以产品带入文化，以文化提升产品品牌，以产品做为媒介，多元化发展与传播江西特色文化。现整合江西全省渠道50家以上，精通互联网及传播特点，善于利用网络资源营销推广及运营策划。",
        },
        {
          path: "channel_director",
          position: "渠道总监",
          name: "宫建兵",
          introduction:
            "毕业后2013服务于阿里巴巴公司诚信通VIP客户3年，集销售于B端客户运营经验为一体，精通BtoB平台客户特性，平台特性，带领公司团队帮助300+线下实体公司完成线上转型。2018年入职江西好六，积极转型，擅长腾讯，今日头条，抖音等多平台玩法。目前在公司成立了一直优秀的媒介团队以及渠道团队，对公司渠道收量以及拓客起到了非常重要的作用。",
        },
        {
          path: "operations_director",
          position: "运营总监",
          name: "杨阳",
          introduction:
            "从事服务行业16年，中国移动通讯集团公司VIP客户部9年，7年互联网运营管理工作。精通互联网及传播特点，善于利用网络资源营销推广及运营策划。擅长数据分析，新媒体流量变现运营，个人运营账户日消耗五十万以上，特别在茶具文化类产品、服饰、生鲜等二类电商领域颇有经验。",
        },
      ],
      senseOfWorth: [
        {
          title: "正直",
          content: "坚守底线，以德为先，坦诚公正不唯上",
        },
        {
          title: "进取",
          content: "爱学习，懂分享，敢担当",
        },
        {
          title: "协作",
          content: "开放协同，持续进化",
        },
        {
          title: "创新",
          content: "超越创新，探索未来",
        },
      ],
      history: ["2017", "2019", "2021", "至今"],
    };
  },
};
</script>

<style lang="scss">
$brand-color: #469dff;

.el-popover {
  color: #fff;
  background-color: #153170;
  border: none;
  padding: 0;

  h3 {
    font-size: 34px;
    text-align: center;
    margin: 46px 0 0;
  }

  p:first-of-type {
    font-size: 22px;
    text-align: center;
    margin-top: 12px;
  }

  p:last-of-type {
    font-size: 14px;
    text-indent: 2em;
    margin: 42px 24px;
  }
}

.popper__arrow::after {
  border-top-color: #153170 !important;
  border-bottom-color: #153170 !important;
}

.company-profile {
  color: #fff;

  img {
    width: 100%;
  }

  h2 {
    font-size: (20rem/11);
    color: $brand-color;
    text-align: center;
    margin: 4.54545% 0 0 0;
  }

  @media (max-width: 575px) {
    h2 {
      font-size: 16px;
    }
  }

  .gray-field {
    color: #838383;
    text-align: center;
    font-size: (12rem/11);
    margin: 1.21212% 15px 4.54545% 15px;
  }

  .top {
    position: relative;

    h1,
    p {
      position: absolute;
      left: 12.4%;
    }

    h1 {
      top: 26%;
    }

    p {
      top: 45%;
    }
  }

  .about-us {
    color: #838383;
    width: 60rem;
    margin: 0 auto;

    h3 {
      font-size: (16rem/11);
      color: rgba(46, 46, 46, .82);
      margin: 0;
      letter-spacing: .18em;
    }

    .el-divider {
      margin-top: 1.595%;
      margin-bottom: 6.38%;
      background-color: $brand-color;
    }

    > div {
      margin-top: 4.84848%;
      margin-bottom: 4.54545%;
      column-count: 2;
      column-gap: 3em;

      p {
        text-align: justify;
        line-height: 1.4;
        letter-spacing: .18em;
        font-size: (12rem/11);
      }
    }

    @media (max-width: 575px) {
      width: 100%;

      h3 {
        font-size: 14px;
      }

      > div {
        margin-left: 15px;
        margin-right: 15px;
      }
    }
  }

  .history {
    position: relative;

    h2 {
      margin: 0;
    }

    > div {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      display: grid;
      grid-template-rows: 13fr auto 17fr;

      > div {
        grid-row: 2 / 3;
        width: 60rem;
        margin: 0 auto;
        text-align: center;

        .gray-field {
          color: #fff;
        }

        > div {
          position: relative;
        }

        @media (max-width: 575px) {
          width: 100%;
        }
      }
    }

    .el-divider {
      position: absolute;
      top: 0;
      left: 15%;
      margin-top: 4.15151%;
      width: 70%;
    }

    .history-item-circle {
      color: #000;
      background-color: #fff;
      width: 8.0303%;
      padding-top: 8.0303%;
      display: inline-block;
      position: relative;
      border-radius: 50%;
      margin-right: 15.909%;

      &:last-of-type {
        margin-right: 0;
      }

      > p {
        font-size: (29rem/22);
        margin: 0;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        white-space: nowrap;
      }
    }
  }

  .leader {
    color: #000;
    width: 60rem;
    margin: 0 auto;
    text-align: center;

    @media (max-width: 575px) {
      width: 100%;
    }

    img {
      width: 70%;
      margin: 13.3333% auto;
    }

    .border-bottom {
      padding: 1% 0;
    }

    .el-popover__reference-wrapper {
      > div {
        display: inline-block;
        width: 22.7272%;
        margin-bottom: 4.54545%;

        p {
          font-size: (13rem/11);
          margin-bottom: 13.3333%;
        }

        &:hover {
          background-color: #fafafa;
          cursor: pointer;

          .border-bottom {
            background-color: #153170;
          }
        }
      }
    }
  }

  .sense-of-worth {
    color: #000;
    background-color: #f5f5f5;
    padding: 4% 0;

    h2 {
      color: #000;
      font-size: (21rem/11);
      margin: 0;
    }

    h3 {
      font-size: (37rem/22);
      margin: 0;
    }

    p {
      font-size: (31rem/22);
      margin-left: 2em;
    }

    .sense-of-worth-center {
      width: fit-content;
      margin: 0 auto;

      > div {
        > * {
          display: inline-block;
        }
      }
    }

    > div {
      display: flex;
      align-items: center;

      > * {
        width: 50%;
      }

      > div {
        border-left: 1px solid #000;
      }
    }

    @media (max-width: 575px) {
      h2 {
        font-size: 16px;
        width: 25%;
      }

      h3 {
        font-size: 14px;
      }

      h2 + div {
        width: 75%;
      }
    }
  }
}
</style>
