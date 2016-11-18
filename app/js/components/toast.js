class toast {
  constructor(msg, time, callback) {
    require('../../scss/components/_toast.scss')
    if (typeof msg != 'string') return;
    this.msg = msg
    if (typeof time == 'function') {
      this.callback = time
    } else {
      this.time = time || 2800
      this.callback = callback
    }
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
      if (typeof self.callback == 'function') self.callback()
    }, this.time)
  }

  hide() {
    $('.toast').hide()
  }
}

//msg[required],time[option],callback[option]
export default (msg, time, callback) => {
  return new toast(msg, time, callback)
}
