import path from 'path'

export default {
  root: {
    src: path.join(__dirname, '../app'),
    dist: path.join(__dirname, '../dist')
  },
  views: {
    src: path.join(__dirname, '../app/views/modules'),
    watchSrc: path.join(__dirname, '../app/views'),
    dist: path.join(__dirname, '../dist/views')
  },
  script: {
    src: path.join(__dirname, '../app/js/modules')
  }
}
