<template>
  <div class="main">
    <div class="block content">
      <el-timeline>
        <el-timeline-item
          v-for="(item,index) in articleInfo"
          :key="index"
          :timestamp="item.created_at"
          placement="top"
        >
        <router-link :to="{path:'/article',query:{'id':item.id}}">
          <el-card>
            <h4>{{item.title}}</h4>
            <p>{{item.author}} 发布于 {{item.created_at}}</p>
          </el-card>
          </router-link>
        </el-timeline-item>
      </el-timeline>
    </div>
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
    },
  }
};
</script>

<style  lang="less" scoped>
a{
  text-decoration: none;
}
.main {
  min-height: e("calc(100vh - 120px)");
}
.block {
  padding-top: 30px;
}
</style>