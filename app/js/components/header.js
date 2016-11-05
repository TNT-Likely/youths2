window.$ = window.Zepto = require('npm-zepto')
import fetch from 'fetch'

//监听滚动事件
if (location.pathname == '/') {
  $(window).scroll(function() {
    if (document.body.scrollTop > 110) {
      $('.header').addClass('static')
    } else {
      $('.header').removeClass('static')
    }
  })
}

$('#login').click(() => {
  if (location.pathname == '/user/login') return;
  location.href = '/user/login?from=' + location.href
})

$('#register').click(() => {
  if (location.pathname == '/user/register') return;
  location.href = '/user/register?from=' + location.href
})

fetch('/rest/user/status').then(r => {
  $('#login,#register').hide()
})
