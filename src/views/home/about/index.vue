<template>
  <div>
    <el-card shadow="never" class="main">
      <h1>
        <i class="el-icon-moon-night"></i>
        关于 8963
      </h1>
      <hr />
      <div class="info">
        <h3>Blog</h3>
        <p>
          本博客用于记录平时工作和学习中的知识点，总结经验，用于分享。如有错误地方烦请指正。
          博客重点在于分享web前端开发知识，或涉其它。
        </p>
        <h3>
          <i class="el-icon-postcard"></i>
        </h3>
        <ul>
          <li>
            <strong>我 :</strong>
            <a>
              8963
              <i class="el-icon-user"></i>
            </a>
          </li>
          <li>
            <strong>Gitee :</strong>
            <a href="https://gitee.com/K_8963">
              K8963
              <i class="el-icon-paperclip"></i>
            </a>
          </li>
          <li>
            <strong>Github :</strong>
            <a href="https://github.com/K8963">
              K8963
              <i class="el-icon-paperclip"></i>
            </a>
          </li>
        </ul>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
a {
  text-decoration: none;
}
.main {
  min-height: e("calc(100vh - 120px)");
}
.info {
  padding: 20px;
  h3 {
    padding: 10px 0;
  }
  ul {
    padding: 0;
  }
  li {
    width: 150px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    // border-bottom: 1px solid #999;
    list-style: none;
    strong {
      font-weight: normal;
    }
    a {
      color: #000;
    }
  }
}
</style>