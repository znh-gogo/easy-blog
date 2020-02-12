import enLocale from 'element-ui/lib/locale/lang/en'

const en = {
    message: {
        'hello': 'hello, world',
        login:{
            'account':'account',
            'placeholder_account':'please enter your account',
            'password':'password',
            'placeholder_password':'please enter your password',
            'role':'role',
            'placeholder_role':'please choose your role',
            'login':'login',
            'admin':'admin',
            'seller':'seller'
        },
        header:{
            'language':'language',
            'setting':'setting',
            'setting_check':'check',
            'setting_logout':'logout',
            'close_all':'CloseAll',
            'close_other':'CloseOther'
        },
        menu:{
            'home':'HomePage',
            'home_child_one':'Management',
            'accountManage':'AdManage',
            'accountTitle':'Ad',
            'accountList':'AdList'
        }
    },
    ...enLocale 
}


export default en