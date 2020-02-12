<template>
    <div>
        <div class="topImg" v-if="!isCollapse"><a href><img src="../../assets/newlogo.jpg" alt="logo" title="logo"></a></div>
        <div class="topText" v-else>通用</div>
        <transition name="el-fade-in-linear">
        <el-menu
        class="el-menu-vertical-demo"
        router
        :default-active="$route.path"
        unique-opened
        @open="handleOpen"
        @close="handleClose"
        :collapse="isCollapse"
        background-color="#001529"
        text-color="#fff"
        active-text-color="#ffd04b">
            <el-submenu v-for="(item,index) in subMenuContent" :key="index" :index="index+''">
                <template slot="title"><i :class="item.icon"></i><span>{{item.title}}</span></template>
                <el-menu-item-group>
                <template slot="title" v-if="item.subTitle!==''">{{item.subTitle}}</template>
                <div v-for="(subItem,subIndex) in item.children" :key="index+'-'+subIndex">
                    <el-menu-item :index="subItem.path">{{subItem.indexTitle}}</el-menu-item>
                </div>
                </el-menu-item-group>
            </el-submenu>
        </el-menu>
        </transition>
    </div>
</template>

<script>
export default {
    props:{
        isCollapse:{
            type:Boolean,
            default:false
        },
        subMenuContent:{
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
    data(){
        return {

        }
    },
    methods:{
        handleOpen(e,keyPath){
            // console.log(e,keyPath)
            // window.sessionStorage.subIndex = e
        },
        handleClose(){},
        getItems(e){
            console.log(e)
        }
    }
}
</script>

<style scoped>
.topImg{
    height:60px;display:flex;align-items:center;justify-content:center;
}
.topImg a{
    width:85%;height:70%;
}
.topImg img {
    width: 100%;
    height: 100%;
    border-radius:10px;
}
.topText{
    height:60px;line-height:60px;text-align:center;font-size:18px;padding:0 10px;color: #fff;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    /* width:auto; */
    min-height: 400px;
  }
</style>