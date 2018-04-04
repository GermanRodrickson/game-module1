var SPEED = 10;

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
  
  self.player = new Player(self.ctx);
  // self.enemy = new Enemy(self.ctx);

  self.enemies = [];


  self.frame();
};

///method for create enemies
// for (var i until 10) 
//  enemies.push(new Enemy);

Game.prototype.createEnemies = function () {
  var self = this;

  debugger;
  if(self.enemies.length < 10) {
  for (var i = 0; i < 10; i++) {
    self.enemies.push(new Enemy(self.ctx));
    }
  }
}

Game.prototype.update = function() {
  var self = this;
  
  self.enemies.forEach(function(enemy) {
    enemy.update();
  });
  self.player.update()
}

Game.prototype.draw = function() {
  var self = this;

  self.enemies.forEach(function(enemy) {
      enemy.draw()
    });
  self.player.draw();
};

Game.prototype.frame = function() {
  var self = this;

  self.ctx.clearRect(0, 0, self.width, self.heigth);
  self.ctx.fillStyle = "grey";
  self.ctx.fillRect(0, 0, self.width, self.height);

  self.createEnemies();
  self.update();
  self.draw();


  window.requestAnimationFrame(function() {
    self.frame();
  });

};

