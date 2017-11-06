<template>
  <form @submit.prevent="submit">
    <div class="form-group">
      <label for="gameType">Тип игры</label>
      <select class="form-control" id="gameType" v-model="match.gameType">
        <option value=0>BC1</option>
        <option value=1>BC2</option>
        <option value=2>BC3</option>
        <option value=3>BC4</option>
        <option value=4>BC1 - BC2 команды</option>
        <option value=5>BC3 пары</option>
        <option value=6>BC4 пары</option>
      </select>
    </div>
    <div class="form-group">
      <label for="cort">Корт</label>
      <input type="number" class="form-control" id="cort" v-model="match.cort">
    </div>
    <div class="form-group">
      <label for="redname">{{match.gameType>3?"Название команды, которая":"Имя игрока, который"}} играет красными</label>
      <input class="form-control" id="redname" v-model="match.players.red.name">
    </div>
    <div class="form-group">
      <label for="bluename">{{match.gameType>3?"Название команды, которая":"Имя игрока, который"}} играет синими</label>
      <input class="form-control" id="bluename" v-model="match.players.blue.name">
    </div>

    <div class="form-group">
      <label for="referee">Имя Фамилия судьи</label>
      <input class="form-control" id="referee" v-model="match.referee">
    </div>
    <div class="form-group">
      <label for="referee">Имя Фамилия линейного судьи</label>
      <input class="form-control" id="referee" v-model="match.lineReferee">
    </div>
    <div class="form-group">
      <button type="reset" class="btn btn-primary" @click='reset'>Обнулить</button>
      
      <printer :match.sync='match'></printer>
      <button type="submit" class="btn btn-primary">Сохранить</button>
    </div>
  </form>
</template>

<script>
import Printer from './Printer'

export default {
  props: ['match'],
  components: {Printer},
  methods: {
    submit() {
      this.match.init = true;
    }, 
    reset(){
      this.match.gameType=1;
      this.match.end=0;
      this.referee='';
      this.lineReferee='';
      this.resetScore(this.players.red.score)
      this.resetScore(this.players.blue.score)
    },
    resetScore(score){
      score.forEach((element, index) =>{
        score[index]=0;
      });
    }
  }
}
</script>
