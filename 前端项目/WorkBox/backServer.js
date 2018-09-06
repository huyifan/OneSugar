/**
 * Created by hugo on 2018/8/31.
 */
const Koa = require('koa')
const KoaRouter = require('koa-router');
const bodyParser = require('koa-bodyparser');
const router = new KoaRouter();
const cors = require('koa2-cors');

const app = new Koa()
let num = 0

let mockData1 = [
  {name: 'hugo5555', age: '13'},
  {name: 'hugo1', age: '14'},
  {name: 'hugo2', age: '15'},
  {name: 'hugo3', age: '16'},
  {name: 'hugo4', age: '17'},
]

let mockData2 = [
  {name: 'test44', age: '13'},
  {name: 'test1', age: '14'},
  {name: 'test2', age: '15'},
  {name: 'test3', age: '16'},
  {name: 'test4', age: '17'},
]


app.use(bodyParser());

app.use(cors())
app.use(router.routes());

//签到接口
router.get('/CAPI/sign', async (ctx, next) => {
  console.log("ctx", ctx.request)
  return (ctx.body = {code: 200})
});

//签到接口
router.get('/CAPI/getData', async (ctx, next) => {
  console.log("ctx", ctx.request.body)
  let data=require('./mock')

  if (ctx.query.page === '1') {
    return (ctx.body = {code: 200, data: data.mockData1})
    next()
  }
  return (ctx.body = {code: 200, data: data.mockData2})
  console.log("我还是会被执行到")
});


app.listen(3344)

console.log("server start on 3344")
