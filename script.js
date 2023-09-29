function rollDice() {
    const dice1 = document.getElementById("dice1");
    const dice2 = document.getElementById("dice2");
    const resultText = document.getElementById("result");

    const roll1 = Math.floor(Math.random() * 6) + 1;
    const roll2 = Math.floor(Math.random() * 6) + 1;

    dice1.textContent = roll1;
    dice2.textContent = roll2;

    const total = roll1 + roll2;

    resultText.textContent = `You rolled a ${total}`;
}



