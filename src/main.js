import Vue from "vue";
import Buefy from 'buefy';
import '@procot/webostv';
import '@/assets/theme.scss'
import '@mdi/font/css/materialdesignicons.css';
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

Vue.prototype.$bus = new Vue();

Vue.use(Buefy);

new Vue({
  router,
  render: function(h) {
    return h(App);
  },
}).$mount("#app");
