import fetch from 'fetch'
import vue from 'vue'

require('../../scss/pages/index.scss')

new vue({
  el: '#app',
  data: {
    items: []
  },
  created: function() {
    fetch('/nba/stats/leagueleaders?LeagueID=00&PerMode=PerGame&Scope=S&Season=2016-17&SeasonType=Pre+Season&StatCategory=PTS').then(r => {
      this.items = r.data.resultSet.rowSet.slice(0, 11)
    })
  }
})
