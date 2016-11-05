require('../../../scss/pages/user/login.scss')
require('header')
import { toast, fetch, validate, query, cookies } from 'tool'

let val = (field) => {
  return $(`[name=${field}]`).val()
}

$('.form button').click(() => {
  if (!validate.form('.form')) return;
  let name = val('username'),
    password = val('password'),
    domain = window.location.href.indexOf('youths.cc') > -1 ? '.youths.cc' : 'localhost'

  fetch('/rest/user/login', 'POST', { nameOrEmail: val('username'), password: val('password') }).then(r => {
      toast('登录成功')
      setTimeout(() => {
        if (!!query('form')) {
          location.href = query('from')
        } else {
          location.reload()
        }
      }, 5000)
      cookies.set('accessToken', r.accessToken, { expires: 7, domain: domain })
    })
    .catch(e => {
      toast(e.msg)
    })
})
