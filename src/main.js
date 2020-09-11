import Vue from 'vue'
import App from './App.vue'
import store from './store'
import VueRouter from "vue-router";
import {routes} from "./routes";
import PerfectScrollbar from "vue2-perfect-scrollbar";

Vue.config.productionTip = false
Vue.use(VueRouter);

Vue.use(PerfectScrollbar);

const router = new VueRouter({mode: 'history', routes});

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
