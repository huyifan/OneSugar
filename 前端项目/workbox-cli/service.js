/**
 * Created by hugo on 2018/9/3.
 */
const Koa = require('koa')
const {resolve} = require('path')
const serve = require('koa-static')

const app = new Koa()

app.use(serve(resolve(__dirname, './')))

app.listen(4455)

console.log("server start on 4455")
