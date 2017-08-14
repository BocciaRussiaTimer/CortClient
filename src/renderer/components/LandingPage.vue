<template>
  <div id="wrapper">
  
    <header>
      <h1>BocciaTimer</h1>
    </header>
    <main>
      <match-form v-if="!match.init" :match.sync="match"></match-form>
      <timer v-else></timer>
    </main>
  </div>
</template>

<script>
import MatchForm from './LandingPage/MatchForm'
import Timer from './LandingPage/Timer'

export default {
  data() {
    return {
      match: {
        gameType:1,
        cort: 1,
        redname:'',
        bluename:'',
        referee: '',
        lineReferee:'',
        init: false

      }
    }
  },
  components: { MatchForm, Timer },
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
