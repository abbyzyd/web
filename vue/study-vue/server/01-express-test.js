const express = require('express')
const server = express()

server.get('/',(req,res)=>{
    res.send('<strong>Hellowwwwww World</strong>')
})
server.listen(80, () => {
    console.log('server running!')
})