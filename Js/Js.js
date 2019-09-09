
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
    document.getElementById("dice1").innerHTML = newDice1;
    let newDice2 = dice[Math.floor(Math.random() * dice.length)];
    document.getElementById("dice2").innerHTML = newDice2;
    let newDice3 = dice[Math.floor(Math.random() * dice.length)];
    document.getElementById("dice3").innerHTML = newDice3;
    let newDice4 = dice[Math.floor(Math.random() * dice.length)];
    document.getElementById("dice4").innerHTML = newDice4;
    let newDice5 = dice[Math.floor(Math.random() * dice.length)];
    document.getElementById("dice5").innerHTML = newDice5;

}
