let mongoose = require('mongoose') 
let Schema = mongoose.Schema 
let ObjectId = Schema.Types.ObjectId 
let Number = Schema.Types.Number 
let articleSchema = new mongoose.Schema({ 
	author: String,
	title: String,
	content: String,
	zan: String,
	viewNum: String,
	comment: {type: ObjectId,ref:'comment'},
})
module.exports =articleSchema