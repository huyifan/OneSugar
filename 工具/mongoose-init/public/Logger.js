/**
 * Created by hugo on 2018/3/19.
 */
const log4js = require('log4js')

log4js.configure({
  appenders: {
    stdout: {
      type: 'stdout',
      layout: {
        type: 'pattern',
        pattern: "[%d{yyyy-mm-dd hh:mm:ss}][%p] %h <%c> [==%m==]%n",
      }
    },//设置是否在控制台打印日志
    req: {//请求日志
      type: 'dateFile',
      filename: '../logs/',
      pattern: 'req-yyyy-MM-dd.log',
      alwaysIncludePattern: true,
      layout: {
        type: 'pattern',
        pattern: "[%d{yyyy-mm-dd hh:mm:ss}][%p] %h <%c> [==%m==]%n",
      }
    },
    err: {//错误日志
      type: 'dateFile',
      filename: '../logs/',
      maxLogSize: 31457280, //3M
      pattern: 'err-yyyy-MM-dd.log',
      keepFileExt: true,
      alwaysIncludePattern: true,
      layout: {
        type: 'pattern',
        pattern: "[%d{yyyy-mm-dd hh:mm:ss}][%p] %h <%c> [==%m==]%n",
      }
    },
    sys: { //系统操作日志
      type: 'dateFile',
      filename: '../logs/',
      maxLogSize: 61457280, //6M
      pattern: 'info-yyyy-MM-dd.log',
      keepFileExt: true,
      alwaysIncludePattern: true,
      layout: {
        type: 'pattern',
        pattern: "[%d{yyyy-mm-dd hh:mm:ss}][%p] %h <%c> [==%m==]%n",
      }
    },
  },
  categories: {
    default: {appenders: ['req', 'stdout'], level: 'debug'},
    err: {appenders: ['err', 'stdout'], level: 'error'},
    sys: {appenders: ['sys', 'stdout'], level: 'info'},
    req: {appenders: ['req', 'stdout'], level: 'info'},
  }
})

exports.getLogger = (name) => {
  return log4js.getLogger(name || 'default')
}

exports.getLogId = () => {
  const mydate = new Date()
  return "cms" + mydate.getDay() + mydate.getHours() +
    mydate.getMinutes() + mydate.getSeconds() + mydate.getMilliseconds()
}


exports.useLogger = function (app, logger) {//用来与express结合
  app.use(log4js.connectLogger(logger || log4js.getLogger('default'), {
    format: ':remote-addr 【:method :url :status】 :response-timems|| :referrer HTTP/:http-version :user-agent'//自定义输出格式
  }))
}