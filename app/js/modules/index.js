import fetch from 'fetch'
import _ from 'lodash'
import echarts from 'echarts/lib/echarts'
// 引入柱状图
require('echarts/lib/chart/bar');
// 引入提示框和标题组件
require('echarts/lib/component/tooltip');
require('echarts/lib/component/title')

require('../../scss/pages/index.scss')

let myChart = echarts.init(document.getElementById('main'))

myChart.setOption({
  title: { text: 'ECharts 入门示例' },
  tooltip: {},
  xAxis: {
    data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
  },
  yAxis: {},
  series: [{
    name: '销量',
    type: 'bar',
    data: [5, 20, 36, 10, 10, 20]
  }]
})

fetch('/nba/stats/leagueleaders?LeagueID=00&PerMode=PerGame&Scope=S&Season=2016-17&SeasonType=Pre+Season&StatCategory=PTS').then(r => {
  let data = r.data.resultSet.rowSet.slice(0, 11)
  console.log(data)
  myChart.setOption({
    xAxis: {
      data: _.map(data, '2')
    }
  })
  myChart.setOption({
    series: [{
      name: '得分',
      type: 'bar',
      data: _.map(data, 22)
    }]
  })
})
