<template>
  <div class="header-inner">
    <div class="header-left">
      <div class="logo">
        <a href>
          <img src="../../assets/images/logo.jpg" alt />
        </a>
      </div>
      <div>
        <router-link to="/" tag="a" @click="active=1" :class="{active:active===1}">文章</router-link>
      </div>
      <div>
        <router-link to="/about" tag="a" @click="active=2" :class="{active:active===2}">关于博客</router-link>
      </div>
    </div>
    <div class="search search1">
      <!-- <el-form :inline="true" :model="formInline" class="demo-form-inline"> -->
          <!-- <el-form-item> -->
            <el-input placeholder="搜索文章" v-model="model.id" style="margin-right:1rem;"></el-input>
          <!-- </el-form-item> -->
          <!-- <el-form-item> -->
            <el-button @click="fetch()" icon="el-icon-search" plain></el-button>
          <!-- </el-form-item> -->
        <!-- </el-form> -->
    </div>
    
    <el-popover
      class="searchBtn"
      placement="bottom"
      width="350"
      trigger="click">
      <div class="searchBtn">
        <!-- <input type="text" class="ivu-input" placeholder="搜索文章" v-model="model.id" /> -->
        <el-form :inline="true" class="demo-form-inline">
          <el-form-item>
            <el-input placeholder="搜索文章" v-model="model.id"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button @click="fetch()" icon="el-icon-search" plain></el-button>
          </el-form-item>
        </el-form>

        <!-- <button @click="fetch()">
          <span class="iconfont icon-sousuo"></span>
        </button> -->
      </div>
      <!-- <el-button slot="reference">click 激活</el-button> -->
      <el-button slot="reference" class="searchBtn" size="mini" icon="el-icon-search" plain>搜索</el-button>
    </el-popover>
  </div>
</template>

<script>
export default {
  data() {
    return {
      model: {},
      active: 0
    }
  },
  methods: {
    async fetch() {
      alert(this.model.id)
    }
  }
}
</script>
<style lang="scss">
.header-inner {
  margin: 0 auto;
  width: 70%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .logo {
    img {
      width: 12rem; /* 90/12 */
    }
  }
  .header-left {
    font-size: 1.166667rem /* 14/12 */;
    display: flex;
    align-items: center; /*垂直*/
    justify-content: center; /*水平*/
    vertical-align: middle;
    line-height: 1.75rem /* 21/12 */;
    a {
      margin-right: 3rem /* 30/12 */;
      text-decoration: none;
      color: #777;
    }
    .router-link-exact-active {
      color: #409eff;
    }
  }
  .search {
    display: flex;
    align-items: center;
  }
  .searchBtn{
      display: none;
      
    }
  @media screen and (max-width: 900px){
    .search1{
      display: none;
    }
    .searchBtn{
      display: block
    }
    
    .logo {
      display: none;
    // img {
    //   width: 8rem; /* 90/12 */
    // }
  }
  }
}
</style>