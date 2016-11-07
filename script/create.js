import fs from 'fs'
import path from 'path'

let writeFile = function(filePath, contents) {
  let dirPath = path.dirname(filePath)
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath)
  }
  fs.writeFileSync(filePath, contents)
}

export default () => {
  let argv = require('minimist')(process.argv.slice(2)),
    m = argv.m,
    root = path.resolve(__dirname, '../app'),
    htmlData = `<p>${m} page</p><link href="/style/${m}.css" rel='stylesheet' />
<script src="/script/${m}.js"></script>`,
    jsData = `require('${m}.scss')`

  //检查模块名是否为空
  if (!m) {
    console.log('模块名不能为空!')
    return
  }

  //检查模块名数据类型
  if (typeof m != 'string') {
    console.log('模块名必须为字符串!')
    return
  }

  //生成html模块
  writeFile(`${root}/views/modules/${m}.html`, htmlData)

  //生成scss模块
  writeFile(`${root}/scss/pages/${m}.scss`, '')

  //生成js模块
  writeFile(`${root}/js/modules/${m}.js`, jsData)

  console.log(`模块${m}生成成功`)
}
