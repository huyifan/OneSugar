/**
 * Created by hugo on 2018/8/31.
 */
const Koa = require('koa')
const KoaRouter = require('koa-router');
const bodyParser = require('koa-bodyparser');
const router = new KoaRouter();
const cors = require('koa2-cors');

const app = new Koa()


app.use(bodyParser());

app.use(cors())
app.use(router.routes());

//签到接口
router.get('/CAPI/sign', async (ctx, next) => {
  console.log("ctx", ctx.request.body)
  return (ctx.body = {code: 200})
});

app.listen(3344)

console.log("server start on 3344")
