<template>
        <input type="button" class="btn btn-primary" @click="print" value="Отправить протокол на печать"></input>
</template>

<script>
export default {
    props: ['match'],
    data(){
        return {
            protocol:'http',
            domain:'127.0.0.1',
            port: 30101
        };
    },
    computed:{
        url(){
            return `${this.protocol}://${this.domain}:${this.port}/print`;
        }
    },
    methods:{
        print(){
            this.$http.post(this.url, this.match).then((data)=>{
                
            })
        }
    }
}
</script>
