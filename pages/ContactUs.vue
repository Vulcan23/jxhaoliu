<template>
  <div class="contact-us">
    <section class="top">
      <img v-lazy="require('~/assets/contactus_background.jpg')" />
      <h1>免费咨询</h1>
      <p>留下您的联系方式，我们的广告顾问将与您联系。</p>
    </section>
    <section class="middle">
      <h2>联系我们</h2>
      <el-form :model="form" :rules="rules" ref="ruleForm" label-width="auto">
        <el-form-item label="姓名" prop="name">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="公司名称">
          <el-input v-model="form.company"></el-input>
        </el-form-item>
        <el-form-item label="职位">
          <el-input v-model="form.position"></el-input>
        </el-form-item>
        <el-form-item label="电话" prop="tel">
          <el-input v-model="form.tel"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm" :loading="loading"
            >提交</el-button
          >
        </el-form-item>
      </el-form>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: "",
        company: "",
        position: "",
        tel: "",
      },
      rules: {
        name: [{ required: true, message: "请输入您的姓名", trigger: "blur" }],
        tel: [{ required: true, message: "请输入您的电话", trigger: "blur" }],
      },
      loading: false,
    };
  },
  methods: {
    submitForm() {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          this.loading = true;
          setTimeout(() => {
            this.$message({
              message: "恭喜你，但是公司没有后端研发",
              type: "success",
            });
            this.loading = false;
          }, 3000);
        }
      });
    },
  },
};
</script>

<style lang="scss">
$brand-color: #52ba30;

.contact-us {
  color: #fff;

  img {
    width: 100%;
  }

  .top {
    position: relative;

    h1,
    p {
      position: absolute;
      left: 8.4%;
      margin: 0;
    }

    h1 {
      top: 33%;
    }

    p {
      top: 49%;
    }
  }

  .middle {
    color: #000;
    width: 60rem;
    margin: 0 auto;

    h2 {
      margin-top: 4.54545%;
      font-size: (19rem/11);
    }

    @media (max-width: 575px) {
      width: 100%;

      h2 {
        font-size: 15px;
        margin-left: 15px;
      }
    }

    .el-form {
      width: 50%;
      margin: 4.54545% auto;

      & > :last-child > div {
        margin-left: 0 !important;
        text-align: center;

        button {
          padding: 10px 30px;
        }
      }

      @media (max-width: 1399px) {
        width: 55%;
      }

      @media (max-width: 1199px) {
        width: 61%;
      }

      @media (max-width: 991px) {
        width: 68%;
      }

      @media (max-width: 767px) {
        width: 76%;
      }

      @media (max-width: 575px) {
        width: 85%;
      }
    }
  }
}
</style>
