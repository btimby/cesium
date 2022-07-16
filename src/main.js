import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import '../public/webOSTVjs-1.2.4/webOSTV';
import '../public/bulma.css';

Vue.config.productionTip = false;

Vue.prototype.$bus = new Vue();

new Vue({
  router,
  render: function(h) {
    return h(App);
  },
}).$mount("#app");
