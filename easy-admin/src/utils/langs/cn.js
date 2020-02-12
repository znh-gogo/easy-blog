import zhLocale from 'element-ui/lib/locale/lang/zh-CN'

const cn = {
    message: {
        'hello': '你好，世界',
        login:{
            'account':'用户名',
            'placeholder_account':'请输入用户名',
            'password':'密码',
            'placeholder_password':'请输入密码',
            'role':'角色选择',
            'placeholder_role':'请选择角色',
            'login':'登陆',
            'admin':'管理员',
            'seller':'商家'
        },
        header:{
            'language':'语言',
            'setting':'设置',
            'setting_check':'查看',
            'setting_logout':'退出',
            'close_all':'关闭所有',
            'close_other':'关闭其他'
        },
        menu:{
            'home':'首页',
            'home_child_one':'首页管理',
            'accountManage':'广告管理',
            'accountTitle':'广告',
            'accountList':'广告列表'
        }
    },
    ...zhLocale
}

export default cn