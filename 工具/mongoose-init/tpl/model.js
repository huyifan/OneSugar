/**
 * Created by hugo on 2018/8/29.
 */
let mongoose = require('mongoose')
let XXXSchema = require('../schema/XXX')
let XXX = mongoose.model('XXX', XXXSchema)
module.exports = XXX