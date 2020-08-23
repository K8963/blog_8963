<template>
  <div class="main">
    <el-row :gutter="12" v-for="(item,index) in articleInfo" :key="index">
      <router-link :to="{path:'/article',query:{'id':item.id}}">
        <el-card shadow="hover" class="article">
          <h3>
            <el-tag type="info" style="margin:0 5px;">{{item.sort}}</el-tag>
            {{item.title}}
          </h3>
          <p class="outline">{{item.outline}}</p>
          <hr />
          <ul class="Ainfo">
            <li>作者：8963</li>
            <li>发布于：{{item.created_at}}</li>
            <li>
              标签：
              <el-tag effect="plain" type="info" style="margin:0 5px;">{{item.tag}}</el-tag>
            </li>
          </ul>
        </el-card>
      </router-link>
    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      articleInfo: [
        {
          id:'1',
          sort:'类别',
          title:'标题',
          outline:'概要',
          created_at:'2024-02-29',
          tag:'标签'
        }
      ]
    };
  },
  created() {
    this.getArticle();
  },
  methods: {
    getArticle() {
      console.log('文章列表');
    }
  }
};
</script>
<style lang="less" scoped>
.main {
  min-height: e("calc(100vh - 120px)");
}
a {
  text-decoration: none;
}
.article {
  margin: 20px 0;
  padding: 0px 15px;
  cursor: pointer;
}
.el-pagination {
  margin-bottom: 40px;
  text-align: center;
}
.outline {
  padding: 10px;
  background-color: #eee;
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