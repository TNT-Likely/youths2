import toast from './toast'
window.$ = window.Zepto = require('npm-zepto')
let host = window.location.href.indexOf('youths.cc') ? 'http://api2.youths.cc' : 'http://localhost:3030'


export default (url, type, data) => {
  return new Promise(function(resolve, reject) {
    $.ajax({
      url: host + url,
      type: type || 'GET',
      data: !!data ? JSON.stringify(data) : '',
      success: function(result) {
        resolve(result)
      },
      error: function(err) {
        toast('网络连接失败')
      }
    })
  })
}
