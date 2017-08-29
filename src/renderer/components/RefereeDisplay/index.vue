<template>
   <div>
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

import MatchForm from './MatchForm'
import Timer from './Timer'
import Controlls from './Controlls'
import store from '@/store'


export default {
  data() {
    return store;
    
  },
  watch: {
    match:{
      handler(v){
        this.$electron.ipcRenderer.send('mainMatch', v);
        return v;
      },
      deep:true
    }
  },
  components: { MatchForm, Timer, Controlls }
 }
</script>
