<template>
    <div class="login">
        <el-card class="login-card">
            <!-- <div id="header" style="text-align:center;padding:20px 0;font-size:20px">农商产品信息服务平台登陆中心</div> -->
            <div style="text-align:center;"><img src="../assets/newlogo.jpg" style="border-radius:10px" alt=""></div>
            <el-form @submit.native.prevent="login">
                <el-form-item :label="`${$t('message.login.account')}:`">
                    <el-input v-model="model.username" :placeholder="`${$t('message.login.placeholder_account')}`"></el-input>
                </el-form-item>
                <el-form-item :label="`${$t('message.login.password')}:`">
                    <el-input v-model="model.password" type="password" show-password :placeholder="`${$t('message.login.placeholder_password')}`"></el-input>
                </el-form-item>
                <!-- <el-form-item :label="`${$t('message.login.role')}:`">
                    <el-select v-model="value" :placeholder="`${$t('message.login.placeholder_role')}`" style="width:100%">
                        <el-option
                        v-for="(item,index) in options"
                        :key="index"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item> -->
                <el-form-item style="text-align:center">
                    <el-button type="primary" native-type="submit" style="width:80%">{{$t('message.login.login')}}</el-button>
                </el-form-item>
                <!-- <el-form-item style="text-align:center" v-if="adminNum===0">
                    <div>检测到未有管理员，<span style="color:#409EFF;cursor:pointer" @click="$router.push('/origin')">去创建?</span></div>
                </el-form-item> -->
            </el-form>
        </el-card>
    </div>
</template>

<script>
import {ADMIN,MOBILE} from '../api/globol'
import { Notification } from 'element-ui';
export default {
    data (){
        return{
            model:{},
            value:'',
            options:[
                {
                    label: this.$t('message.login.admin'),
                    value: 1
                },
                {
                    label: this.$t('message.login.seller'),
                    value: 0
                }
            ],
            adminNum:-1
        }
    },
    methods:{
        // login(){
        //     if(this.value === 0) {
                
        //         this.$router.push('/')
        //         // this.$message.success('登陆成功')
        //         Notification({
        //             title:'您好,登陆成功',
        //             message:'希望您能拥有美好的一天，加油！',
        //             type:'success',
        //             duration: 3000
        //         })
                
        //     } else if(this.value === 1){
                
        //         this.$router.push('/')
        //         // this.$message.success('登陆成功')
        //         Notification({
        //                 title:'您好,登陆成功',
        //                 message:'希望您能拥有美好的一天，加油！',
        //                 type:'success',
        //                 duration: 3000
        //             })
                
        //     }   
        // },
        async login() {
            const res = await this.$http.post('login', this.model)
            sessionStorage.token = res.data.token
            sessionStorage.setItem('username', this.model.username)
            this.$router.push('/')
            Notification({
                        title:'您好,登陆成功',
                        message:'希望您能拥有美好的一天，加油！',
                        type:'success',
                        duration: 3000
                    })
            },
        // checkAdmin(){
        //     this.$http.login().then(res=>{
        //         this.adminNum = res.data
        //     })
            
        // }
    },
    mounted(){
        // this.checkAdmin()
    }
}
</script>


<style scoped>
.login{
    width: 100%;
    /* min-height: 100%; */
    height:100vh;
    background: url(~@/assets/background.svg) no-repeat;
    background-size: 100% 100%;
    /* padding: 2rem 0 2rem; */
    /* position: relative;
    overflow: hidden; */
    display: flex;
    justify-content: center;
    align-items: center;
}
.login-card{
    width: 25rem;
    /* margin: 7rem auto; */
    background: rgba(255, 255, 255, 0.3)
    /* position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -12.5rem;
    margin-top: -15rem; */
}
</style>

