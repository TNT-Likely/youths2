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

//配置中心
module.exports.config = require('./config').default

//绑定数据
module.exports.bind = require('./bind').default

//获取输入框值
module.exports.val = require('./val').default
