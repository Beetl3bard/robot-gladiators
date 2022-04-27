//this creates a function named "fight"

var playerName = window.prompt("What is your robot's name?");
var playerHealth = 11;
var playerAttack= 10;

console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 10;
var enemyAttack = 12;

var fight = function () {
// Alert players that they are starting the round
    window.alert("Welcome to Robot Gladiators!");
// subtract playerAttack from enemyHealth
    enemyHealth = enemyHealth - playerAttack;
// log results to console
    console.log(
        playerName + " attacked " + enemyName + "." + enemyName + " now has " + enemyHealth + "health remaining.");
// enemy health check
if (enemyHealth<= 0){
    window.alert(enemyName + " has died!");
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
if (enemyHealth <= 0) {
    window.alert(playerName + " has died!");
}
else {
    window.alert(playerName + " still has " + playerHealth + " health left.");
}
    };

fight();
