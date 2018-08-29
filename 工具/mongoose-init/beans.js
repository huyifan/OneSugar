/**
 * Created by hugo on 2018/8/17.
 */
let beans = [
  {
    bean: 'user',
    uniField: ['email'],
    strField: ['password', 'access', 'name', 'real_name', 'nick_name', 'token',],
    intField: ['zan'],
    refField: ['achievement', 'followers-user', "following-user"],
  }, {
    bean: 'article',
    strField: ['author', 'title', 'content', 'zan', 'viewNum'],
    refField: ['comment']
  }
]

module.exports = beans