<template>
    <div class="tab-view">
        <!--tab栏-->
        <TabNav v-if="showNavTab" :tab-items="views" :current-item="currentView" @handleChangeTab="handleChangeTab"
                    @handelCloseTab="handelCloseTab" @handleCloseOthers="handleCloseOthers"
                    @handleCloseAll="handleCloseAll"></TabNav>
        <div style="padding:20px;">
            <!--面包屑-->
            <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="'/homepage'">{{$t('message.menu.home')}}</el-breadcrumb-item>
                <el-breadcrumb-item>{{middleBread}}</el-breadcrumb-item>
                <el-breadcrumb-item v-if="$route.meta.name">{{$route.meta.name}}</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <!--视图层-->
        <Scrollbar ref="scrollbar" padding="20px" class="tv-main-body">
            <template v-for="view in views">
                <transition-group name="slide" v-bind:key="view.id" appear mode="out-in">
                <component v-show="view === currentView" v-bind:is="view.component" :params="view.params"
                           :query="view.query"
                           :timestamp="view.timestamp"
                           v-bind:key="view.id"
                           ></component>
                           </transition-group>
            </template>
        </Scrollbar>
        
    </div>
</template>

<script>
import TabNav from './TabNav'
import Scrollbar from '../scrollbar/Scrollbar'
    export default {
        name: "TabView",
        props: {
            showNavTab: {
                type: Boolean,
                default: function () {
                    return true;
                }
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
        components: {TabNav,Scrollbar},
        data() {
            return {
                views: [],
                currentView: null,
                route: true,
                authflag:'',
                homeItem:'',
                middleBread:''
            }
        },
        watch: {
            '$route': function () {

                this.$refs.scrollbar.resetScrollbar();

                this.$emit('handleTabChange');
                this.handlerBread()
                if (window.routeType === 'back') {
                    window.routeType = '';
                    if(this.currentView.lastView){
                        this.handelCloseTab(this.currentView);
                        this.handleChangeTab(this.currentView.lastView);
                    }


                    return;
                }
                if (this.route && window.route) {
                    this.addView();
                } else {
                    this.route = true;
                    window.route = true;
                }



            }
        },
        methods: {

            handlerBread(){
                let vm = this
                let temp = ''
                vm.subMenuContent.forEach(item=>{
                    temp = item.children.find((v)=>{
                        return v.path === vm.$route.path
                    })
                    
                    if(temp){
                        vm.$route.meta.name = temp.indexTitle
                        vm.middleBread = item.title
                    }
                })
            },

            handleCloseOthers(item) {
                this.views = [item];
                this.handleChangeTab(item);

            },

            handleCloseAll() {
                let vm = this;
                let view = this.views.find((v) => {
                    return v.path === '/homepage'
                });

                if (view) {
                    this.handleCloseOthers(view);
                } else {
                    this.views = [];
                    vm.$router.push('/');
                }


            },

            handleChangeTab(item) {
                let vm = this;
                vm.route = false;
                vm.currentView.query = this.$route.query;
                vm.$router.push(item.path);
                vm.currentView = item;
                
                item.timestamp = new Date().getTime();
                vm.$nextTick(()=>{
                    vm.route = true;
                });
            },
            handelCloseTab(item) {
                this.views.splice(this.views.indexOf(item), 1);
            },
            addView() {
                // let flag = true
                if (!this.$route.meta.tab) {
                    return;
                }
                let view = {
                            lastView: this.currentView,
                            name: this.$route.meta.name,
                            path: this.$route.path,
                            params: this.$route.params,
                            query: this.$route.query,
                            timestamp: new Date().getTime(),
                            component: this.$route.matched[this.$route.matched.length - 1].components.default,
                            id: new Date().getTime()
                        };
                this.currentView = view;
                this.views.push(view);

                // if(this.views.length ===0){
                //     let view = {
                //             lastView: this.currentView,
                //             name: this.$route.meta.name,
                //             path: this.$route.path,
                //             params: this.$route.params,
                //             query: this.$route.query,
                //             timestamp: new Date().getTime(),
                //             component: this.$route.matched[this.$route.matched.length - 1].components.default,
                //             id: new Date().getTime()
                //         };
                //     this.currentView = view;
                //     this.views.push(view);
                // } else {
                //     this.views.forEach(item=>{
                //     if(item.path === '/homepage' && this.$route.path === '/homepage'){
                //         this.homeItem = item
                //         flag = false
                //     }
                //  })
                //  if(flag){
                //      let view = {
                //             lastView: this.currentView,
                //             name: this.$route.meta.name,
                //             path: this.$route.path,
                //             params: this.$route.params,
                //             query: this.$route.query,
                //             timestamp: new Date().getTime(),
                //             component: this.$route.matched[this.$route.matched.length - 1].components.default,
                //             id: new Date().getTime()
                //         };
                //     this.currentView = view;
                //     this.views.push(view);
                //  } else {
                //      this.handleChangeTab(this.homeItem)
                //  }
                // }
                
            },
        },
        created() {

            let vm = this;
            this.authflag = parseInt(sessionStorage.authflag)
            vm.handlerBread()
            vm.addView();
            // console.log(vm.views)
            vm.$router.updateQuery = function () {
                window.route = false;
                vm.$router.push(arguments[0]);
                vm.$nextTick(()=>{
                    window.route = true;
                });
            };

            vm.$router.cgBack = function () {
                window.routeType = 'back';
                vm.$router.back();
            };
            



            window.route =true;

        }
    }
</script>

<style lang="scss" scoped>


    .tab-view {
        height: 100%;
        position: relative;
        width: 100%
    }

    .tv-main-body {
        // background-color: #fff;
        overflow: hidden;
        height: 100%;
        background: #f1f1f1;

        /*padding: 20px;*/
    }

    /* 可以设置不同的进入和离开动画 */
    /* 设置持续时间和动画函数 */
    .slide-enter-active, .slide-leave-active {
        transition: all 1.5s ease;
    }
    .slide-enter {
        opacity: 0;
        transform: translateX(calc(100% - 20px));
        // transition-delay:1s;
        // position: relative;
        // top:20px;
    }
    .slide-enter-to {
        opacity: 1;
    }
    .slide-leave-active {
        transition: all 1.5s ease;
        opacity: 0;
        transform: translateX(-100%);
        position: absolute;
        top:20px;
    }

</style>