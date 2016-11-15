require('user/verify.scss')
require('header').default()
import { toast, fetch, validate, query, cookies } from 'tool'

fetch('/rest/user/verify', 'POST', { uid: query('uid'), token: query('token') }).then(r => {
  $('.success').show()
}).catch(e => {
  // $('.failed p').text(e.msg)
  $('.failed').show()
})
