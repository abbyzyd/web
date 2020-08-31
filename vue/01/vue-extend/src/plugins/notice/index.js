const noticeTemp = require('./Notice.vue').default // cli3.0以后引入vue模板需要default

const Notice = {} // 定义插件对象

Notice.install = (Vue, options) => { // Vue的install方法，用于定义vue插件
  // 如果存在notice 不重复创建DOM
  if (document.getElementsByClassName('.notice-status').length) return

  // 组件实例创建
  const Ctor = Vue.extend(noticeTemp)
  const vm = new Ctor({ propsData: options }).$mount()

  // dom追加
  document.body.appendChild(vm.$el)
  // 获取组件实例

  Vue.prototype.$notice = { // 在Vue的原型上添加实例方法，以全局调用
    show (options) {
      console.log(options)
      vm.isShow = true
      vm.title = options.title
      vm.message = options.message
      setTimeout(this.hide, vm.duration)
    },
    hide () {
      vm.isShow = false
    }
  }
}
// 导出Notice
export default Notice
