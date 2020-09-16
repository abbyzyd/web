<template>
  <div class="hello">
    <h1>登录页面</h1>
    用户名：<input type="text" v-model="username" />
    密码：<input type="text" v-model="password" />
    <button @click="handleSubmit">提交</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

interface RequestData {
  username: string;
  password: string;
}

type Vality = (data: RequestData) => boolean
type ValityFail = (data: RequestData) => void
const validata = (data: RequestData): boolean => {
  if (data.username === '') {
    return false
  }
  if (data.password === '') {
    return false
  }
  console.log('验证通过')
  return true
}
function verify (vality: Vality, valityFail: ValityFail) {
  return (target: any, name: string, descriptor: any) => {
    const oldValue = descriptor.value
    descriptor.value = function (requestData: RequestData) {
      // 验证处理
      if (!vality(requestData)) {
        // 验证失败处理
        valityFail(requestData)
        return
      }
      return oldValue.apply(this, requestData)
    }
    return descriptor
  }
}



@Component
export default class HelloWorld extends Vue {
 
  username = '';
  password = '';

  @verify(validata, () => console.log('验证失败'))
  submit (requestData: RequestData) {
    console.log('调用提交接口')
  }

  handleSubmit () {
    const data = {
      username: this.username,
      password: this.password
    }
    this.submit(data)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
