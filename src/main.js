import Vue from "vue";
import App from "./App.vue";
import router from "./router";
// import "./js/rem.js"
import ElementUI from "element-ui"
import "element-ui/lib/theme-chalk/index.css"

import "@/style/index.css";
import Vant from 'vant';
import 'vant/lib/index.css';
import './assets/font/iconfont.css';  // 图标

Vue.use(ElementUI)
Vue.config.productionTip = false;

if (process.env.NODE_ENV === 'development') {
  require("./mock/index")
}
Vue.use(Vant);


Vue.use(ElementUI);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");