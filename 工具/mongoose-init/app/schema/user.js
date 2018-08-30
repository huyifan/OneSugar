let mongoose = require('mongoose') 
let Schema = mongoose.Schema 
let ObjectId = Schema.Types.ObjectId 
let Number = Schema.Types.Number 
let userSchema = new mongoose.Schema({ 
	email: {unique: true,type: String},
	zan: Number(6),
	password: String,
	access: String,
	name: String,
	real_name: String,
	nick_name: String,
	token: String,
	achievement: {type: ObjectId,ref:'achievement'},
	followers: {type: ObjectId,ref:'user'},
	following: {type: ObjectId,ref:'user'},
})
module.exports =userSchema