import fetch from './fetch'

$(document).on('click', '.vcode .vcodeImg', () => {
  // let self = $(this)
  console.log($(this))
  fetch('/captcha/new').then(r => {
    console.log(self)
    self.css({ color: 'url(r)' })
  })
})
