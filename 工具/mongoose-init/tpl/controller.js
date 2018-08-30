/**
 * Created by hugo on 2018/8/29.
 */
const XXXSchema = require('../model/XXX')
const Logger = require('../../public/Logger')
const Info = require('../../public/Info')
const sysLogger = Logger.getLogger('sys')
const moment = require('moment')

exports.create = function (req, res) {
  let bean = req.body.XXX || {}
  sysLogger.info("Create XXX | bean:", bean)

  if (!bean) {
    return Info.returnErr(res, '请求体为null')
  }

  XXXSchema.create(bean)
    .then((err, result) => {
      if (err)
        return Info.returnErr(res, 'error:' + err)

      return Info.returnSuccess(res, '更新成功', result)
    })
}

exports.find = function (req, res) {
  let query = req.body.query || {}
  let queryObj = {}


  sysLogger.info("Find XXX | query:", query)

  Object.keys(query).map((v, i) => {
    if (query[v]) queryObj[v] = query[v]
  })


  XXXSchema.find(query)
    .then((err, datas) => Info.returnSuccess(res, '查找成功', datas))
}

exports.update = function (req, res) {
  let bean = req.body.XXX || {}
  let query = req.body.query || {}
  sysLogger.info("Update XXX | bean:", bean)

  XXXSchema.update(query, bean)
    .then((err, result) => Info.returnSuccess(res, '更新成功', result))
}

exports.delete = function (req, res) {
  let query = req.body.query || {}
  sysLogger.info("remove XXX | query:", query)

  XXXSchema.remove(query)
    .then((err, result) => {
      if (err) return Info.returnErr(res, 'error' + err)
      return Info.returnSuccess(res, '删除成功', null)
    })
}

