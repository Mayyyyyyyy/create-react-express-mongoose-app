const express = require('express')
const router = express.Router()
const request = require('request')
const actions = require('./database/action')
const config = require('./config')

router.post('/message',(req,res)=>{
  request(config.server_URI,()=>{
    actions.findUser(req,res)
  })
 
})

module.exports = router