import { fetch, bind } from 'tool'
import { header } from 'bussiness'

export default () => {
  return new Promise((resolve, reject) => {
    header().then(r => {
      bind('.email span', r.email)
      bind('.amount span', r.amount)
      resolve(r)
    })
  })
}
