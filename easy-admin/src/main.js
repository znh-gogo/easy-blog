import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import element from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import locale from "element-ui/lib/locale/lang/en";
import i18n from "./utils/i18n";
import api from "./api/http";
import VueAwesomeSwiper from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";
import "ionicons/dist/css/ionicons.css";
import mavonEditor from "mavon-editor";
import "mavon-editor/dist/css/index.css";
Vue.use(mavonEditor);
Vue.use(VueAwesomeSwiper /* { default global options } */);
// import echarts from 'echarts'
Vue.use(element, { locale });
Vue.config.productionTip = false;
Vue.prototype.$http = api;
// Vue.prototype.$echarts = echarts

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount("#app");
