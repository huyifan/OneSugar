/**
 * Created by hugo on 2018/8/28.
 */
const Koa = require('koa')
const {resolve} = require('path')
const serve = require('koa-static')
const app = new Koa()

app.use(serve(resolve(__dirname, './')))

app.listen(4466)