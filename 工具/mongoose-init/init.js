/**
 * Created by hugo on 2018/8/17.
 */
const baseBeans = require('./beans')
const fs = require("fs")
const util = require('./public/util')

//每次运行前清空application的目录
util.emptyDir('application')

let envPath = __dirname + '/application/conf/env.js'
let appPath = __dirname + '/application/app.js'

isCatalogExistAndMake('application')
isCatalogExistAndMake('application/conf')
isCatalogExistAndMake('application/test')
isCatalogExistAndMake('application/conf/router')
isCatalogExistAndMake('application/schema')
isCatalogExistAndMake('application/model')
isCatalogExistAndMake('application/controller')

if (!fs.existsSync(envPath)) {
  let writable = fs.createWriteStream(envPath)
  writable.write(fs.readFileSync('./tpl/env.js').toString())
  writable.end()
}

if (!fs.existsSync(appPath)) {
  let writable = fs.createWriteStream(appPath)
  writable.write(fs.readFileSync('./tpl/app.js').toString())
  writable.end()
}


baseBeans.map((v, i) => {

  let schemaPath = __dirname + '/application/schema/' + v.bean + '.js'
  let modelPath = __dirname + '/application/model/' + v.bean + '.js'
  let controllerPath = __dirname + '/application/controller/' + v.bean + '.js'
  let routerPath = __dirname + '/application/conf/router/' + v.bean + '.js'

  fs.exists(routerPath, exists => {
    if (!exists) {
      console.log("router：" + v.bean + '.js 不存在，正在创建')
      let writable = fs.createWriteStream(routerPath)
      let text = fs.readFileSync('./tpl/router.js').toString();
      text = text.replace(new RegExp('XXX', "g"), v.bean);
      writable.write(text)
      writable.end()
    }
  })


  fs.exists(modelPath, exists => {
    if (!exists) {
      console.log("model文件：" + v.bean + '.js 不存在，正在创建')
      let writable = fs.createWriteStream(modelPath)
      let text = fs.readFileSync('./tpl/model.js').toString();
      text = text.replace(new RegExp('XXX', "g"), v.bean);
      writable.write(text)
      writable.end()
    }
  })

  fs.exists(controllerPath, exists => {
    if (!exists) {
      console.log("controller文件：" + v.bean + '.js 不存在，正在创建')
      let writable = fs.createWriteStream(controllerPath)
      let text = fs.readFileSync('./tpl/controller.js').toString();
      text = text.replace(new RegExp('XXX', "g"), v.bean);
      writable.write(text)
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
        intParams += "\t" + int + ": Number,\n"
      })

      v.strField && v.strField.map((str, i) => {
        strParams += "\t" + str + ": String,\n"
      })

      v.refField && v.refField.map((ref, i) => {
        let refArr = ref.split('-')
        if (refArr.length === 1)
          refParams += "\t" + ref + ": {type: ObjectId,ref:\'" + ref + "\'},\n"
        else
          refParams += "\t" + refArr[0] + ": {type: ObjectId,ref:\'" + refArr[1] + "\'},\n"

      })

      v.uniField && v.uniField.map((ref, i) => {
        uniParams += "\t" + ref + ": {unique: true,type: String},\n"
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

})


function isCatalogExistAndMake(path) {
  let realPath = __dirname + '/' + path
  if (!fs.existsSync(realPath)) {
    console.log('目录' + realPath + '不存在,正在创建……')
    fs.mkdirSync(realPath)
    console.log('创建目录' + realPath + '成功')
  }

}


