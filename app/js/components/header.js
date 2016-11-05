window.$ = window.Zepto = require('npm-zepto')
import { fetch, toast } from 'tool'

//监听滚动事件
if ($('header').attr('class').indexOf('static') > -1) {
  $(window).scroll(function() {
    if (document.body.scrollTop > 110) {
      $('.header').removeClass('static')
    } else {
      $('.header').addClass('static')
    }
  })
}

$('#login a').click(() => {
  if (location.pathname == '/user/login') return;
  location.href = '/user/login?from=' + location.href
})

$('#register a').click(() => {
  if (location.pathname == '/user/register') return;
  location.href = '/user/register?from=' + location.href
})

fetch('/rest/user/status').then(r => {
  $('#login,#register').hide()
  $('#info').show()
})

$('#logout').click(() => {
  fetch('/rest/user/logout').then(() => {
    toast('注销成功')
    $('#login,#register').show()
    $('#info').hide()
  })
})
