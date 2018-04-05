'use strict'
var SPEED = 5;

function Game(canvas) {
  var self = this; 

  self.canvas = canvas;
  self.ctx = canvas.getContext("2d");
  self.width = 900;
  self.height = self.width / 1.77;

  self.ctx.canvas.width = self.width;
  self.ctx.canvas.height = self.height;

  self.x = 250;
  self.y = 450;

  self.score = 0;
  self.isOver = false;
  
  self.player = new Player(self.ctx);

  self.enemies = [];

  self.scoreInterval = null;
  self.frame();
  self.createScore();
};


Game.prototype.createEnemies = function () {
  var self = this;

  if(self.enemies.length < 10) {
  for (var i = 0; i < 10; i++) {
    self.enemies.push(new Enemy(self.ctx));
    }
  }
}
Game.prototype.checkCollisions = function() {
  var self = this;
  

  self.enemies.forEach(function(enemy) {
    var player = {
      leftEdge: self.player.position.x,
      rigthEdge: self.player.position.x + self.player.size.x,
      topEdge: self.player.position.y,
      bottomEdge: self.player.position.y + self.player.size.y
    }

    var enemy = {
      leftEdge: enemy.position.x,
      rigthEdge: enemy.position.x + enemy.size.x,
      topEdge: enemy.position.y,
      bottomEdge: enemy.position.y + enemy.size.y
    }

    if(enemy.leftEdge < player.leftEdge && player.leftEdge < enemy.rigthEdge){
      if(enemy.topEdge < player.topEdge && player.topEdge < enemy.bottomEdge ){
        self.isOver = true; 
      }
      if (enemy.topEdge < player.bottomEdge && player.bottomEdge < enemy.bottomEdge) {
        self.isOver = true; 
      }
    }
    if(enemy.leftEdge < player.rigthEdge && player.rigthEdge < enemy.rigthEdge){
      if (enemy.topEdge < player.topEdge && player.topEdge < enemy.bottomEdge){
        self.isOver = true; 
      }
      if(enemy.topEdge < player.bottomEdge && player.bottomEdge < enemy.bottomEdge){
        self.isOver = true; 
      }
    }
  });
}

Game.prototype.createScore = function() {
  var self = this;

  self.scoreInterval = window.setInterval(function() {
    self.updateScore();
  }, 1000);
}

Game.prototype.updateScore = function() {
  var self = this;

  self.score += 10;
}

Game.prototype.update = function() {
  var self = this;

  self.checkCollisions(); 
  self.enemies.forEach(function(enemy) {
    enemy.update();
  });
  self.player.update();
}

Game.prototype.draw = function() {
  var self = this;

  self.enemies.forEach(function(enemy) {
      enemy.draw()
    });
  self.player.draw();
};

Game.prototype.drawScore = function () {
  var self = this;

 
  self.ctx.fillStyle = 'white'
  self.ctx.font = '30px Arial'
  self.ctx.fillText('Score: ' + self.score, 50, 50 )
}

Game.prototype.frame = function() {
  var self = this;
  
  self.ctx.clearRect(0, 0, self.width, self.heigth);
  self.ctx.fillStyle = "grey";
  self.ctx.fillRect(0, 0, self.width, self.height);

  self.createEnemies();
  self.update();
  self.draw();
  self.drawScore();

  if(self.isOver) {
    self.callback(self.score)
  } else {
  window.requestAnimationFrame(function() {
    self.frame();
  });
  }
};

Game.prototype.onEnded = function (cb){
  var self = this;

  self.callback = cb
}