<template>
  <div id="wrapper">
    <header>
      <h1>BocciaTimer</h1>
    </header>
    <main>
      <match-form v-if="!match.init" :match.sync="match"></match-form>
      <timer v-else :match.sync="match"></timer>
      <controlls :match.sync="match"></controlls>
    </main>
      </div>
</template>

<script>
import MatchForm from './LandingPage/MatchForm'
import Timer from './LandingPage/Timer'
import Controlls from './LandingPage/Controlls'
import store from '@/store'


export default {
  data() {
    return store;
    
  },
  components: { MatchForm, Timer, Controlls },
}
</script>

<style>
header {
  position: absolute;
    background-image: linear-gradient(to right , #c00, lightblue);

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
