const mongoose = require('./connectDB')

const UserSchema = mongoose.Schema({
  username:String
})

module.exports = UserSchema