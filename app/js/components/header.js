window.$ = window.Zepto = require('npm-zepto')

//监听滚动事件
$(window).scroll(function() {
  if (document.body.scrollTop > 110) {
    $('.header').addClass('static')
  } else {
    $('.header').removeClass('static')
  }
})
