import toast from 'toastr'

let info = (msg) => {
  toast(msg)
}

let errorFun = (msg) => {
  toast('错误', msg, 'error')
}

export default info

export let error = errorFun
