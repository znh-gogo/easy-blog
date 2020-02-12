<template>
  <div class="home">
    <el-container style="min-height: 100vh;">
      <el-aside style="background-color: #002140;overflow-x: hidden;" :class="[{'showCollapse':!isCollapse},{'hiddenCollapse':isCollapse}]">
        <SubMenu
        :isCollapse="isCollapse"
        :subMenuContent="menu"></SubMenu> 
      </el-aside>
    
      <el-container style="position:relative;">
        
        <el-header class="header">
          <SubHeader
          @handleCollapse="getCollapse"
          :headimg="headimg"
          :username="username"></SubHeader>
        </el-header>
          
        <div class="main-body-wrap">
            <slot name="main-body">
                <TabView :show-nav-tab="showNavTab" :subMenuContent="menu"></TabView>
            </slot>
        </div>
        <div class="companyText">
                Copyright © 2019 All informations from Vue.js. 
        </div>
        
      </el-container>
    </el-container>
  </div>
</template>

<script>
// @ is an alias to /src
import TabView from '../components/tab-view/TabView'
import SubMenu from '../components/submenu/SubMenu'
import SubHeader from '../components/subheader/SubHeader'
import screenfull from 'screenfull';
export default {
  name: 'home',
  components:{
    TabView,
    SubMenu,
    SubHeader
  },
  props:{
    menu:{
      type:Array,
      default:function(){
          return [
          {
              title:'首页',
              icon:'el-icon-s-home',
              subTitle:'',
              children:[
                  {
                      indexTitle:'首页',
                      path:'/homepage'
                  }
              ]
          }
          ]
      }
    }
  },
  data() {
      return {
        isCollapse: false,
        headimg:'',
        username:'',
        showNavTab:true,
        isFullScreen: false
      }
    },
    methods:{
      
     getCollapse(e){
       this.isCollapse = e
     }
    } 
}
</script>

<style lang="scss" scoped>
  .el-header {
    background-color:#606266;
    color: #fff;
    line-height: 60px;
  }
  .header{
    font-size: 12px;
    background-color: #fff;
    color:#666;
    display: flex;
    justify-content: space-between;
  }
  .el-aside {
    color: #333;
  }

.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
    /* overflow-x: hidden; */
  }
  .main-body-wrap {
      height: calc(100% - 200px);
  }
.companyText{
  background-color:#f1f1f1;text-align:center;color:#666;font-size:14px;position:absolute;bottom:0;width:100%;padding:15px 0
}
.showCollapse {
    max-width: 200px;
    width:auto;
    box-sizing: border-box;
  }
  .hiddenCollapse {
    max-width: 64px;
  }
</style>
