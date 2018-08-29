/**
 * Created by hugo on 2018/8/17.
 */
const baseBeans = require('./beans')
const fs = require("fs")


isCatalogExistAndMake('application')
isCatalogExistAndMake('application/schema')
isCatalogExistAndMake('application/model')
isCatalogExistAndMake('application/controller')


baseBeans.map((v, i) => {

  let schemaPath = __dirname + '/application/schema/' + v.bean + '.js'
  let modelPath = __dirname + '/application/model/' + v.bean + '.js'
  let controllerPath = __dirname + '/application/controller/' + v.bean + '.js'
  //在app的schema下创建相应的文件
  fs.exists(modelPath, exists => {
    if (!exists) {
      console.log("model文件：" + v.bean + '.js 不存在，正在创建')
      let writable = fs.createWriteStream(modelPath)
      let modelStr = "" +
        "let mongoose = require('mongoose')\n" +
        "let " + v.bean + "Schema = require('../schema/" + v.bean + "')\n" +
        "let " + v.bean + " = mongoose.model('" + v.bean + "', " + v.bean + "Schema)\n" +
        "module.exports = " + v.bean
      writable.write(modelStr)

      writable.end()
    }


  })

  fs.exists(schemaPath, exists => {
    if (!exists) {
      console.log("schema文件：" + v.bean + '.js 不存在，正在创建')
      let writable = fs.createWriteStream(schemaPath)

      writable.write("let mongoose = require('mongoose') \n")
      writable.write("let Schema = mongoose.Schema \n")

      writable.write("let ObjectId = Schema.Types.ObjectId \n")
      writable.write("let Number = Schema.Types.Number \n")

      writable.write("let " + v.bean + "Schema = new mongoose.Schema({ \n")

      let strParams = ""
      let refParams = ""
      let uniParams = ""
      let intParams = ""

      v.intField && v.intField.map((int, i) => {
        intParams += "\t" + int + ": Number(6),\n"
      })

      v.strField && v.strField.map((str, i) => {
        strParams += "\t" + str + ": String,\n"
      })

      v.refField && v.refField.map((ref, i) => {
        let refArr = ref.split('-')
        if (refArr.length === 1)
          refParams += "\t" + ref + ": {type:ObjectId,ref:\'" + ref + "\'},\n"
        else
          refParams += "\t" + refArr[0] + ": {type:ObjectId,ref:\'" + refArr[1] + "\'},\n"

      })

      v.uniField && v.uniField.map((ref, i) => {
        uniParams += "\t" + ref + ": {unique:true,type:String},\n"
      })

      writable.write(uniParams)
      writable.write(intParams)
      writable.write(strParams)
      writable.write(refParams)
      writable.write("})\n")

      writable.write("module.exports =" + v.bean + "Schema")


      writable.end()

    }


  })
  fs.exists(controllerPath, exists => {
    if (!exists) {
      console.log("controller文件：" + v.bean + '.js 不存在，正在创建')
      let writable = fs.createWriteStream(controllerPath)

      writable.write("const " + v.bean + "Schema = require(\'../model/" + v.bean + "\') \n")
      writable.write("const Logger= require(\'../public/Logger\') \n")
      writable.write("const Info= require(\'../public/Info\') \n")
      writable.write("const sysLogger= Logger.getLogger(\'sys\') \n")
      writable.write("const moment= require(\'moment\') \n\n")


      writable.write("exports.create = function(req, res) {" +
        "\tlet bean=req.body." + v.bean + " || {} \n" +
        "\tlet query=req.body.query || {} \n" +
        "\tsysLogger.info(\"Update " + v.bean + " | bean:\",bean) \n\n" +
        "\t" + v.bean + "Schema.create(query,bean) \n" +
        "\t.then((err,result)=> {if(err) return Info.returnErr(res,'error:'+err) return Info.returnSuccess(res,'更新成功',datas)})\n" +
        " }\n\n")

      writable.write("exports.find = function(req, res) {" +
        "\tlet query=req.body.query || {} \n" +
        "\tlet queryObj={} \n\n" +
        "\tquery.keys().map((v,i)=>{ if(query[v])queryObj[v]=query[v] }) \n\n" +
        "\tsysLogger.info(\"Find " + v.bean + " | queryObj:\",queryObj) \n\n" +
        "\t" + v.bean + "Schema.find(query) \n" +
        "\t.then((err,datas)=> Info.returnSuccess(res,'查找成功',datas))\n" +
        " }\n\n")

      writable.write("exports.update = function(req, res) {" +
        "\tlet bean=req.body." + v.bean + " || {} \n" +
        "\tlet query=req.body.query || {} \n" +
        "\tsysLogger.info(\"Update " + v.bean + " | bean:\",bean) \n\n" +
        "\t" + v.bean + "Schema.update(query,bean) \n" +
        "\t.then((err,result)=> Info.returnSuccess(res,'更新成功',datas))\n" +
        " }\n\n")

      writable.write("exports.delete = function(req, res) {" +
        "\tlet query=req.body.query || {} \n" +
        "\tsysLogger.info(\"remove " + v.bean + " | query:\",query) \n\n" +
        "\t" + v.bean + "Schema.remove(query) \n" +
        "\t.then((err,result)=> {if(err) return Info.returnErr(res,'error'+err) return Info.returnSuccess(res,'删除成功',null)})\n" +
        " }\n\n")


      writable.end()

    }


  })
})


function isCatalogExistAndMake(path) {
  let realPath = __dirname + '/' + path
  fs.exists(realPath, exists => {
    if (!exists) {
      console.log('目录' + realPath + '不存在,正在创建……')
      fs.mkdir(realPath, err => {
        if (err) {
          console.log('创建目录' + realPath + '失败')
          return
        }
        console.log('创建目录' + realPath + '成功')
      })
    }

  })
}


