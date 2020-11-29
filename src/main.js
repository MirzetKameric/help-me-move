import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueSetup from './plugins/setup'

Vue.config.productionTip = false

Vue.use(VueSetup)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
