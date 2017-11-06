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
    match: {
      handler(v) {
        this.$electron.ipcRenderer.send('mainMatch', v);
  //      this.update();

        return v;
      },
      deep: true
    }
  },
  components: { MatchForm, Timer, Controlls },
  
  computed: {
    url() {
      return `${this.server.protocol}://${this.server.domain}:${this.server.port}/`;
    }
  },
  methods: {
    print() {
      this.$http.post(this.url + 'print', this.match).then((data) => {

      })
    },
    update() {
      let data = JSON.stringify(this.match);
         this.$http({ url: this.url + 'update', method: 'post', headers: { 'Content-Type': 'application/json' }, data  }).then((result) => {
            console.log(result);
        });

    }
  }
}
</script>
