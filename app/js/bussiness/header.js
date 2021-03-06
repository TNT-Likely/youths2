import { fetch, toast, query, config, bind } from 'tool'
 
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

    //需要登录的页面跳回首页
    if (config.needLogin.indexOf(location.pathname) > -1) location.href = '/'

    //不需要登录的页面刷新
    else location.reload()
  })
})

export default () => {
  return new Promise((resolve, reject) => {
    fetch('/rest/user/status').then(r => {
      //设置用户名
      bind('#info>a', r.username)

      //显示用户信息
      $('#info').show()

      //已登录则不可登录、注册
      if (config.mustLogout.indexOf(location.pathname) > -1) {
        location.href = query('from') || '/'
      } else {
        //用户已登录回调
        resolve(r);
      }
    }).catch(e => {
      //显示登录注册
      $('#login,#register').show()

      //登录验证(未登录去登录)
      if (config.needLogin.indexOf(location.pathname) > -1) {
        location.href = '/user/login?from=' + location.href
      } 
      // else {
      //   reject(e);
      // }
    })
  })
}
