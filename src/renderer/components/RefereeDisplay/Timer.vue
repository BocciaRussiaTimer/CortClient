<template>
    <div class='timer'>
        <player :player.sync='match.players.red' :match.sync='match'></player>
        <div class='currentend'>
            <h3>Текуший энд</h3>
            <h2>{{match.end+1}}</h2>
        </div>
        <player :player.sync='match.players.blue' :match.sync='match'></player>

    </div>
</template>



<script>

import Player from './Timer/Player'

export default {
  props:['match'],
  components:{Player},
  mounted () {
  }
}
</script>

<style scoped>
.timer{
    width: 100vw;
    position: absolute;
}
.currentend{
    position:absolute;
    position: absolute;
    top: 30vh;
    border-style: solid;
    border-width: 1vh;
    width: 15vw;
    left: 42.5vw;
    text-align:center;
}
</style>
