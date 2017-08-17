<template>
    <section class="player" :class="{'player-red':(player.side==='red'), 'player-blue':(player.side==='blue')}">
        <h2 class="score">{{commonScore(player.score)}}</h2>
        <h3 class="name">{{player.name}}</h3>
        
        <table class="table">
            <thead>
                <tr v-if="player.side==='red'">
                    <th>Энд</th>
                    <th>Время</th>
                    <th>Счет</th>
                </tr>
                <tr v-else>
                    <th>Счет</th>
                    <th>Время</th>
                    <th>Энд</th>    
                </tr>
            </thead>
            <tbody>
                <tr v-if="player.side==='red'" v-for="(t, index) in player.time" :class="{'table-active':index===match.end}" >                 
                    <td>{{index+1}}</td>
                    <td>
                        <input disabled :value="secondsToTime(t)"></input>
                    </td>
                    <td>
                        <input type="number" v-model="player.score[index]"></input>
                    </td>
                </tr>
                <tr v-if="player.side==='blue'" v-for="(t, index) in player.time" :class="{'table-active':index===match.end}">
                    <td>
                        <input type="number" v-model="player.score[index]"></input>
                    </td>
                    
                    <td>
                        <input disabled :value="secondsToTime(t)"></input>
                    </td>
                    <td>{{index+1}}</td>
                    
                </tr>
                
            </tbody>
        </table>
    </section>
</template>

<script>
export default {
    props: ['player', 'match'],
    methods: {
        secondsToTime(s) {
            var min = parseInt(s / 60);//Получаем кол-во минут
            var sec = s % 60;//Получаем кол-во секунда
            min = min < 10 ? "" + min : min;//если минут меньше 10, то добавляем в начало 0, иначае оставляем без изменений
            sec = sec < 10 ? "0" + sec : sec;//то же самое с секундами
            return min + ":" + sec;//возвращаем получившуюся строчку
        },
        commonScore(obj) {
            let score = 0;
            obj.forEach((endScore) => { score += +endScore })
            return score;
        }
    }
}
</script>

<style scoped>
.player {
    position: absolute;
    top: 20vh;
    border-top-style: solid;
    border-top-width: 1vh;
    width: 30vw;
}

.player-red {
    left: 20vh;
    border-top-color: red;
    text-align: right;
}

.player-blue {
    right: 20vh;
    border-top-color: #33f;
}

.name{
    position:absolute;
    top:0;
}
.player-blue>.name{
    right:0;
}

.player-red th {
    text-align: right;
}
</style>

