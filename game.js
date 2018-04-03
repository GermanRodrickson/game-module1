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
  self.frame();
};

Game.prototype.update = function() {
  var self = this;

  self.player.update()
}

Game.prototype.draw = function() {
  var self = this;

  self.player.draw();
};

Game.prototype.frame = function() {
  var self = this;
  self.ctx.clearRect(0, 0, self.width, self.heigth);
  self.ctx.fillStyle = "grey";
  self.ctx.fillRect(0, 0, self.width, self.height);

  self.update();
  self.draw();
  window.requestAnimationFrame(function() {
    self.frame();
  });
};
