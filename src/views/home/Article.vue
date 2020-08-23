<template>
  <div>
    <div class="card content">
      <div class="card-header">
        <h1>{{this.articleInfo.title}}</h1>
        <hr>
        <ul class="Ainfo">
          <li>作者：8963</li>
          <li>发布于：{{this.articleInfo.created_at}}</li>
          <li>
            标签：
            <el-tag effect="plain" type="info" style="margin:0 5px;">{{this.articleInfo.tag}}</el-tag>
          </li>
        </ul>
      </div>
      <div class="card-body">
        <p class="outline">
          <i>{{this.articleInfo.outline}}</i>
        </p>
        <dl v-html="this.articleInfo.html">{{this.articleInfo.html}}</dl>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      id: "",
      articleInfo:{
        title:'标题',
        created_at:'2024-02-29',
        tag:'标签',
        outline:'概要',
        html:'<p>文章内容</p>',
      }
    };
  },
  created() {
    this.id = this.$route.query.id;
    this.geiArticle();
  },
  methods: {
    geiArticle() {
      console.log('文章内容');
    }
  }
};
</script>
<style lang="less" scoped>
.content {
  min-height: e("calc(100vh - 120px)");
}
.outline {
  padding: 10px;
  background-color: #eee;
}
pre code {
  background-color: #1e1e1e;
  color: #eee;
}
.Ainfo {
  list-style: none;
  margin: 0;
  padding: 0;
  li {
    list-style: none;
    display: inline-block;
    margin: 0 10px;
    padding: 0;
    font-size: 14px;
  }
}
</style>