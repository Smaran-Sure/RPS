let user = 0;
let bot = 0;
function game() {
    
    function playRound(playerSelection, computerSelection) {
        playerSelection = prompt("Choose: Rock|Paper|Scissors", "").toLowerCase();
        getComputerChoice = (list) =>  {
            const randomIndex = Math.floor(Math.random() * list.length);

            // get random item
            const item = list[randomIndex];
        
            return item;
        };
        const choices = ["rock","paper","scissors"];
        computerSelection = getComputerChoice(choices);
        console.log(`Bot: ${computerSelection}`);
        console.log(`You: ${playerSelection}`);
        if (playerSelection == computerSelection) {
            console.log("Tie! No one gets a point.");
        } 
        else if (playerSelection == "rock") {
            if (computerSelection == "scissors") {
                console.log("You won | Rock beats Scissors");
                user = user+1;
                console.log("You have "+user.toString()+" points");
                console.log("The bot has "+bot.toString()+" points");
            }
            else if (computerSelection == "paper") {
                console.log("You lose | Paper beats Rock");
                bot = bot + 1;
                console.log("You have "+user.toString()+" points");
                console.log("The bot has "+bot.toString()+" points");
            }}
        else if (playerSelection == "scissors") {
            if (computerSelection == "rock") {
                console.log("You lose | Rock beats Scissors");
                bot = bot + 1;
                console.log("You have "+user.toString()+" points");
                console.log("The bot has "+bot.toString()+" points");
            }
            else if (computerSelection == "paper") {
                console.log("You won | Scissors beats Paper");
                user = user+1;
                console.log("You have "+user.toString()+" points");
                console.log("The bot has "+bot.toString()+" points");
            }}
        else if (playerSelection == "paper") {
            if (computerSelection == "scissors") {
                console.log("You lose | Scissors beats Paper");
                bot = bot + 1;
                console.log("You have "+user.toString()+" points");
                console.log("The bot has "+bot.toString()+" points");
            }
            else if (computerSelection == "rock") {
                console.log("You win | Rock beats Paper")
                user = user+1;
                console.log("You have "+user.toString()+" points");
                console.log("The bot has "+bot.toString()+" points");
            }}
        console.log("----------------------------------------")
}
playRound();
playRound();
playRound();
playRound();
playRound();
}
game();
console.log("FINAL SCOREBOARD");
console.log("You: "+user.toString()+" points");
console.log("Bot: "+bot.toString()+" points");
if (user > bot) {
    console.log("You beat the bot by "+(user-bot).toString()+" points");
}
else if (bot > user) {
    console.log("You lost. The bot beat you by "+(bot-user).toString()+" points");
}