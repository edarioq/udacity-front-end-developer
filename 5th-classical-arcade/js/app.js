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
    dt = 3;

    this.x += (dt * this.speed);

};

Enemy.prototype.checkCollisions = function() {
    // Collision detection algorithm
    // https://developer.mozilla.org/en-US/docs/Games/Techniques/2D_collision_detection
    var bugCollide = {
        x: this.x,
        y: this.y,
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
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    this.resetBug();
    this.checkCollisions();
};

// Reset bug location after it goes off screen
// and give it a different speed
Enemy.prototype.resetBug = function resetBug() {

    if (this.x > 500) {
        this.x = -100;
        this.speed = Math.random() + 1.2;
    }

};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(x, y) {
    this.sprite = 'images/char-boy.png';
    this.x = x;
    this.y = y;
};

Player.prototype.update = function(dt) {
    // Might not need this dt variable on player?
    // since it's not being used
    dt = 1;
};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    this.win();
};

Player.prototype.handleInput = function(allowedKeys) {

    if (allowedKeys == 'up') {
        this.y = this.y - 83;
    } else if (allowedKeys == 'down') {
        this.y = this.y + 83;
    } else if (allowedKeys == 'left') {
        this.x = this.x - 101;
    } else {
        this.x = this.x + 101;
    }

    // Make sure player doesn't go out of bounds
    if (this.x < 0) {
        this.x = 0;
    } else if (this.x > 400) {
        this.x = 400;
    } else if (this.y > 400) {
        this.y = 400;
    }
};

Player.prototype.win = function() {
    // Check if the player is on the top row
    if (this.y <= -15) {
        this.x = 200;
        this.y = 400;
        setTimeout(function() {
            alert('NICE - You won!');
        }, 200);

    }
};

// Now instantiate your objects.
var bugOne = new Enemy(0, 60, Math.random() + 2);
var bugTwo = new Enemy(0, 143, Math.random() + 1);
var bugThree = new Enemy(0, 228, Math.random() + 3);

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

// Disable scrolling so that arrow keys don't scroll the page
document.body.style.overflow = "hidden";
