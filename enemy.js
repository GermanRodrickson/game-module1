function Enemy(ctx) {
  var self = this;
  
  self.canvas = canvas;
  self.ctx = ctx;

  self.x = Math.floor(Math.random() * 900);
  self.y = -5 ;

  self.speed = 2 + Math.floor(Math.random() * 18);
}

Enemy.prototype.update = function () {
  var self = this

  self.y += self.speed;
  if(self.y > 500 ){
    self.y = Math.floor(Math.random() * -50)
    self.x = Math.floor(Math.random() * 900)
  }
}
Enemy.prototype.draw = function () {
  var self = this;

  self.ctx.fillStyle = "blue";
  self.ctx.fillRect(self.x, self.y, 30, 30);
}
