import Vue from "vue";
import "./plugins/vuetify";
import App from "./App.vue";
import "roboto-fontface/css/roboto/roboto-fontface.css";
import "material-design-icons-iconfont/dist/material-design-icons.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import BootstrapVue from "bootstrap-vue";

Vue.use(BootstrapVue);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
