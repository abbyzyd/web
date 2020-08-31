import Vue from 'vue'
import App from './App.vue'
import Notice from '@/plugins/notice'

Vue.config.productionTip = false

// 然后通过 USE方法全局注册

Vue.use(Notice)

new Vue({
  render: h => h(App)
}).$mount('#app')
