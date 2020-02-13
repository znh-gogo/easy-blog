import Vue from 'vue'
import Router from 'vue-router'
import Home from './Index.vue'
// import i18n from './utils/i18n'
Vue.use(Router)
/**
 * bug:修复router的promise问题。
 * 也可以install @3.1.1意思的router也可以解决这个问题
 */
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
// console.log(i18n.messages.cn.message.menu.accountList)
// if(localStorage.lang === 'cn'){
//   console.log(i18n.messages.cn.message.menu.accountList)
// } else {
//   console.log(i18n.messages.en.message.menu.accountList)
// }
// console.log(localStorage.lang)

// var obj={};
// let lang = localStorage.lang
// Object.defineProperty(obj,lang,{
//     get:function(){
//         return lang;
//     },
//     set:function(newValue){
//       lang=newValue;
//         console.log('set :',newValue);
//         //需要触发的渲染函数可以写在这...
//         if(lang === 'cn'){
//           console.log(i18n.messages.cn.message.menu.accountList)
//         } else {
//           console.log(i18n.messages.en.message.menu.accountList)
//         }
//     }
// })

const router = new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path:'/login',
      name:'login',
      component:() => import('./views/login.vue'),
      meta:{ isPublic:true}
    },
    {
      path: '/',
      name: 'home',
      component: Home,
      redirect:{path:'/homepage'},
      children:[
        //首页
        {
          path: '/homepage',
          name: 'homepage',
          component: () => import('./views/homepage.vue'),
          meta:{name:'首页管理',tab:true}
        },
 
        // 商品
        {
          path: '/goodsAdd',
          name: 'goodsAdd',
          component: () => import('./views/Goods/goodsAdd.vue'),
          meta:{name:'编辑商品',tab:true}
        },
        {
          path: '/goodsEdit/:id',
          name: 'goodsEdit',
          component: () => import('./views/Goods/goodsAdd.vue'),
          props:true,
          meta:{name:'编辑商品',tab:true}
        },
        {
          path: '/goodsList',
          name: 'goodsList',
          component: () => import('./views/Goods/goodsList.vue'),
          meta:{name:'商品列表',tab:true}
        },
        //文章
        {
          path: '/articleClassAdd',
          name: 'articleClassAdd',
          component: () => import('./views/Article/articleClassAdd.vue'),
          meta:{name:'添加文章类别',tab:true}
        },
        {
          path: '/articleClassEdit/:id',
          name: 'articleClassEdit',
          component: () => import('./views/Article/articleClassAdd.vue'),
          meta:{name:'修改文章类别',tab:true},
          props:true,
        },
        {
          path: '/articleClassList',
          name: 'articleClassList',
          component: () => import('./views/Article/articleClassList.vue'),
          meta:{name:'文章类别列表',tab:true}
        },
        {
          path: '/articleAdd',
          name: 'articleAdd',
          component: () => import('./views/Article/articleAdd.vue'),
          meta:{name:'添加文章',tab:true}
        },
        {
          path: '/articleEdit/:id',
          name: 'articleEdit',
          component: () => import('./views/Article/articleAdd.vue'),
          props:true,
          meta:{name:'修改文章',tab:true}
        },
        {
          path: '/articleList',
          name: 'articleList',
          component: () => import('./views/Article/articleList.vue'),
          meta:{name:'文章列表',tab:true}
        },
        //管理员
        {
          path: '/adminAdd',
          name: 'adminAdd',
          component: () => import('./views/AdminUser/adminAdd.vue'),
          meta:{name:'添加管理员',tab:true}
        },
        {
          path: '/adminEdit/:id',
          name: 'adminEdit',
          component: () => import('./views/AdminUser/adminAdd.vue'),
          props:true,
          meta:{name:'修改管理员',tab:true}
        },
        {
          path: '/adminList',
          name: 'adminList',
          component: () => import('./views/AdminUser/adminList.vue'),
          meta:{name:'管理员列表',tab:true}
        },
       
        //mobile账户
        {
          path: '/adList',
          name: 'adList',
          component: () => import('./views/Ad/adList.vue'),
          meta:{name:'广告列表',tab:true}
        },
        {
          path: '/adAdd',
          name: 'adAdd',
          component: () => import('./views/Ad/adEdit.vue'),
          meta:{name:'添加广告',tab:true}
        },
        {
          path: '/adEdit/:id',
          name: 'adEdit',
          component: () => import('./views/Ad/adEdit.vue'),
          props:true,
          meta:{name:'修改广告',tab:true}
        },
      ]
    },
    {path:'/404',name:'404',component:()=>import('./views/404/index.vue')},
    {path:'*',redirect:'/404'},
  ]
})

// console.log(router)

router.beforeEach((to,from,next)=>{
  if(!to.meta.isPublic && !sessionStorage.token){
    return next('/login')
  }
// console.log(123)
  
  window.document.title = '简易博客服务后台-'+to.meta.name || '简易博客服务后台'
  next()
})


export default router