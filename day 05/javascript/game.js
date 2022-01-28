let activePlayer = undefined;
let stars = 5;
let coind = 10;

function getButton(num){
    return ddocument.querySelectorAll('button')[num];
}

const player1Button = getButton(0);
const player2Button = getButton(1);
const starButton = getButton(2);
const coinButton = getButton(3);
const player1ScoreButton = getButton(4);
const player2ScoreButton = getButton(5);

console.log(player1Button, player2Button, starButton, coinButton, player1ScoreButton, player2ScoreButton);

const player1 = {
    name: 'player 1',
    score: 0,
    collectStar: function(){
        this.score += stars;
    },
    collectCoin: function(){
        this.score += coins;
    }

}

const player2 = {
    name: 'player 2',
    score: 0,
    collectStar: function(){
        this.score += stars;
    },
    collectCoin: function(){
        this.score += coins;
    }

}

player1Button.addEventListener('click',) () => {
    activePlayer = player1;
}