let mongoose = require('mongoose')
let articleSchema = require('../schema/article')
let article = mongoose.model('article', articleSchema)
module.exports = article