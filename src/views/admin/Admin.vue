<template>
  <el-container>
    <!-- 头部 -->
    <el-header>
      <div>
        <!-- <img src="../assets/logo.png" alt /> -->
        <span>博客后台管理系统</span>
      </div>
      <el-tooltip class="item" effect="dark" content="博客首页" placement="right">
        <el-button icon="el-icon-s-home" @click="BackHome" circle></el-button>
      </el-tooltip>

      <el-button type="info" @click="logout">退出</el-button>
    </el-header>
    <!-- 主体 -->
    <el-container>
      <!-- 侧边栏 -->
      <el-aside :width="isCollapse ? '64px' : '200px'">
        <div class="toggle-button" @click="togleCollapse">|||</div>

        <el-menu
          unique-opened
          router
          background-color="#2d3a4b"
          text-color="#fff"
          active-text-color="#409FFF"
        >
          <!-- 导航  -->
          <router-link v-for="item in menuList" :key="item.id" :to="{path:'/admin'+item.path}">
            <el-menu-item>
              <i :class="item.icon"></i>
              <span :class="[isCollapse?'spanNone':'']">{{item.name}}</span>
            </el-menu-item>
          </router-link>
        </el-menu>
      </el-aside>
      <!-- 内容主体 -->
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
export default {
  data() {
    return {
      // 左侧菜单数据
      menuList: [
        { id: 1, name: "首页", path: "/home", icon: "el-icon-s-home" },
        {
          id: 2,
          name: "管理文章",
          path: "/management",
          icon: "el-icon-edit-outline"
        },
        {
          id: 3,
          name: "发布文章",
          path: "/release",
          icon: "el-icon-document-checked"
        },
        { id: 4, name: "分类管理", path: "/sort", icon: "el-icon-files" },
        { id: 5, name: "标签管理", path: "/tag", icon: "el-icon-price-tag" }
      ],
      isCollapse: false
    };
  },
  methods: {
    logout() {
      // 清空token
      // window.sessionStorage.clear();
      this.$router.push("/login");
    },
    BackHome() {
      this.$router.push("/");
    },
    togleCollapse() {
      this.isCollapse = !this.isCollapse;
    }
  }
};
</script>
<style lang="less" scoped>
.el-container {
  height: 100%;
}
.el-header {
  background-color: #373f41;
  display: flex;
  justify-content: space-between;
  padding-left: 0;
  align-items: center;
  color: #fff;
  font-size: 20px;
  > div {
    display: flex;
    align-items: center;
    img {
      height: 40px;
    }
    span {
      margin-left: 15px;
    }
  }
}
.el-aside {
  background-color: #2d3a4b;

  .el-menu {
    border: none;
  }
  a {
    text-decoration: none;
  }
  .spanNone {
    display: none;
  }
}
.el-main {
  background-color: #eaedf1;
}
.iconfont {
  margin-right: 10px;
}
.toggle-button {
  background-color: #4a5064;
  font-size: 10px;
  line-height: 24px;
  color: #fff;
  text-align: center;
  letter-spacing: 0.2em;
  // 鼠标放上去变成小手
  cursor: pointer;
}
.right {
  float: right;
  width: 60px;
}
.item {
  margin: 4px;
}
</style>