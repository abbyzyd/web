

test('文件名称生成',()=>{
    const src = new (require('../index'))()
    
    // const helloworld=require('../index')
    // console.log('helloworld',helloworld)

    const ret=src.getTestFileName('/abc/class.js')
    console.log('文件名称',ret)
    expect(ret).toBe('/abc/__test__/class.spec.js')
})