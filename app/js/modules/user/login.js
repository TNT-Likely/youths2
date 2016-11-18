require('user/login.scss')
require('header').default()
import { toast, fetch, validate, query, cookies, val } from 'tool'

$('.form button').click(() => {
  if (!validate.form('.form')) return;
  let name = val('username'),
    password = val('password'),
    domain = window.location.href.indexOf('youths.cc') > -1 ? '.youths.cc' : 'localhost'

  fetch('/rest/user/login', 'POST', { nameOrEmail: val('username'), password: val('password') }).then(r => {
      toast('登录成功')
      cookies.set('accessToken', r.accessToken, { expires: 7, domain: domain })
      if (!!query('from')) {
        location.href = query('from')
      } else {
        location.reload()
      }
    })
    .catch(e => {
      toast(e.msg)
    })
})
