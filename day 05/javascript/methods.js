const star = 5;
const coins = 10;

const player1 = {
    name: 'player 1',
    score: 0,
    collectStar: function(){
        this.score += star;
    },
    collectCoin: function(){
        this.score += coins;
    }
};

const player2 = {
    name: 'player 2',
    score: 0,
    collectStar: function(){
        this.score += star;
    },
    collectCoin: function(){
        this.score += coins;
    }
};

player1.collectStar();
player2.collectCoin();
player1.collectStar();

console.log(player1)
console.log(player2)