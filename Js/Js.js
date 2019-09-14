document.addEventListener("DOMContentLoaded", function (e) {
    let navBarRule = document.getElementById("rule");
    navBarRule.addEventListener("click", ruleFunction);

    function ruleFunction() {
        swal("Rules", "Yatzy can be played solitaire or by any number of players. Players take turns rolling five dice. After each roll, the player \nchooses which dice to keep, and which to reroll.A player may reroll some or all of the dice up to two times on a turn.\nThe player must put a score or zero into a score box each turn. The game ends when all score boxes are used.\nThe player with the highest total score wins the game. \n\n Yatzy - Wikipedia. (n.d.). Retrieved September 13, 2019, from https://en.wikipedia.org/wiki/Yatzy");
    }
    let navBarScore = document.getElementById("score");
    navBarScore.addEventListener("click", scoreFunction);

    function scoreFunction() {
        swal("Scoring", "The following combinations earn points: \n\n Upper Section: \n Ones: The sum of all dice showing the number 1.\nTwos: The sum of all dice showing the number 2.\n  Threes: The sum of all dice showing the number 3.\nFours: The sum of all dice showing the number 4.\nFives: The sum of all dice showing the number 5.\nSixes: The sum of all dice showing the number 6.\n\nIf a player manages to score at least 63 points (an average of three of each number) in the upper section, they are awarded a bonus of 50 points.\n\nLower Section:\n    One Pair: Two dice showing the same number. Score: Sum of those two dice.\nTwo Pairs: Two different pairs of dice. Score: Sum of dice in those two pairs.\nThree of a Kind: Three dice showing the same number. Score: Sum of those three dice.\nFour of a Kind: Four dice with the same number. Score: Sum of those four dice.\nSmall Straight: The combination 1-2-3-4-5. Score: 15 points (sum of all the dice).\nLarge Straight: The combination 2-3-4-5-6. Score: 20 points (sum of all the dice).\nFull House: Any set of three combined with a different pair. Score: Sum of all the dice.\nChance: Any combination of dice. Score: Sum of all the dice.\nYatzy: All five dice with the same number. Score: 50 points. \n\n Yatzy - Wikipedia. (n.d.). Retrieved September 13, 2019, from https://en.wikipedia.org/wiki/Yatzy ")
    }

    let clickRollButton = document.getElementById("clickDiceButton");
    clickRollButton.addEventListener("click", rollDice);

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
    countbutton.addEventListener("click", function (e) {
        count();
    });
    function count() {
        let numberArr = [];
        numberArr.push(Number(document.getElementById("player1_ones").value));
        numberArr.push(Number(document.getElementById("player1_twos").value));
        numberArr.push(Number(document.getElementById("player1_threes").value));
        numberArr.push(Number(document.getElementById("player1_fours").value));
        numberArr.push(Number(document.getElementById("player1_fives").value));
        numberArr.push(Number(document.getElementById("player1_sixes").value));
        console.log(numberArr);


        let summa = 0;

        for (let i = 0; i < numberArr.length; i++) {
            summa += numberArr[i]
        }

        if (summa >= 63) {
            document.getElementById("player1_bonus").value = 50;
        }
        document.getElementById("player1_summa").value = summa;
    }

});





