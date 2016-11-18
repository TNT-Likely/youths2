require('user/reset.scss')
require('captcha').default()
require('header').default()
import { bind, validate, val, toast, fetch, query } from 'tool'

$('.form button').click(() => {
  if (!validate.form('.form')) return;

  if (val('password') != val('password2')) {
    toast('两次密码输入不一致')
    return
  }

  fetch('/rest/user/reset/verify', 'POST', { password: val('password'), uid: query('uid'), token: query('token') }).then(r => {
      toast('密码重置成功,3秒后刷新', 3800, c => {
        location.reload()
      })
    })
    .catch(e => {
      toast(e.msg || '重置密码失败')
    })
})
