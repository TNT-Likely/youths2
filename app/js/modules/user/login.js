require('../../../scss/pages/user/login.scss')
require('captcha').default()
import toast from 'toast'
import fetch from 'fetch'

$(document).on('blur', '[name="username"]', () => {
  let username = $('[name="username"]').val()
  fetch('/rest/user/exist', 'POST', { key: 'username', value: username }).then(r => {
    console.log(r)
  }).catch(e => {
    toast(`用户名${username}已被使用`)
  })
})

$(document).on('blur', '[name="email"]', () => {
  let email = $('[name="email"]').val()
  fetch('/rest/user/exist', 'POST', { key: 'email', value: email }).then(r => {
    console.log(r)
  }).catch(e => {
    toast(`邮箱${email}已被使用`)
  })
})
