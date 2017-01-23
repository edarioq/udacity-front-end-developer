// Enemies our player must avoid
var Enemy = function(x, y, speed) {
    // Enemy's image
    this.sprite = 'images/enemy-bug.png';

    // Set the enemy's initial location
    this.x = x;
    this.y = y;
    this.speed = speed;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // Movement is multiplied by the dt parameter so that
    // the game runs at the same speed for all computers.
    dt = 1;

    bugOne.x = bugOne.x + (dt * bugOne.speed);
    bugTwo.x = bugTwo.x + (dt * bugTwo.speed);
    bugThree.x = bugThree.x + (dt * bugThree.speed);


    // Collision detection algorithm
    // https://developer.mozilla.org/en-US/docs/Games/Techniques/2D_collision_detection
    for (i = 0; i < allEnemies.length; i++) {
      var bugCollide = {
        x: allEnemies[i].x,
        y: allEnemies[i].y,
        width: 50,
        height: 50,
      };

      var playerCollide = {
        x: player.x,
        y: player.y,
        width: 50,
        height: 50,
      };

      if (bugCollide.x < playerCollide.x + playerCollide.width &&
          bugCollide.x + bugCollide.width > playerCollide.x &&
          bugCollide.y < playerCollide.y + playerCollide.height &&
          bugCollide.height + bugCollide.y > playerCollide.y) {
            
            player.x = 200;
            player.y = 400;
      }
    }

    resetBug();
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Reset bug location after it goes off screen
// and give it a different speed
function resetBug() {
    for (i = 0; i < allEnemies.length; i++) {
        if (allEnemies[i].x > 500) {
            allEnemies[i].x = 0;
            allEnemies[i].speed = Math.random() + 1.2;
        }
    }
}

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(x, y) {
    this.sprite = 'images/char-boy.png';
    this.x = x;
    this.y = y;
};

Player.prototype.update = function(dt) {
    dt = 1;
    player.win();
};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(allowedKeys) {

    if (allowedKeys == 'up') {
        player.y = player.y - 83;
    } else if (allowedKeys == 'down') {
        player.y = player.y + 83;
    } else if (allowedKeys == 'left') {
        player.x = player.x - 101;
    } else {
        player.x = player.x + 101;
    }

    // Make sure player doesn't go out of bounds
    if (player.x < 0) {
        player.x = 0;
    } else if (player.x > 400) {
        player.x = 400;
    } else if (player.y > 400) {
        player.y = 400;
    }

};

Player.prototype.win = function() {
    if (player.y < 0) {
        alert('NICE - You won!');
        player.x = 200;
        player.y = 400;

    }
};

// Now instantiate your objects.
var bugOne = new Enemy(0, 60, Math.random() + 2);
var bugTwo = new Enemy(0, 143, Math.random() + 3);
var bugThree = new Enemy(0, 228, Math.random() + 1);

// Place all enemy objects in an array called allEnemies
var allEnemies = [bugOne, bugTwo, bugThree];

// Place the player object in a variable called player
var player = new Player(200, 400);

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

// Disable scrolling
document.body.style.overflow = "hidden";
