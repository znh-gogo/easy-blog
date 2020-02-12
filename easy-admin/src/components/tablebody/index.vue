<template>
    <div>
        <el-table
            :data="tableData.items"
            :header-cell-style="{background:'#eef1f6',color:'#606266'}"
            style="width: 100%">
            <el-table-column
            prop="_id"
            label="id"
            width="240"
            >
            </el-table-column>
            <el-table-column
            prop="account"
            label="帐户名"
            >
            </el-table-column>
            <el-table-column
            prop="email"
            label="邮箱"
            >
            </el-table-column>
            <el-table-column
            prop="telephone"
            label="电话"
            >
            </el-table-column>
            <el-table-column
            prop="nickname"
            label="名称"
            >
            </el-table-column>
            <el-table-column
            v-if="controller.isActive"
            fixed="right"
            label="操作"
            width="250">
            <template slot-scope="scope">
                <slot :scope="scope"></slot>
                <!-- <el-button type="default" size="small">查看</el-button>
                <el-button @click="frozenAccount(scope.row)" type="primary" size="small">{{scope.row.frozen === 1 ?'冻结':'解冻'}}</el-button>
                <el-button @click="remove(scope.row)" type="danger" size="small">删除</el-button> -->
            </template>
            </el-table-column>
        </el-table>
    
        <el-pagination
        layout="prev, pager, next"
        v-if="tableData.BeanPage"
        @current-change="changePage"
        :page-size="tableData.BeanPagenumSize"
        :page-count="tableData.BeanPage.allPages"
        :total="tableData.BeanPage.count">
        </el-pagination>
    </div>
</template>

<script>
export default {
    props:{
        tableData:Object,
        controller:{
            type:Object,
            default:function(){
                return {
                    isActive:false,
                    button:[
                        {
                            content:'查看'
                        }
                    ]
                }
            }
        }
    },
    methods:{
        changePage(e){
            this.$emit('changePage',e)
        }
    }
}
</script>