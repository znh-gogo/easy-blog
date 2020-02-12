import request from './http'
import {MOBILE,ADMIN} from './globol'
// const global = 'http://localhost:3000';

const api = {
// 登陆注册
  login (data) {
    return request(ADMIN+'/origin', data, 'post')
  },
  register(data) {
    return request(MOBILE+'/register', data, 'post')
  },

  //个人中心
  showAccount(id,data) {
    return request(MOBILE+'/showAccount/'+id,data, 'post')
  },

  
  
  
  
}

export default api
