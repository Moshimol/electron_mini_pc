import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from "element-ui";
import less from "less";
import "element-ui/lib/theme-chalk/index.css";
import "./assets/iconfont/iconfont.css";

// 导入的css信息
import "@assets/iconfont/iconfont.css";

Vue.config.productionTip = false;

Vue.use(ElementUI);
Vue.use(less);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
