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
import swalert from 'sweetalert'
import swalertcss from 'sweetalert/dist/sweetalert.css'

export default {
    props: ['match'],
    data() {
        return {
            timerid: null,
            player: null
        }
    },
    methods: {
        timer(side) {
            let player = this.match.players[side];
            this.stop();
            if (this.player != null && this.player.side == player.side) {
                this.player = null;
                
                return;
            }
            this.player = player;
            player.ticking = true;
            this.timerid = setInterval(() => { this.tick() }, 1000);
            if (player.time[this.match.end] < 1) return this.timeover();


        },
        tick() {
            Vue.set(this.player.time, this.match.end, this.player.time[this.match.end] - 1);
            if (this.player.time[this.match.end] < 1) {
                this.player = null;
                this.timeover();
            }
        },
        timeover() {
            swal("Время вышло!", `У ${this.player.side == 'red' ? 'красной' : 'синий'} стороны закончилось время`, "info")

            this.stop();
        },
        stop() {

            if (this.player != null) {
                console.log('stop')
                clearInterval(this.timerid);
                this.player.ticking = false;
            }
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
    color: black;
}
</style>
