
function getName(name) {
    var inputname = event.target.value;
    //var inputname=document.getElementById("name").value; 
    console.log(inputname);
    document.getElementById(name).innerHTML = inputname;
    // document.getElementById("name4").value = name;
}

function rollDice() {
    let dice = [1, 2, 3, 4, 5, 6];
    if(!(document.getElementById("svar1").checked)){
        let newDice1 = dice[Math.floor(Math.random() * dice.length)];
        document.getElementById("Dice1").innerHTML = newDice1;
    }
    if(!(document.getElementById("svar2").checked)){
        let newDice2 = dice[Math.floor(Math.random() * dice.length)];
        document.getElementById("Dice2").innerHTML = newDice2;
    }
    if(!(document.getElementById("svar3").checked)){
        let newDice3 = dice[Math.floor(Math.random() * dice.length)];
    document.getElementById("Dice3").innerHTML = newDice3;
    }
    if(!(document.getElementById("svar4").checked)){
    let newDice4 = dice[Math.floor(Math.random() * dice.length)];
    document.getElementById("Dice4").innerHTML = newDice4;
    }
    if(!(document.getElementById("svar5").checked)){
    let newDice5 = dice[Math.floor(Math.random() * dice.length)];
    document.getElementById("Dice5").innerHTML = newDice5;
    }
}

let countbutton = document.getElementById("count");
countbutton.addEventListener("click", function(e){
count();
});
function count(){

    for(let player = 1; player <= 4 ; player++){
        let tempsum = document.getElementsByClassName("sum"+player+" player" + player);
        console.log(tempsum);
    
        tempsum=Array.from(tempsum);
    
        let sum = tempsum.reduce((acc, Element )=> {
        return acc+Number(Element.value); 
        },0);
        console.log(sum);
    
    
        if (sum >= 63){
            document.getElementById("player"+player+"_bonus").value = 50; 
        }
        document.getElementById("player"+player+"_summa").value = sum;
        }
    }
document.getElementById("btnChangePlayer").addEventListener("click", function(e) {
	let index = document.getElementById("player_turn").valueAsNumber + 1;

	if (index > 4) {
  	index = 1;
  }
  
  let list = document.getElementsByClassName("active");
  for (let element of list) {
  	element.classList.remove("active");
  }

  document.getElementById("player_turn").value = index;
  document.getElementById("player" + index).classList.add("active");
});

function checkHouse(){
    
}

    



