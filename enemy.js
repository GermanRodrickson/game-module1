function Enemy(ctx) {
  var self = this;
  
  self.canvas = canvas;
  self.ctx = ctx;

  self.position = {
    x: Math.floor(Math.random() * 900),
    y: -5
  };

  self.speed = 2 + Math.floor(Math.random() * SPEED);

   self.size = {
    x: 40,
    y: 40
  };

   self.img = new Image();
   self.img.src = "./images/cara-rapha.png";
}

Enemy.prototype.update = function () {
  var self = this
  
  randomNumberX = Math.floor(Math.random() * 10);
  if(randomNumberX === 5) {
    self.position.x += self.speed;
  } else if (randomNumberX === 3) {
    self.position.x -= self.speed;
  }
  self.position.y += self.speed;
  if(self.position.y > 500 ){
    self.position.y = Math.floor(Math.random() * -50)
    self.position.x = Math.floor(Math.random() * 900)
  }
}
Enemy.prototype.draw = function () {
  var self = this;

  self.ctx.drawImage(self.img, self.position.x, self.position.y, self.size.x, self.size.y);
}
