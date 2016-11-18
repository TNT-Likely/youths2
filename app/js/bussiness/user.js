import { fetch, bind } from 'tool'
import { header } from 'bussiness'

//个人中心导航栏激活状态
$(`[href="${location.pathname}"]`).parent('li').addClass('active')

export default () => {
  return new Promise((resolve, reject) => {
    header().then(r => {
      bind('.email span', r.email)
      bind('.amount span', r.amount)
      resolve(r)
    })
  })
}
