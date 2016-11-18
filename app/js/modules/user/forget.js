require('user/forget.scss')
require('captcha').default()
require('header').default()
import { bind, validate, val, toast, fetch } from 'tool'

$('.form button').click(() => {
  if (!validate.form('.form')) return;

  fetch('/rest/user/reset', 'POST', { nameOrEmail: val('nameOrEmail'), vcode: val('vcode'), token: $('.vcodeImg').attr('token') }).then(r => {
      toast('重置邮件已发送', 3800, c => {
        location.reload()
      })
    })
    .catch(e => {
      toast(e.msg)
    })
})
