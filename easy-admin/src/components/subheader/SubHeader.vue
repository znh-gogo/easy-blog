<template>
    <div class="header">
        <div style="align-items:center;display:flex;">
            <el-button type="text" :icon="isCollapse?'el-icon-s-unfold':'el-icon-s-fold'" @click="handleCollapse" style="font-size:28px;color:#666;outline:none"></el-button>
            <!-- <div style="margin-left:20px;font-size:20px;font-weight:700;">{{authflag === 0?'商家端':'管理端'}}</div> -->
        </div>
        <div style="align-items:center;display:flex;">
            <div class="header-dropdown">
                <i :class="{icon:true,'ion-md-expand':!isFullScreen,'ion-md-contract':isFullScreen}" style="font-size:20px;"
                    @click.stop="handleChangeFullScreen"></i>
            </div>
            <!-- <div class="header-dropdown language">
                <span class="language">语言</span>
                <i class="icon ion-md-arrow-dropdown"></i>

                <ul class="dropdown-list language-list">
                    <li @click.stop="">简体中文</li>
                    <li @click.stop="">繁体中文</li>
                    <li @click.stop="">English</li>
                </ul>
            </div> -->
            <el-dropdown style="cursor: pointer;">
            <span class="el-dropdown-link" style="margin-right: 15px">
                {{$t('message.header.language')}}<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item @click.native="switchLang('cn')">简体中文</el-dropdown-item>
                <el-dropdown-item @click.native="switchLang('en')">English</el-dropdown-item>
            </el-dropdown-menu>
            </el-dropdown>
            <img :src="headimg" style="width:30px;height:30px;border-radius:50%;" v-if="headimg!==''"/>
            <img src="../../assets/head.jpg" style="width:30px;height:30px;border-radius:50%;" v-else/>
            <span style="margin:0 15px">{{username||'admin'}}</span>
            <el-dropdown style="cursor: pointer;">
            <i class="el-icon-setting" style="margin-right: 15px;color:#666">{{$t('message.header.setting')}}<el-badge is-dot class="item"/></i>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>{{$t('message.header.setting_check')}}</el-dropdown-item>
                <!-- <el-dropdown-item v-if="authflag === 0" @click.native="paybackapply">退款申请<el-badge class="mark" :value="paybacknum" v-if="paybacknum!==0" /></el-dropdown-item> -->
                <el-dropdown-item @click.native="logout">{{$t('message.header.setting_logout')}}</el-dropdown-item>
            </el-dropdown-menu>
            </el-dropdown>
        </div>
        
    </div>
</template>

<script>
import screenfull from 'screenfull';
import { Loading } from 'element-ui';
export default {
    inject:['reload'],
    props:{
        headimg:{
            type:String,
            default:''
        },
        username:{
            type:String,
            default:''
        }
    },
    data(){
        return{
            isFullScreen: false,
            isCollapse:false,
            lang: 'cn'
        }
    },
    methods:{
        handleChangeFullScreen() {
          if (screenfull.isEnabled) {
              screenfull.toggle();
              this.isFullScreen = !this.isFullScreen;
          }
      },
      handleCollapse(){
          this.isCollapse = !this.isCollapse
          this.$emit('handleCollapse',this.isCollapse)
      },
      switchLang(lang){
          
          let loadingInstance = Loading.service(
              {
                  background : 'rgba(0,0,0,0.5)',
                  text:'正在切换中...'
              }
          );
          setTimeout(()=>{
              loadingInstance.close();
            //   this.$route.meta.name = this.$t('message.menu.accountList')
              this.$i18n.locale = lang
              localStorage.lang = lang
            //   location.reload()  //页面白屏，全部刷新
              this.reload()  //页面不白屏，组件刷新
          },2000)
      },
      logout(){
        sessionStorage.clear()
        this.$router.push('/login')
      },
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
      width:100%;
    font-size: 12px;
    background-color: #fff;
    color:#666;
    display: flex;
    justify-content: space-between;
  }

  .item {
  /* margin-top: 10px; */
  /* margin-right: 40px; */
}

          /* 头部下拉样式 */
        .header-dropdown {

            display: inline-block;
            margin-right: 16px;
            line-height: 64px;
            cursor: pointer;
            color: #515a6e;

            .icon {
                color: #515a6e;
            }

            &:last-child {
                margin-right: 0;
            }

        }


        .icon {
            font-size: 23px;
            display: inline-block;
            vertical-align: middle;
        }


        /* 语言切换下拉样式 */
        .language {
            display: inline-block;
            font-size: 12px;
            vertical-align: middle;

            &:hover {

                .language-list {
                    display: inline-block;
                    right: 170px;
                }

            }

        }

        /* 头部功能下拉列表样式 */
        .dropdown-list {
            display: none;
            padding: 0;
            margin: 0;
            position: absolute;
            right: 0;
            z-index: 99999;
            list-style: none;
            font-size: 12px;
            line-height: 12px;
            top: 50px;
            background-color: #ffffff;

            border: 1px solid #dcdfe6;

            border-bottom: none;

            li {
                border-bottom: 1px solid #dcdfe6;
                padding: 8px 20px;
                cursor: pointer;
            }

            li:hover {
                background-color: #dcdfe6;
            }


        }
</style>
