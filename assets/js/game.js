// //Game States
// "Win" - Player robot has defeated all the enemy-robots
// *Fight all the enemy-robots
// *Defeat each enemy-robot
// "Lose" - Player robot's health is zero or less
//this creates a function named "fight"

var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

console.log(playerName, playerAttack, playerHealth);

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
console.log(enemyNames);
console.log(enemyNames.length);
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function (enemyName) {
    while (playerHealth > 0 && enemyHealth > 0) {
        // Alert players that they are starting the round
        var promptFight = window.prompt("Would you like to Fight or SKIP this battle?");

        if (promptFight === "skip" || promptFight === "SKIP") {
            //confirm player skip
            var confirmSkip = window.confirm("Are you sure you want to quit?");

            //if yes leave fight
            if (confirmSkip) {
                window.alert(playerName + " has chosen to skip the fight!");
                //subtract money from playerMoney
                playerMoney = playerMoney - 10;
                console.log("playerMoney", playerMoney);
                break;
            }
        }

        // subtract playerAttack from enemyHealth
        enemyHealth = enemyHealth - playerAttack;
        // log results to console
        console.log(
            playerName + " attacked " + enemyName + "." + enemyName + " now has " + enemyHealth + "health remaining.");
        // enemy health check
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");

            //award player money for winning
            playerMoney = playerMoney + 20;
            //leave while loop since enemy is dead
            break;
        }
        else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }
        //Subtract enemyAttack from playerHealth
        playerHealth = playerHealth - enemyAttack;
        //log results to console
        console.log(
            enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " ."
        );
        //player health check
        if (playerHealth <= 0) {
            window.alert(playerName + " has died!");
            break;
        }
        else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }

    }

};

var startGame = function() {
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;
    
    for (var i = 0; i < enemyNames.length; i++) {
        if (playerHealth > 0) {
            window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
            var pickedEnemyName = enemyNames[i];
            enemyHealth = 50;
            fight(pickedEnemyName);
            
            if (playerHealth > 0 && i < enemyNames.length -1) {
            
                var storeConfirm = window.confirm("The fight is over, visit the store?");
                
              if (storeConfirm){
                shop();
              }
   
            }
        } 

        else {
         window.alert("You have lost your robot in battle! Game Over!");
            break;
        }
    }    
    endGame(); 
};

var endGame = function(){
    window.alert("the game has now ended. Let us see how you did!");
    if (playerHealth > 0) {
        window.alert("Great job, you have survived the game! You now have a score of " + playerMoney + ".")
    }
    else {
        window.alert("You have lost your robot in battle!");
    }
    var playAgainConfirm = window.confirm("Would you like to play again?");

    if(playAgainConfirm){
        //restart game
        startGame();
    }

    else{
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }
};

var shop = function() {
    var shopOptionPrompt = window.prompt(
        "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice.");

    switch (shopOptionPrompt) {
        case "REFILL":
        case "refill":
         if (playerMoney >= 7){
            window.alert("Refilling player's health by 20 for 7 dollars.");
            playerHealth = playerHealth + 20;
            playerMoney = playerMoney - 7;
        }
         else{
             window.alert("You don't have enough money!");
         }
            break;

        case "UPGRADE":
        case "upgrade":
         if (playerMoney >= 7){ 
            window.alert("upgrading player's attack by 6 for 7 dollars.");
            playerAttack = playerAttack + 6;
            playerMoney = playerMoney - 7;
         }

         else{
            window.alert("You don't have enough money!");
        }
            break;

        case "leave":
            window.alert('Leaving the store.');
            break;

        default:
            window.alert("You did not pick a valid option. Try again.");
        shop();
        break;
    }
};

//Start Game on page load
startGame()