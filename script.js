
const date = new Date();


function rollDice() {
    return 1 + Math.floor(Math.random() * 6);
}

var dice1;
var dice2;
var sum = dice1 + dice2;

if(sum >= 8){
    rollDice(sum);
    alert("you win!")
}

else {
    rollDice(sum);
alert("you didnt win! Try again")
}


