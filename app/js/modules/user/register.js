require('user/register.scss')
require('captcha').default()
require('header').default()
import { toast, fetch, validate, query, cookies, val } from 'tool'

$(document).on('blur', '[name="username"]', () => {
  validate.exist('username')
})

$(document).on('blur', '[name="email"]', () => {
  validate.exist('email')
})

$('.form button').click(() => {
  if (!validate.form('.form') || !validate.exist('username') || !validate.exist('email')) return;
  if (val('password') != val('password2')) {
    toast('两次密码输入不一致')
  } else {
    fetch('/rest/user/register', 'POST', { username: val('username'), email: val('email'), password: val('password'), vcode: val('vcode'), token: $('.vcodeImg').attr('token') }).then(r => {
        toast('注册成功,登录邮箱激活', 3800)
        setTimeout(function() {
            if (!!query('from')) {
              location.href = query('from')
            } else {
              location.reload()
            }
          }, 5000)
          // cookies.set('accessToken', r.token, { expires: 7, domain: '.youths.cc' })
          // location.reload()
      })
      .catch(e => {
        if (e.code == 40607) {
          toast('验证码错误')
        } else {
          toast('注册失败')
        }
      })
  }
})
