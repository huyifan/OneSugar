let mongoose = require('mongoose')
let userSchema = require('../schema/user')
let user = mongoose.model('user', userSchema)
module.exports = user