<template> 
<form @submit.prevent="submit">
  <div class="form-group">
     <label for="gameType">Тип игры</label>
    <select class="form-control" id="gameType" v-model="match.gameType">
      <option value="0">BC1</option>
      <option value="1">BC2</option>
      <option value="2">BC3</option>
      <option value="3">BC4</option>
      <option value="4">BC1 - BC2 teams</option>
      <option value="5">BC3 pairs</option>
      <option value="6">BC4 pairs</option>
    </select>
    </div>
  <div class="form-group">
    <label for="redname">Название команды красных</label>
    <input class="form-control" id="redname" >
  </div>
  <div class="form-check">
    <label class="form-check-label">
      <input type="checkbox" class="form-check-input">
      Check me out
    </label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
</template>

<script>
export default {
  props:['match'],
  methods:{
      submit(){
          
      }
  }
}
</script>
