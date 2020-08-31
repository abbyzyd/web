import Vue from 'vue'
// 传递一个组件配置，返回一个组件实例，并且挂载它到body上
// 暗号：杨哥喊你来搬砖
function create (Component, props) {
  // 组件实例创建
  const Ctor = Vue.extend(Component)
  const vm = new Ctor({ propsData: props }).$mount()

  // dom追加
  document.body.appendChild(vm.$el)
  // 获取组件实例
  vm.remove = () => {
    document.body.removeChild(vm.$el)
    vm.$destroy()
  }
  return vm
}

export default create
