// //Game States
// "Win" - Player robot has defeated all the enemy-robots
// *Fight all the enemy-robots
// *Defeat each enemy-robot
// "Lose" - Player robot's health is zero or less
//this creates a function named "fight"


var fight = function (enemy) {
    while (playerInfo.health > 0 && enemy.health > 0) {
        // Alert players that they are starting the round
        var promptFight = window.prompt("Would you like to Fight or SKIP this battle?");

        if (promptFight === "skip" || promptFight === "SKIP") {
            //confirm player skip
            var confirmSkip = window.confirm("Are you sure you want to quit?");

            //if yes leave fight
            if (confirmSkip) {
                window.alert(playerInfo.name + " has chosen to skip the fight!");
                //subtract money from playerInfo.money
                playerInfo.money = Math.max(0, playerInfo.money - 10);
                console.log("playerInfo.money", playerInfo.money);
                break;
            };
        };

        // subtract playerInfo.attack from enemy.health
        var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack)
        enemy.health = Math.max(0, enemy.health - damage);
        // log results to console
        console.log(
            playerInfo.name + " attacked " + enemy.name + "." + enemy.name + " now has " + enemy.health + "health remaining.");
        // enemy health check
        if (enemy.health <= 0) {
            window.alert(enemy.name + " has died!");

            //award player money for winning
            playerInfo.money = playerInfo.money + 20;
            //leave while loop since enemy is dead
            break;
        }
        else {
            window.alert(enemy.name + " still has " + enemy.health + " health left.");
        }
        //Subtract enemy.attack from playerInfo.health
        var damage = randomNumber(enemy.attack-3, enemy.attack);
        playerInfo.health = Math.max(0, playerInfo.health - damage);
        //log results to console
        console.log(
            enemy.name + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " ."
        );
        //player health check
        if (playerInfo.health <= 0) {
            window.alert(playerInfo.name + " has died!");
            break;
        }
        else {
            window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");
        }

    }

};

var startGame = function() {
    playerInfo.reset();
    
    for (var i = 0; i < enemyInfo.length; i++) {
        if (playerInfo.health > 0) {
            window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
            var pickedEnemyObj = enemyInfo[i];
            pickedEnemyObj.health = randomNumber(40, 60);
            fight(pickedEnemyObj);
            
            if (playerInfo.health > 0 && i < enemyInfo.length -1) {
            
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
    if (playerInfo.health > 0) {
        window.alert("Great job, you have survived the game! You now have a score of " + playerInfo.money + ".")
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
         playerInfo.refillHealth();
            break;

        case "UPGRADE":
        case "upgrade":
         playerInfo.upgradeAttack();
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

var randomNumber = function(min,max) {
    var value = Math.floor(Math.random()*(max-min+1)+min);

    return value;
};

var playerInfo = {
    name: window.prompt("What is your robot's name?"),
    health : 100,
    attack : 10,
    money : 10,
    reset: function(){
        this.health = 100;
        this.money = 10;
        this.attack = 10;
        console.log(this);
    },

    refillHealth: function(){
        if (this.money >= 7){
            window.alert("refilling player's health by 20 for 7 dollars.");
        this.health +=20;
        this.money -= 7;
        }
        else {
            window.alert("You don't have enough money!");l
        }
    },

    upgradeAttack: function(){
        if (this.money >= 7) {
            window.alert("Upgrading player's attack by 6 for 7 dollars.");
        this.atttack += 6;
        this.money -= 7;
    }
    else {
        window.alert("You don't have enough money!");
      }
};

console.log(playerInfo.name, playerInfo.attack, playerInfo.health);

var enemyInfo = [
    {
        name:"Roborto",
        attack: randomNumber(10,14)
    },
    {
         name: "Amy Android",
         attack: randomNumber(10,14)
    }, 
    {
         name:"Robo Trumble",
         attack: randomNumber(10,14)
    },
];


//Start Game on page load
startGame()