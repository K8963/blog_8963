import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import './plugins/element.js'

// 导入字体图标（第三方-阿里图标）
import './assets/fonts/iconfont.css'
// 导入全局样式表
import './assets/css/global.css'
// echarts 图表
import echarts from 'echarts'
Vue.prototype.$echarts = echarts
// 引入jQuery
import $ from 'jquery'
// 引入bootstrap
import 'bootstrap'
// 引入 axios
import axios from 'axios'
// 配置请求根路径
// axios.defaults.baseURL = 'http://k8963.com/api/'
Vue.prototype.$http = axios

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
