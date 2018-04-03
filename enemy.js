function Enemy(ctx) {
  var self = this;

  self.x = Math.floor(Math.random() * 900);
  self.y = -5 ;
  self.canvas = canvas;
  self.ctx = ctx;

  self.speed = SPEED / 2
}

Enemy.prototype.draw = function () {
  var self = this;

  self.ctx.fillStyle = "blue";
  self.ctx.fillRect(self.x, self.y, 30, 30);
}

Enemy.prototype.update = function () {
  var self = this

  self.y ++
  if(self.y > 500 ){
    self.y = Math.floor(Math.random() * -50)
    self.x = Math.floor(Math.random() * 900)
  }
}