
function Player(ctx) {
  var self = this;
  
  self.canvas = canvas;
  self.ctx = ctx;

  
  self.position = {
    x: 900/2,
    y: 450
  };
  
  self.direction = null;
  self.speed = SPEED * 5;

  self.size = {
    x: 60,
    y: 120
  };
  self.img = new Image();
  self.img.src = "./images/power-bike-top copia.png"; 

  self.setupKeybinding();
  
}

// Method para dibujar el player con una imagen
Player.prototype.draw = function() {
  var self = this;
  
  self.ctx.drawImage(self.img, self.position.x, self.position.y, self.size.x, self.size.y);
  
};

//Method para realizar los movimientos del player, cambiarlo en el caso de cambiar tamaño de la pantalla 
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

//Method para hacer el movimiento mas fluido 
Player.prototype.setupKeybinding = function () {
  var self = this;
  document.onkeydown = function(event) {
    event.preventDefault();
    switch (event.keyCode) {
      case 38:
        self.direction = 'up'
        self.speed = SPEED * 2
        break;
      case 40:
        self.direction = 'down'
        self.speed = SPEED * 2
        break;
      case 37:
        self.direction = 'left'
        self.speed = SPEED * 2
        break;
      case 39:
        self.direction = 'right'
        self.speed = SPEED * 2
        break;
    }
  };
//Method para hacer que el jugador pare cuando levantamos la tecla
  document.onkeyup = function(event) {
    event.preventDefault();
    switch (event.keyCode) {
      case 38:
        self.speed = 0
        break;
      case 40:
        self.speed = 0
        break;
      case 37:
        self.speed = 0
        break;
      case 39:
        self.speed = 0
        break;
    }
  };

}

//Movimiento mediante keys
Player.prototype.update = function() {
  var self = this;

  switch (self.direction) {
    case 'up':
      self.moveUp();
      break;
    case 'down':
      self.moveDown();
      break;
    case 'left':
      self.moveLeft();
      break;
    case 'right':
      self.moveRight();
      break;
  }
}



