/**
 * Created by hugo on 2018/8/29.
 */
const XXXController = require('../../controller/XXX')
module.exports = function (app) {
  app.post('/XXX/create', XXXController.create)
  app.post('/XXX/find', XXXController.find)
  app.post('/XXX/update', XXXController.update)
  app.post('/XXX/delete', XXXController.delete)
}