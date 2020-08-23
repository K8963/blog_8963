<template>
  <div>
    <div class="content">
      <nav>
        <ul class="nav justify-content-center">
          <li
            class="nav-item"
            v-for="(item,index) in sortList"
            :key="index"
            @click="getArticle(item)"
          >
            <a class="nav-link active" href="#">{{item}}</a>
          </li>
        </ul>
      </nav>
      <el-row :gutter="12" v-for="(item,index) in articleInfo" :key="index">
        <router-link :to="{path:'/article',query:{'id':item.id}}">
          <el-card shadow="hover" class="article">
            <h3>{{item.title}}</h3>
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
      ],
      sortList: []
    };
  },
  created() {
    this.getSort();
    this.initData();
  },
  methods: {
    getSort() {
      this.sortList = ['类别1','类别2','类别3'];
    },
    getArticle(sort) {
      console.log(sort);
    },
    initData() {
      console.log('初始文章列表');
    }
  }
};
</script>

<style lang="less" scoped>
a {
  text-decoration: none;
}
.content {
  min-height: e("calc(100vh - 120px)");
}
nav {
  background-color: #f1f1f1;
  border-radius: 5px;
  box-shadow: 0px 0px 5px #888888;
  a {
    text-decoration: none;
    color: gray;
  }
  li {
    padding-bottom: 1px;
    margin: 5px 10px;
  }
  li:hover {
    border-bottom: 1px solid #000;
    color: #999;
  }
}
.article {
  margin: 20px 0;
  cursor: pointer;
  .outline {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
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