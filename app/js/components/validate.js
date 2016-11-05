import toast from 'toast'
import fetch from 'fetch'

module.exports.form = obj => {
  let items = $(obj).find('[regex]')
  let result = true
  items.forEach(i => {
    single(i, (msg) => {
      result = false
      return
    })
  })
  return result
}

let single = (obj, error) => {
  let regex = eval($(obj).attr('regex')),
    value = $(obj).val(),
    msg = $(obj).attr('msg')
  if (!regex.test(value)) {
    error(msg)
    toast(msg)
    return false
  }
}

module.exports.single = single

module.exports.exist = field => {
  let aim = $(`[name="${field}"]`),
    value = aim.val(),
    regex = eval(aim.attr('regex')),
    msg = aim.attr('msg'),
    result = true
  if (!regex.test(value)) {
    toast(msg)
    result = false
  } else {
    fetch('/rest/user/exist', 'POST', { key: field, value: value }).then(r => {}).catch(e => {
      toast(`${field=='email'?'邮箱':'用户名'}${value}已被使用`)
      result = false
    })
  }
  return result
}
