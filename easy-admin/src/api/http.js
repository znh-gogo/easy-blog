import axios from 'axios'
import Vue from 'vue'
import router from '../router'
const http = axios.create({
    // baseURL:""
  baseURL: process.env.VUE_APP_API_URL || '/api/admin/rest'

})

http.interceptors.request.use(config  =>{
    if (sessionStorage.token){
        config.headers.Authorization= 'Bearer '+ (sessionStorage.token||'')
    }
    return config
},err =>{
    return Promise.reject(err)
})

http.interceptors.response.use(res =>{
    return res
},err=>{
    if(err.response.data.message){
        Vue.prototype.$message.error(err.response.data.message)
    }
    
    if (err.response.status===401){
        router.push('/login')
    }
    return Promise.reject(err) 
})

// export default function request (url, data = {}, method = 'post') {
//     return new Promise((resolve, reject) => {
//       const options = {
//         url,
//         method
//       }
//       if (method.toLowerCase() === 'get') {
//         options.params = data
//       } else {
//         options.data = data
//       }
//       http(options)
//         .then(res => {
//           resolve(res)
//         })
//         .catch(error => {
//           reject(error)
//           console.error(error)
//         })
//     })
//   }
  export default http