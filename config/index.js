import path from 'path'

export default {
  port: {
    dev: 8090,
    prod: 3020
  },
  root: {
    src: path.join(__dirname, '../app'),
    dist: path.join(__dirname, '../dist')
  },
  views: {
    src: path.join(__dirname, '../app/views/modules'),
    watchSrc: path.join(__dirname, '../app/views'),
    dist: path.join(__dirname, '../dist')
  },
  script: {
    src: path.join(__dirname, '../app/js/modules')
  }
}
