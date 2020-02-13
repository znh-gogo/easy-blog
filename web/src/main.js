import Vue from 'vue'
import App from './App.vue'
import router from './router'
import fetch from './fetch'
import element from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'

import './assets/iconfont/iconfont.css'
import './assets/scss/style.scss'
Vue.use(element);
Vue.config.productionTip = false
Vue.use(mavonEditor)
Vue.prototype.$http = fetch

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
