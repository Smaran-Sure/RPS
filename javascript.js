let user = 0;
let bot = 0;
const display1 = document.querySelector(".t1");
const display2 = document.querySelector(".t2");
const display3 = document.querySelector(".t3");
const display4 = document.querySelector(".t4");
const display5 = document.querySelector(".t5");
ending = document.querySelector("#end");
endP = document.querySelector(".p-end");
function game() {
    let playButtons = document.querySelectorAll(".play");
    playButtons.forEach((button) => {
    button.addEventListener("click", () => {
        let player = button.id;
        if (user <5 && bot <5) {
            playRound(player);
        }
    });
    let redoButton = document.querySelector("#restart");
    redoButton.addEventListener("click", () => {
        user = 0;
        bot = 0;
        display1.textContent = "Start playing by clicking Rock, Paper or Scissors";
        display2.textContent = "Bot VS You";
        display3.textContent = "Win/Lose";
        display4.textContent = "Bot: 0 pts";
        display5.textContent = "You: 0 pts";
        endP.textContent = "";
        ending.textContent = "Scores: null";

    })
})
    function playRound(playerSelection, computerSelection) {
        getComputerChoice = (list) =>  {
            const randomIndex = Math.floor(Math.random() * list.length);

            // get random item
            const item = list[randomIndex];
        
            return item;
        };
        const choices = ["rock","paper","scissors"];
        computerSelection = getComputerChoice(choices);
        display1.textContent = (`Bot: ${computerSelection}`);
        display2.textContent = (`You: ${playerSelection}`);
        if (playerSelection == computerSelection) {
            display3.textContent = "Tie! No one gets a point.";
        } 
        else if (playerSelection == "rock") {
            if (computerSelection == "scissors") {
                display3.textContent = ("You won | Rock beats Scissors");
                user = user+1;
                display4.textContent = ("You have "+user.toString()+" points");
                display5.textContent = ("The bot has "+bot.toString()+" points");
            }
            else if (computerSelection == "paper") {
                display3.textContent = ("You lose | Paper beats Rock");
                bot = bot + 1;
                display4.textContent = ("You have "+user.toString()+" points");
                display5.textContent = ("The bot has "+bot.toString()+" points");
            }}
        else if (playerSelection == "scissors") {
            if (computerSelection == "rock") {
                display3.textContent = ("You lose | Rock beats Scissors");
                bot = bot + 1;
                display4.textContent = ("You have "+user.toString()+" points");
                display5.textContent = ("The bot has "+bot.toString()+" points");
            }
            else if (computerSelection == "paper") {
                display3.textContent = ("You won | Scissors beats Paper");
                user = user+1;
                display4.textContent = ("You have "+user.toString()+" points");
                display5.textContent = ("The bot has "+bot.toString()+" points");
            }}
        else if (playerSelection == "paper") {
            if (computerSelection == "scissors") {
                display3.textContent = ("You lose | Scissors beats Paper");
                bot = bot + 1;
                display4.textContent = ("You have "+user.toString()+" points");
                display5.textContent = ("The bot has "+bot.toString()+" points");
            }
            else if (computerSelection == "rock") {
                display3.textContent = ("You win | Rock beats Paper")
                user = user+1;
                display4.textContent = ("You have "+user.toString()+" points");
                display5.textContent = ("The bot has "+bot.toString()+" points");
            }}
        if (user == 5 || bot == 5) {
            endP.textContent = "Game has ended - Final Scores ->";
            if (user > bot) {
                ending.textContent = ("You beat the bot by "+(user-bot).toString()+" points");
            }
            if (bot > user) {
                ending.textContent = ("The bot beat you by "+(bot-user).toString()+" points");
            }
        }
       
}
}
game();







 