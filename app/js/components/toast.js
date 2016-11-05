class toast {
  constructor(msg) {
    require('../../scss/components/_toast.scss')
    if (typeof msg != 'string') return;
    this.msg = msg
    this.init()
  }

  init() {
    let html = '<div class="toast">'
    html += this.msg
    html += '<div>'
    this.html = html
    this.el = $('.toast')
    this.show()
  }

  show() {
    if (this.el.length > 0) this.el.remove();
    $('body').append(this.html)
    let self = this
    setTimeout(() => {
      self.hide()
    }, 1800)
  }

  hide() {
    $('.toast').hide()
  }
}

export default toast
