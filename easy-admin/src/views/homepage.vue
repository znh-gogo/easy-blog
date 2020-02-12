<template>
    <div class="container">
        <div>首页</div>
        <p>{{$t('message.hello')}}</p>
        <el-button type="text" @click="open">点击打开 Message Box</el-button>
    </div>
</template>

<script>
import format from '../common/usualtime'
// import echarts from 'echarts'
export default {
    data(){
        return{
           
        }
    },
    methods:{
         compare(p){ //这是比较函数
            return (m,n)=>{
                var a = m[p];
                var b = n[p];
                return a - b; //升序
            }
        },
        
        millionChange(e){
            let a = e+''
            return a.replace(/\d{1,3}(?=(\d{3})+$)/g,item=>item+',');
        },
        open() {
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
      }
    },
    mounted(){
        
            // console.log(123)
         
    },
    // 注意在vue实例销毁前，清除我们的定时器。
    destroyed () {
        
    }
}
</script>

<style scoped>

</style>