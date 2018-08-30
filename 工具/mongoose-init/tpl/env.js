/**
 * Created by hugo on 2018/8/29.
 * localPort-前端访问端口
 * back-后台服务
 */

//生产配置
exports.prod = {
  "localPort": '3004',
  "mongoDBUrl": 'mongodb://localhost:27017/express-init',
  "backHost": "19.4.160.19",
  "backPort": "20960",
}

//开发配置
exports.dev = {
  "localPort": '3004',
  "mongoDBUrl": 'mongodb://localhost:27017/express-init',
  "backHost": "19.4.160.19",
  "backPort": "20960",
}

//测试配置
exports.test = {
  "localPort": '3004',
  "mongoDBUrl": 'mongodb://localhost:27017/express-init',
  "backHost": "19.4.160.19",
  "backPort": "20960",
}
