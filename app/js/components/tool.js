//获取querystring中的值
module.exports.query = require('./query').default

//表单验证，单一输入框验证
module.exports.validate = require('./validate')

//信息提示
module.exports.toast = require('./toast').default

//ajax模块
module.exports.fetch = require('./fetch').default

//cookie操作
module.exports.cookies = require('js-cookie')
