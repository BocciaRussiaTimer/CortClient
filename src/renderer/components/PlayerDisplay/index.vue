<template>
    <div>
        <side :match='match' :player='match.players.red'></side>
        <side :match='match' :player='match.players.blue'></side>
        <div class="info">
            <h2>Энд</h2>
            <h1>{{match.end+1}}</h1>
        </div>
    </div>
</template>

<script>
import Side from './Side';
import store from '@/store'

const TYPES = ['BC1',
    'BC2',
    'BC3',
    'BC4',
    'BC1 - BC2 команды',
    'BC3 пары',
    'BC4 пары'];

export default {
    data() {
        return store;
    },
    components: {
        Side
    },
    computed: {
        gameType() {
            return TYPES[this.match.type]
        }
    },
    mounted() {
        this.$electron.ipcRenderer.on('playerMatch', (event, data) => {
            this.match = data;
        })
    }

}
</script>

<style scoped>
.info {
    width: 25vw;
    height: 25vh;
    position: absolute;
    left: 37.5vw;
    top: 37.5vh;
    background: #ada;
    text-align: center;
}
</style>
