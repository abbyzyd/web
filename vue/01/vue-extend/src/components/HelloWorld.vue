<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button @click="showGlobalNotice">使用全局插件弹框</button>
    <button @click="showDramaticNotice">动态创建弹框</button>
  </div>
</template>

<script>
import create from '@/utils/create'
import Notice from '@/components/Notice'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods: {
    showGlobalNotice () {
      this.$notice.show({
        title: '全局插件弹框', message: '成功', duration: 3000
      })
    },
    showDramaticNotice () {
      create(Notice, {
        title: '动态创建弹框',
        message: '成功',
        duration: 3000
      }).show()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
