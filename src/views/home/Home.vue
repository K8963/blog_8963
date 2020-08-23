<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light navbar-dark bg-dark">
      <a class="navbar-brand" href="#">
        <img
          src="@/assets/logo.png"
          width="30"
          height="30"
          class="d-inline-block align-top"
          alt
          loading="lazy"
        />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li v-for="item in menuList" :key="item.id" class="nav-item active">
            <router-link :to="{path:''+item.path}" class="link">
              <a class="nav-link">
                <i :class="item.icon"></i>
                {{item.name}}
              </a>
            </router-link>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0 searchForm">
          <input
            class="form-control mr-sm-2"
            type="text"
            v-model="searchData"
            placeholder="Search"
            aria-label="Search"
            @click="getSeach"
            @keyup.enter="searchAriticle(searchData)"
          />
          <button type="button" class="seachBtn" @click="searchAriticle(searchData)">
            <i class="el-icon-search"></i>
          </button>
          <div class="searchArt" :class="[isDis?'diaB':'disN']">
            <ul class="articleL">
              <li v-for="(item,index) in articleL" :key=index>
                <router-link :to="{path:'/article',query:{'id':item.id}}" class="articleLink">{{item.title}}</router-link>
              </li>
            </ul>
            <button class="cancelBtn" @click="getSeach">取消搜索</button>
          </div>
        </form>
      </div>
    </nav>
    <div class="container">
      <router-view></router-view>
    </div>
    <footer>© 2020 | 8963</footer>
  </div>
</template>
<script>
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
export default {
  data() {
    return {
      menuList: [
        {
          id: 1,
          name: "首页",
          path: "/",
          icon: "el-icon-s-home"
        },
        {
          id: 2,
          name: "分类",
          path: "/sort",
          icon: "el-icon-edit-outline"
        },
        {
          id: 3,
          name: "标签",
          path: "/tags",
          icon: "el-icon-document-checked"
        },
        { id: 4, name: "归档", path: "/archive", icon: "el-icon-files" },
        { id: 5, name: "开源", path: "/open", icon: "el-icon-price-tag" },
        { id: 6, name: "关于", path: "/about", icon: "el-icon-price-tag" }
      ],
      isDis: false,
      searchData: "",
      articleL: []
    };
  },
  methods: {
    getSeach() {
      this.isDis = !this.isDis;
    },
    searchAriticle(value) {
      console.log(value);
    }
  }
};
</script>
<style lang="less" scoped>
.main {
  min-height: e("calc(100vh - 120px)");
}
a{
  text-decoration: none;
}
@media (max-width: 992px) {
  .form-inline {
    display: none;
  }
  .mr-auto,
  .mx-auto {
    padding: 10px 20px;
    position: absolute;
    top: 0;
    z-index: 1;
  }
  .navbar-brand {
    display: none;
  }
}
nav {
  height: 70px;
  padding: 0 10%;
  .navbar-dark .navbar-brand {
    color: #0e83cd;
    padding: 5px;
    font-size: 20px;
  }
  .seachBtn {
    color: #6c6a5d;
    position: absolute;
    right: 3%;
    background-color: rgba(0, 0, 0, 0);
    border: none;
    margin-right: 15px;
  }
  .seachBtn:hover {
    color: #fff;
  }
  .form-control {
    width: 300px;
    background-color: rgba(0, 0, 0, 0);
    color: rgb(155, 153, 153);
    border: none;
    border-bottom: 1px solid #fff;
    padding-right: 40px;
  }
  a {
    text-decoration: none;
    color: #999;
  }
  li {
    margin: 0 10px;
    padding-bottom: 1px;
  }
  li:hover {
    border-bottom: 1px solid #eee;
  }
}
.mr-auto,
.mx-auto {
  background-color: #343a40;
}
footer {
  height: 50px;
  background-color: #343a40;
  color: #eee;
  text-align: center;
  line-height: 50px;
}
.searchForm {
  position: relative;
  .searchArt {
    width: 300px;
    min-height: 50px;
    box-shadow: 5px 5px 5px #999;
    background-color: #343a40;
    position: absolute;
    z-index: 2;
    top: 53px;
    .articleL{
      list-style: none;
      li{
        height: 50px;
        a{
          color: #eee;
        }
      }
      li:hover{
        border: 0;
        a{
          color: #7e7e7e;
        }
      }
    }
    .cancelBtn {
      color: #7e7e7e;
      width: 260px;
      margin: 0 20px;
      background-color: rgba(0, 0, 0, 0);
      border: none;
      font-size: 14px;
      outline: none;
      padding-top: 5px;
      position: absolute;
      bottom: 5px;
      border-top: 1px solid #eee;
    }
    .cancelBtn:hover{
      color: #eee;
    }
  }
  .disB {
    display: block;
  }
  .disN {
    display: none;
  }
}
</style>