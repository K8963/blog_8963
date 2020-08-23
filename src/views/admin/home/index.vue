<template>
  <div>
    <el-row :gutter="12" class="g-row">
      <el-col :span="24">
        <el-card shadow="always">
          <h3>欢迎来到博客后台系统!</h3>
          <el-row :gutter="12" class="wz-info">
            <el-col :span="5">
              <span>
                共
                <b>
                  &nbsp
                  <router-link to="/admin/management">{{infoList.articleNum}}</router-link>&nbsp
                </b>
                篇文章
              </span>
            </el-col>
            <el-col :span="5">
              <b>
                &nbsp
                <router-link to="/admin/sort">{{infoList.sortNum}}</router-link>&nbsp
              </b>
              <span>个类别</span>
            </el-col>
            <el-col :span="5">
              <b>
                &nbsp
                <router-link to="/admin/tag">{{infoList.tagNum}}</router-link>&nbsp
              </b>
              <span>个标签</span>
            </el-col>
            <el-col :span="5">
              <span>
                当月共发表
                <b>&nbsp{{infoList.nowNum}}&nbsp</b>篇文章
              </span>
            </el-col>
          </el-row>
          <el-row :gutter="12" class="echart">
            <el-col :span="14">
              <el-card shadow="always">
                <div id="myChart" :style="{width: '100%', height: '300px'}"></div>
              </el-card>
            </el-col>
            <el-col :span="8">
              <el-row :gutter="24" class="cz-link" v-for="item in czList" :key="item.id">
                <router-link :to="{path:''+item.path}">
                  <el-card shadow="hover">
                    <span>{{item.value}}</span>
                  </el-card>
                </router-link>
              </el-row>
            </el-col>
          </el-row>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      infoList: {
        // 文章数量
        articleNum: "13",
        // 类别数量
        sortNum: "5",
        // 标签数量
        tagNum: "7",
        // 当前月发表数量
        nowNum: "3"
      },
      // 操作
      czList: [
        { id: 1, value: "管理全部文章", path: "/admin/management" },
        { id: 2, value: "发布文章", path: "/admin/release" },
        { id: 3, value: "管理类别", path: "/admin/sort" },
        { id: 4, value: "管理标签", path: "/admin/tag" }
      ],
      // 当前时间
      time: {
        dateY: new Date().getFullYear(),
        dateM: new Date().getMonth() + 1
      },
      // 图标当年博客数量
      monthNum: []
    };
  },
  created() {
    this.getinfoList();
    this.getMonth();
  },
  methods: {
    // length
    async getinfoList() {
      console.log('获取初始数据');
    },
    async getMonth() {
      for (let i = 1; i <= this.time.dateM; i++) {
        this.monthNum.push(i);
      }
    },
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("myChart"));
      // 绘制图表
      myChart.setOption({
        title: {
          text: this.time.dateY + "年发博情况",
          textStyle: {
            fontWeight: "bold",
            color: "#373f41", // 标题颜色
            fontSize: 16
          },
          left: "left"
        },
        xAxis: {
          type: "category", // 还有其他的type，可以去官网喵两眼哦
          data: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec"
          ], // x轴数据
          name: "月份" // x轴名称
        },
        yAxis: {
          type: "value",
          name: "数量", // y轴名称
          minInterval: 1,
          boundaryGap: [0, 0.1]
        },
        tooltip: {
          trigger: "axis" // axis   item   none三个值
        },
        series: [
          {
            name: "发博数量",
            data: this.monthNum,
            type: "line"
          }
        ]
      });
    }
  },
  mounted() {
    this.drawLine();
  },
  watch: {
    //观察option的变化
    monthNum: {
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
<style lang="less" scoped>
.g-row {
  background-color: #eee;
}
.wz-info {
  text-align: center;
  b {
    font-size: 20px;
    color: #295aa6;
    padding: 0 8px;
    cursor: pointer;
    a {
      text-decoration: none;
      color: #295aa6;
    }
  }
  b:hover {
    text-decoration: underline;
  }
}
.echart {
  margin: 50px 0;
}
.cz-link {
  margin: 20px;
  a {
    text-decoration: none;
    span {
      color: #909399;
    }
  }
  span:hover {
    color: #295aa6;
  }
  .el-card {
    margin: 0 10px;
    text-align: center;
    background-color: #e9ecf0;
  }
}
</style>

