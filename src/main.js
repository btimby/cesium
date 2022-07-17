import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import '@procot/webostv';
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false;

Vue.prototype.$bus = new Vue();

new Vue({
  router,
  vuetify,

  render: function(h) {
    return h(App);
  }
}).$mount("#app");
