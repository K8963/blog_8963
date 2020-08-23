import Vue from "vue";
import Router from "vue-router";
// 路由懒加载
// 前台
const Index = () => import('@/views/home/Home.vue') //前台模板
const IndexArticle = () => import('@/views/home/Article.vue') //文章组件
const IndexHome = () => import('@/views/home/home/index.vue') //首页
const IndexSort = () => import('@/views/home/sort/index.vue') //分类
const IndexTags = () => import('@/views/home/tags/index.vue') //标签
const IndexArchive = () => import('@/views/home/archive/index.vue') //归档
const IndexOpen = () => import('@/views/home/open/index.vue') //开源
const IndexAbout = () => import('@/views/home/about/index.vue')  //关于
// 后台
const Login = () => import('@/views/admin/login/login.vue') //登录
const AdminHome = () => import('@/views/admin/Admin.vue') // 后台模板
const Home = () => import('@/views/admin/home/index.vue') //后台首页
const Management = () => import('@/views/admin/management/index.vue') //管理
const ArticleEdit = () => import('@/views/admin/management/articleEdit.vue')  //文章编辑
const Release = () => import('@/views/admin/release/index.vue') //发布
const Sort = () => import('@/views/admin/sort/index.vue') //分类
const Tag = () => import('@/views/admin/tag/index.vue') //标签

Vue.use(Router);

const routes = [
  {
    path: '/',
    component: Index,
    redirect: '/',
    children: [
      { path: '/', component: IndexHome },   //文章
      { path: '/article', component: IndexArticle },   //首页
      { path: '/sort', component: IndexSort },  //分类
      { path: '/tags', component: IndexTags },  //标签
      { path: '/archive', component: IndexArchive },  //归档
      { path: '/open', component: IndexOpen },  //开源
      { path: '/about', component: IndexAbout },  //关于
    ]
  },
  { path: '/admin', redirect: '/login' }, //重定向后台登录
  { path: '/login', component: Login }, //登录页面
  {
    path: '/admin',
    component: AdminHome,
    redirect: '/admin/home',
    children: [
      { path: '/admin/home', component: Home },//首页
      { path: '/admin/management', component: Management },//文章管理
      { path: '/admin/edit', component: ArticleEdit },//编辑文章
      { path: '/admin/release', component: Release },//发布文章
      { path: '/admin/sort', component: Sort },// 分类管理
      { path: '/admin/tag', component: Tag },// 标签管理
    ]
  }
]

const router = new Router({
  routes
})
// 路由守卫
// router.beforeEach((to, from, next) => {
//   // 
//   let toPath = ['/login', '/', '/sort', '/tags', '/archive', '/open', '/about']
//   // 访问放行
//   if (to.path === '/login' || to.path === '/' || to.path === '/sort' || to.path === '/tags' || to.path === '/archive' || to.path === '/open' 
//   || to.path === '/about' || to.path == '/article') return next()
//   // 获取token
//   const tokenStr = window.sessionStorage.getItem('token')
//   // 没有token, 强制跳转到登录页
//   if (!tokenStr) return next('/login')
//   next()
// })

export default router