/**
 * Created by hugo on 2018/8/29.
 */
const fs = require('fs')
const emptyDir = (fileUrl) => {

  let files = fs.readdirSync(fileUrl);//读取该文件夹

  files.forEach(function (file) {

    let stats = fs.statSync(fileUrl + '/' + file);

    if (stats.isDirectory()) {

      emptyDir(fileUrl + '/' + file);

    } else {

      fs.unlinkSync(fileUrl + '/' + file);

      console.log("删除文件" + fileUrl + '/' + file + "成功");

    }

  });
}

const getEnv = (envStr, env) => {
  switch (envStr) {
    case 'prod':
      return env.prod
      break
    case 'dev':
      return env.dev
      break
    case 'test':
      return env.test
      break
    default:
      return env.dev

      break
  }
}

module.exports = {
  emptyDir: emptyDir,
  getEnv: getEnv
}