<template>
    <div>
        <defaultLayout :menu="menu"></defaultLayout>
    </div>
</template>

<script>
import defaultLayout from './views/Home'
export default {
    components:{
        defaultLayout
    },
    data(){
        return {
            menu:[
        {
            title:this.$t('message.menu.home'),
            icon:'el-icon-s-home',
            subTitle:this.$t('message.menu.home'),
            children:[
            {
                indexTitle:this.$t('message.menu.home_child_one'),
                path:'/homepage'
            }
            ]
        },
        {
            title:this.$t('message.menu.accountManage'),
            icon:'el-icon-s-shop',
            subTitle:this.$t('message.menu.accountTitle'),
            children:[
            {
                indexTitle:this.$t('message.menu.accountList'),
                path:'/adList'
            },
            {
                indexTitle:'添加广告',
                path:'/adAdd'
            }
            ]
        },
        {
            title:'分类管理',
            icon:'el-icon-bangzhu',
            subTitle:'商品',
            children:[
            {
                indexTitle:'分类列表',
                path:'/goodsList'
            },
            {
                indexTitle:'分类类别',
                path:'/goodsAdd'
            }
            ]
        },
        {
            title:'文章管理',
            icon:'el-icon-notebook-2',
            subTitle:'文章',
            children:[
            // {
            //     indexTitle:'新建文章分类',
            //     path:'/articleClassAdd'
            // },
            // {
            //     indexTitle:'文章分类列表',
            //     path:'/articleClassList'
            // },
            {
                indexTitle:'新建文章',
                path:'/articleAdd'
            },
            {
                indexTitle:'文章列表',
                path:'/articleList'
            }
            ]
        },
        {
            title:'管理员管理',
            icon:'el-icon-user',
            subTitle:'管理员',
            children:[
            {
                indexTitle:'管理员列表',
                path:'/adminList'
            },
            {
                indexTitle:'添加管理员',
                path:'/adminAdd'
            }
            ]
        },
        
    ]
        }
    }
}
</script>