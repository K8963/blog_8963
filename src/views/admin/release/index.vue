<template>
  <div>
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
          <el-select v-model="articleForm.tag" multiple placeholder="请选择文章标签">
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
          <el-button type="primary" @click="submitForm('articleForm')">立即发布</el-button>
          <el-button @click="resetForm('articleForm')">重置</el-button>
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
  components: {
    mavonEditor
  },
  data() {
    return {
      articleForm: {
        title: "",
        outline: "",
        sort: "",
        tag: [],
        content: "", // 输入的markdown
        html: "", // 及时转的html
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
      }
    };
  },
  created() {
    this.getST();
  },
  methods: {
    change(value, render) {
      // render 为 markdown 解析后的结果[html]
      this.articleForm.html = render;
    },
    submitForm(formName) {
      this.$message.success("发布成功");
      this.$router.push("/admin/management");
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
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