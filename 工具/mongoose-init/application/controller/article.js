/**
 * Created by hugo on 2018/8/29.
 */
const articleSchema = require('../model/article')
const Logger = require('../../public/Logger')
const Info = require('../../public/Info')
const sysLogger = Logger.getLogger('sys')
const moment = require('moment')

exports.create = function (req, res) {
  let bean = req.body.article || {}
  sysLogger.info("Create article | bean:", bean)

  if (!bean) {
    return Info.returnErr(res, '请求体为null')
  }

  articleSchema.create(bean)
    .then((err, result) => {
      if (err)
        return Info.returnErr(res, 'error:' + err)

      return Info.returnSuccess(res, '更新成功', result)
    })
}

exports.find = function (req, res) {
  let query = req.body.query || {}
  let queryObj = {}


  sysLogger.info("Find article | query:", query)

  Object.keys(query).map((v, i) => {
    if (query[v]) queryObj[v] = query[v]
  })


  articleSchema.find(query)
    .then((err, datas) => Info.returnSuccess(res, '查找成功', datas))
}

exports.update = function (req, res) {
  let bean = req.body.article || {}
  let query = req.body.query || {}
  sysLogger.info("Update article | bean:", bean)

  articleSchema.update(query, bean)
    .then((err, result) => Info.returnSuccess(res, '更新成功', result))
}

exports.delete = function (req, res) {
  let query = req.body.query || {}
  sysLogger.info("remove article | query:", query)

  articleSchema.remove(query)
    .then((err, result) => {
      if (err) return Info.returnErr(res, 'error' + err)
      return Info.returnSuccess(res, '删除成功', null)
    })
}

