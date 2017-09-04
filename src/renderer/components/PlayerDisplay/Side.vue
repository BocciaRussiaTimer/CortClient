<template>
  <div class="side" :class="{'red':player.side==='red', 'blue':player.side==='blue'}">
      <h2>{{player.name}}</h2>
      <h1 class="big">{{commonScore(player.score)}}</h1>
      <h1 class="big">{{secondsToTime(player.time[match.end])}}</h1>
  </div>

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
    .side{
        width: 50vw;
        height: 100vh;
        position: absolute;
        text-align: center;
        padding-top: 10vw;

        color: #123231;
    }
    .red{
        background-color: red;
    }
    .blue{
        background-color: #33f;
        right: 0;
    }
    .big {
        font-size: 20vh;
    }

</style>
