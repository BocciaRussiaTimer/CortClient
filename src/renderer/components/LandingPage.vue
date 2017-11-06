<template>
  <div id="wrapper">
    <referee-display v-if="display=='referee'"></referee-display>
    <player-display v-else></player-display>
  </div>
</template>

<script>
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css'
import RefereeDisplay from './RefereeDisplay'
import PlayerDisplay from './PlayerDisplay'

export default {
  components: {
    RefereeDisplay,
    PlayerDisplay
  },
  computed: {
    display() {
      return window.location.hash.slice(1);
    }
  }
}
</script>

<style>
header {
  position: absolute;
  background-image: linear-gradient(to right, #c00, lightblue);

  color: #bcdcbc;
  left: 0;
  top: 0;
  width: 100vw;
  height: 5vh;
}

header>h1 {
  font-size: 3vh;
  margin: 1vh;
}

main {
  position: absolute;
  top: 6vh;
  width: 100vw;
}
</style>
