<template>
  <div>
    <el-table
      :data="tableData.filter(tableData => !search || tableData.title.toLowerCase().includes(search.toLowerCase()))"
      style="width: 100%"
    >
      <el-table-column fixed prop="created_at" label="发布日期" width="200" sortable></el-table-column>
      <el-table-column prop="title" label="文章标题" width="400"></el-table-column>
      <el-table-column
        prop="sort"
        label="类别"
        width="130"
        :filters="sortList"
        :filter-method="filterSort"
        filter-placement="bottom-end"
      >
        <template slot-scope="scope">
          <el-tag disable-transitions>{{scope.row.sort}}</el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="tag" label="标签" width="180"></el-table-column>
      <el-table-column prop="author" label="作者" width="130"></el-table-column>
      <el-table-column align="right">
        <template slot="header" slot-scope="scope">
          <el-input v-model="search" size="mini" placeholder="输入关键字搜索" />
        </template>
        <template slot-scope="scope">
          <el-button class="editBtn" size="mini">
            <router-link :to="{path:'/admin/edit',query:{'id':scope.row.id}}">编辑</router-link>
          </el-button>
          <el-button size="mini" type="danger" @click="Delete(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import Vue from "vue";
export default {
  data() {
    return {
      tableData: [
        {
          id:'1',
          sort:'1',
          title:'标题',
          author:'8963',
          outline:'概要',
          created_at:'2024-02-29',
          tag:'标签'
        }
      ],
      search: "",
      sortList: []
    };
  },
  created() {
    this.getSA();
  },
  methods: {
    formatter(row, column) {
      return row.address;
    },
    filterSort(value, row) {
      return row.sort === value;
    },
    filterHandler(value, row, column) {
      const property = column["property"];
      return row[property] === value;
    },
    async getSA() {
      // sortList
      for (let i = 0; i < 5; i++) {
        Vue.set(this.sortList, i, {
          text: i,
          value: i
        });
      }
      // article
    },
    Delete(row) {
      this.$confirm("此操作将永久删除此文章, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
        center: true
      })
        .then(() => {
          this.artileDel(row.id);
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    async artileDel(id) {
      console.log('删除此id文章'.id);
    },
  }
};
</script>
<style lang="less" scoped>
  a{
    text-decoration: none;
    color: #000;
  }
</style>