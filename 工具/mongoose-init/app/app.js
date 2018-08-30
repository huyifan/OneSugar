/**
 * Created by hugo on 2018/8/29.
 */
const env = require('./conf/env')
var localServerPort = env.localPort || 3004  // 设置端口号：3000
const express = require('express')   // 加载express模块
const mongoose = require('mongoose') //mongoDB的连接工具
const sysLogger = log4js.getLogger('sys')

const app = express()  // 启动Web服务器

app.use(bodyParser.json()) //解析body里的报文为json

//解决跨域问题
app.all('*', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS")
  res.header("Access-Control-Allow-Headers", "Origin, No-Cache, X-Requested-With, If-Modified-Since, Pragma, Last-Modified, Cache-Control, Expires, Content-Type, X-E4M-With")
  //有时候为了防止网页被别人的网站iframe，我们可以通过在服务端设置HTTP头部中的X-Frame-Options信息。
  res.header("X-Frame-Options", "SAMEORIGIN")
  next()
})



app.listen(localServerPort)  // 监听端口
