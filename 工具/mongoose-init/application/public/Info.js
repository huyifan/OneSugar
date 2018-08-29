/**
 * Created by hugo on 2018/3/19.
 */
const log4js = require('../../public/untils/Logger')
const sysLogger = log4js.getLogger('sys')

exports.returnErrWithCode = (res, code, msg) => {
  let resp = {
    status: code,
    statusText: msg,
    data: null
  }

  sysLogger.error("error-return:" + resp)

  return res.jsonp(resp)
}

exports.returnErr = (res, msg) => {
  return this.returnErrWithCode(res, 299, msg)
}

exports.returnSuccessWithCode = (res, code, msg, data) => {

  let resp = {
    status: code,
    statusText: msg,
    data: data
  }
  sysLogger.info("success-return:" + resp)
  return res.jsonp(resp)
}

exports.returnSuccess = (res, msg, data) => {
  return this.returnSuccessWithCode(res, 200, msg, data)
}


exports.returnSuccessExport = (res, code, msg, result) => {
  res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
  res.setHeader("Content-Disposition", "attachment; filename=" + "report.xlsx");
  res.end(result, 'binary');
}




