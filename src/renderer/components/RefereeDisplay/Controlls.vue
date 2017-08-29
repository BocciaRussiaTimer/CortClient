<template>
    <div class='controlls'>
        <button class="btn" @click="match.end--">Предыдущий энд</button>
        <button class="btn" @click="timer('red')" :class="{'btn-success':match.players.red.ticking}">Запустить время красных</button>
        <button class="btn" @click="match.init=!match.init" :class="{'btn-success':!match.init}">Информация о игре</button>
    
        <button class="btn" @click="timer('blue')" :class="{'btn-success':match.players.blue.ticking}">Запустить время синих</button>
        <button class="btn" @click="match.end++">Следующий энд</button>
    </div>
</template>

<script>
import Vue from "Vue";

let ctimerid;
let cplayer =null;
export default {
    props: ['match'],
    methods: {
        timer(side) {
            let player = this.match.players[side];
            if (cplayer != null) {
                clearInterval(ctimerid);
                cplayer.ticking = false;
                if (player.side === cplayer.side) {
                    cplayer = null;
                    return;
                }
            }
            ctimerid = setInterval(()=>{this.tick()}, 1000);
            cplayer=player;
            player.ticking=true;

        },
        tick(){
            Vue.set(cplayer.time, this.match.end, cplayer.time[this.match.end]-1);
        }
    }
}
</script>


<style scoped>
.controlls {
    position: fixed;
    top: 95vh;
    background-image: linear-gradient(to left, #c00, lightblue);

    color: #bcdcbc;
    width: 100vw;
    height: 5vh;
    text-align: center;
    display: inline-block;
}

.btn {
    height: 100%;
    width: 15vw;
}
</style>
