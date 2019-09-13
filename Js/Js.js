
function getName(name) {
    var inputname = event.target.value;
    //var inputname=document.getElementById("name").value; 
    console.log(inputname);
    document.getElementById(name).innerHTML = inputname;
    // document.getElementById("name4").value = name;
}

function rollDice() {

    let dice = [1, 2, 3, 4, 5, 6];
    let newDice1 = dice[Math.floor(Math.random() * dice.length)];
    document.getElementById("Dice1").innerHTML = newDice1;
    let newDice2 = dice[Math.floor(Math.random() * dice.length)];
    document.getElementById("Dice2").innerHTML = newDice2;
    let newDice3 = dice[Math.floor(Math.random() * dice.length)];
    document.getElementById("Dice3").innerHTML = newDice3;
    let newDice4 = dice[Math.floor(Math.random() * dice.length)];
    document.getElementById("Dice4").innerHTML = newDice4;
    let newDice5 = dice[Math.floor(Math.random() * dice.length)];
    document.getElementById("Dice5").innerHTML = newDice5;
}

let countbutton = document.getElementById("count");
countbutton.addEventListener("click", function(e){
count();
});
function count(){
    let numberArr = [];
    numberArr.push(Number(document.getElementById("player1_ones").value));
    numberArr.push(Number(document.getElementById("player1_twos").value));
    numberArr.push(Number(document.getElementById("player1_threes").value));
    numberArr.push(Number(document.getElementById("player1_fours").value));
    numberArr.push(Number(document.getElementById("player1_fives").value));
    numberArr.push(Number(document.getElementById("player1_sixes").value));
    console.log(numberArr);


    let summa = 0;

    for(let i=0; i <numberArr.length; i++){
        summa += numberArr[i]
    }

    if (summa >= 63){
        document.getElementById("player1_bonus").value = 50; 
    }
    document.getElementById("player1_summa").value = summa;
    }

    

    



