window.$ = window.Zepto = require('npm-zepto')
import { fetch, toast, query, config } from 'tool'

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

$('#logout').click(() => {
  fetch('/rest/user/logout').then(() => {
    toast('注销成功')
    if (config.needLogin.indexOf(location.pathname) > -1) location.href = '/'
  })
})

export default () => {
  return new Promise((resolve, reject) => {
    fetch('/rest/user/status').then(r => {
      //显示用户信息
      $('#info').show()

      //已登录则不可登录、注册
      if (config.mustLogout.indexOf(location.pathname) > -1) {
        location.href = query('from') || '/'
      } else {
        //用户已登陆回调
        resolve(r);
      }
    }).catch(e => {
      //显示登陆注册
      $('#login,#register').show()

      //登录验证(未登录去登录)
      if (config.needLogin.indexOf(location.pathname) > -1) {
        location.href = '/user/login?from=' + location.href
      } else {
        reject(e);
      }
    })
  })
}
