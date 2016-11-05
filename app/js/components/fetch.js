import { toast, cookies } from 'tool'
window.$ = window.Zepto = require('npm-zepto')
let host = window.location.href.indexOf('youths.cc') > -1 ? 'http://a.youths.cc' : 'http://localhost:3030'


export default (url, type, data) => {
  return new Promise(function(resolve, reject) {
    $.ajax({
      url: host + url,
      type: type || 'GET',
      headers: { 'Content-Type': 'application/json', 'accessToken': cookies.get('accessToken') },
      data: !!data ? JSON.stringify(data) : '',
      success: function(result) {
        if (result.code == '0')
          resolve(result.data)
        else
          reject(result)
      },
      error: function(err) {
        toast('网络连接失败')
      }
    })
  })
}
