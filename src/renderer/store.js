module.exports = {
    match: {
        get gameType() {
            return this._gameType||0;
        },
        set gameType(v) {
            v=+v;
            this._gameType = v;
            
            let repeats = 4;
            let time = this.classTime;
            if (v == 4) {
                repeats = 6;
            }
            
            module.exports.match.players.red.time = [];
            module.exports.match.players.blue.time = [];
            for (var i  = 0; i < repeats; i++) {
                module.exports.match.players.red.time[i] = time;
                module.exports.match.players.blue.time[i] = time;
                
            }
            return v;
        },
        get classTime (){
            let time = 240;
            console.log(this._gameType)
            switch (this._gameType) {
                case 0:
                    time = 300;
                    break;
                case 2:
                    time = 360;
                    break;
                case 4:
                    time = 360;
                    break;
                case 5:
                    time = 420;
                    break;
                case 6:
                    time = 300;
                    break;
            }
            return time;
        },
        cort: 1,
        players: {
            red: {
                ticking: false,
                side: 'red',
                name: '',
                score: [0, 0, 0, 0],
                time: [240, 240, 240, 240],
                get cscore(){
                    let i = 0;
                    this.score.forEach((s)=>{
                        i+=+s;
                    });
                    return i;
                }
            },
            blue: {
                ticking: false,
                side: 'blue',
                name: '',
                score: [0, 0, 0, 0],
                time: [240, 240, 240, 240],
                get cscore(){
                    let i = 0;
                    this.score.forEach((s)=>{
                        i+=+s;
                    });
                    return i;
                }
            },
        },

        _tiebreak: false,
        get tiebreak(){
            return this._tiebreak
        },
        set tiebreak (v){
            this._tiebreak=v;
            if (v){
            this.players.red.score.push("0");
            this.players.red.time.push(this.classTime);
            this.players.blue.score.push("0");
            this.players.blue.time.push(this.classTime);
            } else {
                this.players.red.score.pop();
                this.players.red.time.pop();
                this.players.blue.score.pop();
                this.players.blue.time.pop();
            }
        },

        end: 0,
        referee: '',
        lineReferee: '',
        init: false

    },
    server:{
        protocol:'http',
        port:30101,
        domain:'127.0.0.1'
    }
};