<template>
  <el-row :gutter="12">
    <h3>管理文章标签:{{tagNum}}</h3>
    <el-card shadow="always">
      <el-row :gutter="12">
        <el-col :span="12">
          <el-card shadow="always">
            <el-table :data="tableData" style="width: 100%">
              <el-table-column label="ID" prop="id"></el-table-column>
              <el-table-column label="Name" prop="tag_name"></el-table-column>
              <el-table-column align="right">
                <template slot="header">
                  <el-button size="small" icon="el-icon-plus" @click="Add" round>添加标签</el-button>
                </template>
                <template slot-scope="scope">
                  <el-button size="mini" @click="Edit(scope.row)">编辑</el-button>
                  <el-button size="mini" type="danger" @click="Delete(scope.row)">删除</el-button>
                </template>
              </el-table-column>
            </el-table>
          </el-card>
        </el-col>
        <el-col :span="12">
          <el-card shadow="always">
            <div id="myChart" :style="{width: '100%', height: '300px'}"></div>
          </el-card>
        </el-col>
      </el-row>
    </el-card>
  </el-row>
</template>
<script>
export default {
  data() {
    return {
      // 标签数量
      tagNum: "5",
      // 类别
      tagList: [],
      // 图表各类博客数量
      barNum: [],
      // 标签表格数据
      tableData: [
        {id:0,tag_name:'标签'},
        {id:1,tag_name:'标签'},
        {id:2,tag_name:'标签'},
        {id:3,tag_name:'标签'},
        {id:4,tag_name:'标签'},
      ]
    };
  },
  mounted() {
    this.drawLine();
  },
  created() {
    this.getTableData();
  },
  methods: {
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("myChart"));
      // 绘制图表
      myChart.setOption({
        title: {
          text: "各类文章数量",
          textStyle: {
            fontWeight: "bold",
            color: "#373f41", // 标题颜色
            fontSize: 16
          },
          left: "left"
        },
        tooltip: {
          show: true
        },
        legend: {
          data: ["数量"]
        },
        xAxis: {
          data: this.tagList,
          axisLabel: {
            interval: 0,
            show: true,
            textStyle: {
              color: "#2d3a4b"
            }
          },
          axisLine: {
            lineStyle: {
              color: "#2d3a4b"
            }
          }
        },
        yAxis: {},
        series: [
          {
            name: "数量",
            type: "bar",
            data: this.barNum,
            itemStyle: {
              normal: {
                color: "#295aa6", //设置柱子颜色
                label: {
                  show: true, //柱子上显示值
                  position: "top", //值在柱子上方显示
                  textStyle: {
                    color: "#2d3a4b" //值得颜色
                  }
                }
              }
            },
            axisLine: {
              lineStyle: {
                color: "#373f41"
              }
            },
            axisLabel: {
              show: true,
              textStyle: {
                color: "#fff"
              }
            },
            splitLine: {
              lineStyle: {
                color: ["#07405c"]
              }
            }
          }
        ]
      });
    },
    async getTableData() {
      for (let i = 0; i < 5; i++) {
        this.tagList.push(i);
      }
      for (let i = 0; i < 5; i++) {
          this.barNum.push(i);
      }
    },
    Edit(row) {
      this.$prompt("Tag - Name", "编辑", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        inputPattern: /^[\s\S]*.*[^\s][\s\S]*$/,
        inputErrorMessage: "不能为空",
        inputValue: row.tag_name
      })
        .then(({ value }) => {
          this.tagEdit(row.id, value);
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "取消修改"
          });
        });
    },
    tagEdit(id, value) {
      console.log(id,value);
    },
    Delete(row) {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
        center: true
      })
        .then(() => {
          this.tagDel(row.id);
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "取消删除"
          });
        });
    },
    tagDel(id) {
      console.log(id);
    },
    Add() {
      this.$prompt("Tag-Name", "请输入添加类别名称", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        inputPattern: /^[\s\S]*.*[^\s][\s\S]*$/,
        inputErrorMessage: "不能为空"
      })
        .then(({ value }) => {
          this.tagAdd(value);
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "取消修改"
          });
        });
    },
    tagAdd(value) {
      console.log(value);
    }
  },
  watch: {
    //观察option的变化
    barNum: {
      handler(newVal, oldVal) {
        if (this.myChart) {
          if (newVal) {
            this.myChart.setOption(newVal);
          } else {
            this.myChart.setOption(oldVal);
          }
        } else {
          this.drawLine();
        }
      },
      deep: true //对象内部属性的监听，关键。
    },
    tagList: {
      handler(newVal, oldVal) {
        if (this.myChart) {
          if (newVal) {
            this.myChart.setOption(newVal);
          } else {
            this.myChart.setOption(oldVal);
          }
        } else {
          this.drawLine();
        }
      },
      deep: true //对象内部属性的监听，关键。
    }
  }
};
</script>
