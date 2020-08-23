<template>
  <div class="login_container">
    <!-- 登录区域 -->
    <div class="login_box">
      <!-- 表单区域 -->
      <el-form
        ref="loginForm"
        :model="loginForm"
        :rules="loginFormRules"
        label-width="0px"
        class="login_form"
      >
        <!-- 标题 -->
        <div class="title-container">
          <h3 class="title">登录后台系统</h3>
        </div>
        <!-- 用户名区域 -->
        <el-form-item prop="name">
          <el-input v-model="loginForm.name" prefix-icon="iconfont icon-user"></el-input>
        </el-form-item>
        <!-- 密码区域 -->
        <el-form-item prop="password">
          <el-input
            v-model="loginForm.password"
            prefix-icon="iconfont icon-3702mima"
            type="password"
          ></el-input>
        </el-form-item>
        <!-- 按钮区域 -->
        <el-button type="primary" style="width:100%;" @click="login">登录</el-button>
        <el-button type="text" @click="BackHome" icon="el-icon-s-home" class="btnText">博客首页</el-button>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //登录表单的数据绑定对象
      loginForm: {
        name: "admin",
        password: "123456"
      },
      // 登录表单的验证规则对象
      loginFormRules: {
        // 验证 用户名
        name: [
          // required必填项，message提示消息，trigger触发的时机(blur当文本框失去焦点时触发此验证)
          { required: true, message: "请输入用户名", trigger: "blur" },
          // 密码区间
          {
            min: 3,
            max: 10,
            message: "长度在 3 到 10 个字符",
            trigger: "blur"
          }
        ],
        // 验证 密码
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            min: 6,
            max: 15,
            message: "长度在 6 到 15 个字符",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    // 博客首页
    BackHome() {
      this.$router.push("/");
    },
    // 登录方法
    login() {
      // 表单预验证,valid：bool类型
      this.$refs.loginForm.validate(valid => {
        // console.log(valid)
        if (!valid) return false;
        this.$message.success("登录成功");
        this.$router.push("/admin/home");
      });
    }
  }
};
</script>
<style lang="less" scoped>
// scoped防止组件之间样式冲突
.login_container {
  height: 100%;
  background-color: #2d3a4b;
  // background-image: linear-gradient(#1e0023, #2d3a4b);
}

.login_box {
  width: 500px;
  height: 300px;
  // background-color: #fff;
  border-radius: 3px;
  position: absolute;
  left: 50%;
  top: 40%;
  transform: translate(-50%, -50%);
}

.login_form {
  position: absolute;
  width: 100%;
  bottom: 0;
  padding: 0 20px;
  // 为元素设定的宽度和高度决定了元素的边框盒。
  box-sizing: border-box;

  .el-input {
    margin: 15px 0;
  }
}
.el-input--prefix /deep/ .el-input__inner {
  background-color: rgba(0, 0, 0, 0.3);
  color: #eee;
  line-height: 45px;
  height: 45px;
  box-shadow: 0 0 0px 1000px #283443 inset;
}
.title-container {
  position: relative;

  .title {
    font-size: 26px;
    color: #eee;
    margin: 0px auto 30px auto;
    text-align: center;
    font-weight: bold;
  }
}
.btn {
  // 尾部对齐
  display: flex;
  justify-content: center;
  width: 100%;
  .el-button {
    width: 100%;
  }
}

.btnText {
  color: #999;
  float: right;
  margin: 10px 0;
}
.btnText:hover {
  color: #eee;
}
</style>