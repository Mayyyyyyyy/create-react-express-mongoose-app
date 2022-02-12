const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const router = require('./router')
const config = require('./config')

app.use(bodyParser.json())
app.use(cors())
app.use('/',router)

app.listen(config.port,err=>{
  if(err){
    console.log('connect server fail', err)
  }
  console.log(`server is running at http://localhost:${config.port}`)
})