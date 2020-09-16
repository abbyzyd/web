const helloText = require('../index')

test('测试hello world',()=>{
    // const helloworld=require('../index')
    // console.log('helloworld',helloworld)

    const ret=require('../index')
    expect(ret).toBe('Hello World')
})