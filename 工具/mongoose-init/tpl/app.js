/**
 * Created by hugo on 2018/8/29.
 */
const envConf = require('./conf/env')
const fs = require('fs')
const sysLogger = require('../public/Logger').getLogger('sys')

const util = require('../public/util')
const env = util.getEnv(process.env.NODE_ENV, envConf)
const localPort = env.localPort || 3004  // 设置端口号：3000
const mongoDBUrl = env.mongoDBUrl || 'mongodb://localhost:27017/express-init'

const express = require('express')   // 加载express模块
const mongoose = require('mongoose') //mongoDB的连接工具
const bodyParser = require('body-parser')

const app = express()  // 启动Web服务器

app.use(bodyParser.json()) //解析body里的报文为json
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}))
mongoose.connect(mongoDBUrl, {useNewUrlParser: true})  // 连接mongodb本地数据库


let routers = fs.readdirSync('./conf/router')

//加载路由
routers.map((v, i) => {
  return require('./conf/router/' + v)(app)
})


//解决跨域问题
app.all('*', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS")
  res.header("Access-Control-Allow-Headers", "Origin, No-Cache, X-Requested-With, If-Modified-Since, Pragma, Last-Modified, Cache-Control, Expires, Content-Type, X-E4M-With")
  //有时候为了防止网页被别人的网站iframe，我们可以通过在服务端设置HTTP头部中的X-Frame-Options信息。
  res.header("X-Frame-Options", "SAMEORIGIN")
  next()
})


app.listen(localPort)  // 监听端口
sysLogger.info('服务已启动：' + localPort)