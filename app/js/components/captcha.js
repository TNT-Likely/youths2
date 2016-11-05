import fetch from './fetch'

let vcode = null

let getCaptcha = () => {
  fetch('/captcha/new').then(r => {
    vcode.attr('token', r.token).attr('style', `background:url(${r.data}) no-repeat`)
  })
}

export default (selector) => {
  if (typeof selector != 'string') selector = '';
  vcode = $(selector || '.vcode .vcodeImg')

  if (vcode.length > 0) {

    getCaptcha()

    vcode.on('click', () => {
      getCaptcha()
    })
  }
}
