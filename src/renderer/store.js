module.exports = {
    match: {
        get gameType() {
            return this._gameType||0;
        },
        set gameType(v) {
            v=+v;
            
            let repeats = 4;
            let time = 240;
            if (v == 4) {
                repeats = 6;
            }
            switch (v) {
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
            module.exports.match.players.red.time = [];
            module.exports.match.players.blue.time = [];
            for (var i  = 0; i < repeats; i++) {
                module.exports.match.players.red.time[i] = time;
                module.exports.match.players.blue.time[i] = time;
                
            }
            this._gameType = v;
            return v;
        },
        cort: 1,
        players: {
            red: {
                ticking: false,
                side: 'red',
                name: '',
                score: [0, 0, 0, 0],
                time: [240, 240, 240, 240]
            },
            blue: {
                ticking: false,
                side: 'blue',
                name: '',
                score: [0, 0, 0, 0],
                time: [240, 240, 240, 240]
            },
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