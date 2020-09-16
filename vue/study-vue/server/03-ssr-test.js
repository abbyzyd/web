const express = require('express')
const server = express()
const Vue=require('vue')
const {createRenderer}=require('vue-server-renderer')
const renderer=createRenderer()

server.get('/',(req,res)=>{
    const app=new Vue({
        template:'<div>{{msg}}</div>',
        data(){
            return{
                msg:'Hello Vue SSR'
            }
        }
    })
    renderer.renderToString(app).then((html)=>{
        // console.log(html)
        res.send(html)
    }).catch((err)=>{
        res.status(500)
        res.send('Internal Error,500')
    })
    
})
server.listen(80, () => {
    console.log('server running!')
})