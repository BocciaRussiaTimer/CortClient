<template>
  <div id="wrapper">
  
    <header>
      <h1>BocciaTimer</h1>
    </header>
    <main>
      <match-form v-if="!match.init" :match.sync="match"></match-form>
      <timer v-else :match.sync="match"></timer>
      <controlls></controlls>
    </main>
      </div>
</template>

<script>
import MatchForm from './LandingPage/MatchForm'
import Timer from './LandingPage/Timer'
import Controlls from './LandingPage/Controlls'

export default {
  data() {
    return {
      match: {
        gameType:1,
        cort: 1,
        players:{
          red:{
            side: 'red',
            name:'Бакаидов Иван',
            score:[0,0,0,0],
            time:[240,240,240,240]                                    
          },
          blue:{
            side:'blue',
            name:'Цыплина Диана',
            score:[0,0,0,0],
            time:[240,240,240,240]                                    
          },
        },

        end: 0,
        referee: 'Мухортов Алексей',
        lineReferee: 'Легостаев Сергей',
        init: true

      }
    }
  },
  components: { MatchForm, Timer, Controlls },
  methods: {
    open(link) {
      this.$electron.shell.openExternal(link)
    }
  }
}
</script>

<style>
header {
  position: absolute;
  background: #734324;
  color: #bcdcbc;
  left: 0;
  top: 0;
  width: 100vw;
  height: 5vh;
}
header>h1{
  font-size: 3vh;
  margin: 1vh;
  
}
main{
  position: absolute;
  top: 6vh;
  width: 100vw;
}
</style>
