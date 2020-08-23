<template>
  <div>
    <h3>编辑文章:{{id}}</h3>
    <el-card shadow="always">
      <el-form
        :model="articleForm"
        :rules="articleFormRules"
        ref="articleForm"
        label-width="100px"
        :inline="true"
      >
        <el-form-item label="文章名称" class="articleTitle" prop="title">
          <el-input v-model="articleForm.title"></el-input>
        </el-form-item>
        <el-form-item label="类别" prop="sort">
          <el-select v-model="articleForm.sort" placeholder="请选择文章类别">
            <el-option
              v-for="item in sortOptions"
              :key="item.value"
              :label="item.label"
              :value="item.label"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="标签" prop="tag">
          <el-select v-model="articleForm.tag" multiple placeholder="请选择文章标签" style="width:300px">
            <el-option
              v-for="item in tagOptions"
              :key="item.value"
              :label="item.label"
              :value="item.label"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="文章概要" prop="outline">
          <el-input v-model="articleForm.outline" style="width:880px"></el-input>
        </el-form-item>
        <el-form-item label="文章内容">
          <mavon-editor
            v-model="articleForm.content"
            ref="md"
            @change="change"
            style="min-height: 450px"
          />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('articleForm')">保存修改</el-button>
          <el-button @click="abandon">放弃修改</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>
<script>
// 导入Markdowe组件 及 组件样式
import { mavonEditor } from "mavon-editor";
import "mavon-editor/dist/css/index.css";
export default {
  name: "articleEdit",
  components: {
    mavonEditor
  },
  data() {
    return {
      articleForm: {
        id:'',
        title: "标题",
        outline: "概要",
        sort: "",
        tag: '',
        content: "内容", // 输入的markdown
        html: "内容", // 及时转的html
        author: "8963"
      },
      sortOptions: [],
      tagOptions: [],
      articleFormRules: {
        title: [{ required: true, message: "请输入文章标题", trigger: "blur" }],
        sort: [{ required: true, message: "请选择文章类别", trigger: "blur" }],
        tag: [{ required: true, message: "请选择文章标签", trigger: "blur" }],
        outline: [
          { required: true, message: "请输入文章概要", trigger: "blur" }
        ]
      },
      id: ""
    };
  },
  created() {
    this.getST();
    this.id = this.$route.query.id;
    this.getArticleForm();
  },
  methods: {
    change(value, render) {
      // render 为 markdown 解析后的结果[html]
      this.articleForm.html = render;
    },
    async getArticleForm() {
      console.log('文章');
    },
    submitForm(formName) {
      this.$refs[formName].validate(async valid => {
        if (valid) {
          console.log(formName);
        }
      });
    },
    abandon() {
      this.$confirm("是否放弃保存?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
        center: true
      })
        .then(() => {
          this.$router.push("/admin/management");
        })
        .catch(() => {});
    },
    getST() {
      // sortOptions
      for (let i = 0; i < 5; i++) {
        let sortL = { value: i, label: i };
        this.sortOptions.push(sortL);
      }
      // TagOptions
      for (let i = 0; i < 5; i++) {
        let tagL = { value: i, label: i };
        this.tagOptions.push(tagL);
      }
    }
  }
};
</script>
<style lang="less" scoped>
h3 {
  margin: 3px;
}
</style>