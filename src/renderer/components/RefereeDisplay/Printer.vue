<template>
    <input type="button" class="btn btn-primary" value="Печать" @click="print">
    </input>
</template>

<script>
import { server } from '@/store'
export default {
    props:['match'],
    computed: {
        url() {
            return `${server.protocol}://${server.domain}:${server.port}/`;
        }
    },
    methods: {
        print() {
            console.log('send print')
            let data = JSON.stringify(this.match);
            this.$http({ url: this.url + 'print', method: 'post', headers: { 'Content-Type': 'application/json' }, data }).then((result) => {
                console.log(result);
            });

        }
    }
}
</script>

<style scoped>

</style>
