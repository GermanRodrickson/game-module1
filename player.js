
function Player(ctx) {
  var self = this;
  
  self.canvas = canvas;
  self.ctx = ctx;

  
  self.position = {
    x: 900/2,
    y: 450
  };
  

  self.speed = SPEED * 5;

  self.size = {
    x: 25,
    y: 45
  };
  
}

// ----------- Draw--------------- 
Player.prototype.draw = function() {
  var self = this;

   self.ctx.fillStyle = "red";
  self.ctx.fillRect(self.position.x, self.position.y, self.size.x, self.size.y);
  
};

// ----------- Movements--------------- // cambiarlo en el caso de cambiar tamaño de la pantalla 
Player.prototype.moveUp = function() {
  var self = this;

  if(self.position.y - 10 >= 10){
    self.position.y -= self.speed;
  }
};

Player.prototype.moveDown = function() {
  var self = this;

  if(self.position.y + 10 <= 470) {
    self.position.y += self.speed;
  }
};

Player.prototype.moveRight = function() {
  var self = this;

  if(self.position.x + 10 <= 850) {
  self.position.x += self.speed;
  }
};

Player.prototype.moveLeft = function() {
  var self = this;

  if(self.position.x - 10 >= 10) {
  self.position.x -= self.speed;
  }

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



