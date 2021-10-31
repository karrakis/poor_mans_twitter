import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import constLib from "./constants";
Vue.use(constLib);

new Vue({
  render: h => h(App),
}).$mount('#app')
