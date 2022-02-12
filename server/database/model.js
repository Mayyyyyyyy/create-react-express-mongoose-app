const mongoose = require('./connectDB')
const UserSchema = require('./shema')

module.exports = mongoose.model('User',UserSchema)