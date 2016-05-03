var Character = function(x, y) {
    this.x = x; 
    this.y = y;
};

// Draw the enemy on the screen, required method for game
Character.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Enemies our player must avoid
var Enemy = function(x, y) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    Character.call(this, x, y);
    this.sprite = 'images/enemy-bug.png';
    this.speed = 70;
};

Enemy.prototype = Object.create(Character.prototype);
Enemy.prototype.constructor = Enemy;

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter which will ensure the game runs at the same speed for all computers. 
    // Figure out how to avoid any characters colliding with each other... How???
    this.x = this.x + this.speed * dt;
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(x, y) {
    Character.call(this, x, y);
    this.sprite = 'images/char-cat-girl.png'; 
};

Player.prototype = Object.create(Character.prototype);
Player.prototype.constructor = Player;

// Update position, required method for game
// Parameter: dt, a time delta between ticks
Player.prototype.update = function() {
    // You should multiply any movement by the dt parameter which will ensure the game runs at the same speed for all computers. 


};

Player.prototype.handleInput = function(input) {
    if(this.y === 0) {
        return this.reset();
    }
    switch(input) {
        case 'left':
            this.x -= 50;
            if(this.x < 401 && this.x > 8) {
                return this.x;
            } 
            return this.x += 50;
        case 'up':
            this.y -= 50;
            if(this.y < 401 && this.y >= 0) {
                return this.y;
            } 
            return this.y += 50;
        case 'right':
            this.x += 50;
            if(this.x < 401 && this.x > 8) {
                return this.x;
            } 
            return this.x -= 50;
        case 'down':
            this.y += 50;
            if(this.y < 401 && this.y >= 0) {
                return this.y;
            } 
            return this.y -= 50;
    }
};

Character.prototype.reset = function() {
    allEnemies = [new Enemy(-891, 60), new Enemy(-691, 60), new Enemy(-291, 60), new Enemy(-91, 60), new Enemy(9, 60), new Enemy(-1091, 145), new Enemy(-651, 145), new Enemy(-347, 145), new Enemy(-150, 145), new Enemy(-50, 145), new Enemy(-900, 230), new Enemy(-487, 230), new Enemy(-220, 230), new Enemy(-130, 230), new Enemy(3, 230)];
    player = new Player(200, 400);
};


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
// The enemies' y values should always be either 60, 145, or 230. 
// One bug is about 100 long. 
// Field limits: x = 8, 401; y = -25, 401.
// Player movements: up: 400, 340, 280, 220, 160, 100, 40.
var allEnemies = [new Enemy(-891, 60), new Enemy(-691, 60), new Enemy(-291, 60), new Enemy(-91, 60), new Enemy(9, 60), new Enemy(-1091, 145), new Enemy(-651, 145), new Enemy(-347, 145), new Enemy(-150, 145), new Enemy(-50, 145), new Enemy(-900, 230), new Enemy(-487, 230), new Enemy(-220, 230), new Enemy(-130, 230), new Enemy(3, 230)];
var player = new Player(200, 400); // Should be 200, 400.



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
