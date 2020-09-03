import Vue from 'vue'
import App from './App.vue'
import router from './krouter'
import store from './kstore'

Vue.config.productionTip = false

new Vue({
  router, // 此处挂上VueRouter实例，this.$router.push(...)
  store,
  render: h => h(App)
}).$mount('#app')
