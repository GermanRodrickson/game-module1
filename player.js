
function Player(ctx) {
  var self = this;
  
  self.x = 900/2;
  self.y = 450;
  self.canvas = canvas;
  self.ctx = ctx;

  self.speed = SPEED * 2;


  self.size = {
    x: 10,
    y: 20
  };
  
}

// ----------- Draw---------------
Player.prototype.draw = function() {
  var self = this;
  self.ctx.clearRect(0, 0, self.width, self.heigth);
   self.ctx.fillStyle = "red";
  self.ctx.fillRect(self.x, self.y, 25, 25);
};

// ----------- Movements--------------- // cambiarlo en el caso de cambiar tamaño de la pantalla 
Player.prototype.moveUp = function() {
  var self = this;
  if(self.y - 10 >= 10){
    self.y -= self.speed;
  }
};

Player.prototype.moveDown = function() {
  var self = this;
  if(self.y + 10 <= 470) {
    self.y += self.speed;
  }
};

Player.prototype.moveRight = function() {
  var self = this;
  if(self.x + 10 <= 850)
  self.x += self.speed;
};

Player.prototype.moveLeft = function() {
  var self = this;
  if(self.x - 10 >= 10)
  self.x -= self.speed;

};

// ----------- Update---------------
Player.prototype.update = function() {
  var self = this;
  document.onkeydown = function(event) {
    switch (event.keyCode) {
      case 38:
        self.moveUp();
        break;
      case 40:
        self.moveDown();
        break;
      case 37:
        self.moveLeft();
        break;
      case 39:
        self.moveRight();
        break;
    }
  };
}

