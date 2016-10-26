window.$ = window.Zepto = require('npm-zepto')
let host = window.location.href.indexOf('youths.cc') > -1 ? 'http://api2.youths.cc' : 'http://localhost:3030'


export default (url, type, data) => {
  return new Promise(function(resolve, reject) {
    $.ajax({
      url: url.indexOf('http') > -1 ? url : host + url,
      type: type || 'GET',
      data: !!data ? JSON.stringify(data) : '',
      success: function(result) {
        resolve(result)
      },
      error: function(err) {
        // toast('网络连接失败')
        console.log('网络连接失败')
      }
    })
  })
}
