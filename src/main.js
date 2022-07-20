import Vue from "vue";
import Errokees from 'errokees';
import Buefy from 'buefy';
import smoothscroll from 'smoothscroll-polyfill';
import '@procot/webostv';
import '@/assets/theme.scss'
import '@mdi/font/css/materialdesignicons.css';
import App from "./App.vue";
import router from "./router";

smoothscroll.polyfill();

Vue.config.productionTip = false;

Vue.prototype.$bus = new Vue();
Vue.prototype.$errokees = new Errokees(null, {
    origin: 'right',
    scroll: false,
    selectEvent: {
      name: 'errokeesselected',
    },
    deselectEvent: {
      name: 'errokeesdeselected',
    },
  });

Vue.use(Buefy);

new Vue({
  router,
  render: function(h) {
    return h(App);
  },
}).$mount("#app");
