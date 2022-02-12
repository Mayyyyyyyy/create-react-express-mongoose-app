const mongoose = require('mongoose')
const config = require('../config')

mongoose.connect(config.mongodb_URI,err=>{
  if(err){
    console.log('connect database fail', err)
  }
  console.log('connect database successfully', )
})

module.exports = mongoose