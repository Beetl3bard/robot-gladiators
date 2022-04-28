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

if (playerHealth> 0){
    window.alert("Welcome to Robot Gladiators! Round ");
}
for (var i = 0; i < enemyNames.length; i++) {
    var pickedEnemyName = enemyNames[i];
    enemyHealth = 50;
    fight(pickedEnemyName);
}
