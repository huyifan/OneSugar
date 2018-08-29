const userSchema = require('../model/user') 
const Logger= require('../public/Logger') 
const Info= require('../public/Info') 
const sysLogger= Logger.getLogger('sys') 
const moment= require('moment') 

exports.create = function(req, res) {	let bean=req.body.user || {} 
	let query=req.body.query || {} 
	sysLogger.info("Update user | bean:",bean) 

	userSchema.create(query,bean) 
	.then((err,result)=> {if(err) return Info.returnErr(res,'error:'+err) return Info.returnSuccess(res,'更新成功',datas)})
 }

exports.find = function(req, res) {	let query=req.body.query || {} 
	let queryObj={} 

	query.keys().map((v,i)=>{ if(query[v])queryObj[v]=query[v] }) 

	sysLogger.info("Find user | queryObj:",queryObj) 

	userSchema.find(query) 
	.then((err,datas)=> Info.returnSuccess(res,'查找成功',datas))
 }

exports.update = function(req, res) {	let bean=req.body.user || {} 
	let query=req.body.query || {} 
	sysLogger.info("Update user | bean:",bean) 

	userSchema.update(query,bean) 
	.then((err,result)=> Info.returnSuccess(res,'更新成功',datas))
 }

exports.delete = function(req, res) {	let query=req.body.query || {} 
	sysLogger.info("remove user | query:",query) 

	userSchema.remove(query) 
	.then((err,result)=> {if(err) return Info.returnErr(res,'error'+err) return Info.returnSuccess(res,'删除成功',null)})
 }

