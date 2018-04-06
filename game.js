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
  self.img = new Image();
  self.img.src = "./images/a3cdd2d5633aa941fb00726edc25e4ff.jpg"; 
  self.enemiesImages = ["./images/imagenes-german/byron.png", "./images/imagenes-german/eloi.png", "./images/imagenes-german/filipe.png", "./images/imagenes-german/greta.png", "./images/imagenes-german/jordi.png", "./images/imagenes-german/jorge.png", "./images/imagenes-german/lennie.png", "./images/imagenes-german/mathi.png", "./images/imagenes-german/mihai.png", "./images/imagenes-german/miriam.png", "./images/imagenes-german/fredrik.png", "./images/imagenes-german/seba.png", "./images/imagenes-german/samantha.png"];

  self.scoreInterval = null;
  self.frame();
  self.createScore();
};

//Method que hace un push de 10 Enemy a una array de enemies
Game.prototype.createEnemies = function () {
  var self = this;

  if(self.enemies.length < 10) {
  for (var i = 0; i < 10; i++) {
    self.enemies.push(new Enemy(self.ctx, self.enemiesImages[Math.floor(Math.random() * self.enemiesImages.length)]));
    }
  }
}

//Method que comprueba la colisión de objetos a player
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
      } else if (enemy.topEdge < player.bottomEdge && player.bottomEdge < enemy.bottomEdge) {
        self.isOver = true; 
      }
    }
    if(enemy.leftEdge < player.rigthEdge && player.rigthEdge < enemy.rigthEdge){
      if (enemy.topEdge < player.topEdge && player.topEdge < enemy.bottomEdge){
        self.isOver = true; 
      } else if(enemy.topEdge < player.bottomEdge && player.bottomEdge < enemy.bottomEdge){
        self.isOver = true; 
      }
    }
  });
}

//Method que cada segundo llama a la función que sumas 10 al score 
Game.prototype.createScore = function() {
  var self = this;

  self.scoreInterval = window.setInterval(function() {
    self.updateScore();
  }, 500);
}

//Method que aumenta en 10 el score 
Game.prototype.updateScore = function() {
  var self = this;

  self.score += 10;
}

//Mehtod que hace el update de player y enemie para comprobar posibles cambios como colisiones 
Game.prototype.update = function() {
  var self = this;

  self.checkCollisions(); 
  self.enemies.forEach(function(enemy) {
    enemy.update();
  });
  self.player.update();
}

//Method para dibujar tanto a la array de enemies como al player 
Game.prototype.draw = function() {
  var self = this;

  self.enemies.forEach(function(enemy) {
      enemy.draw()
    });
  self.player.draw();
};

//Method que dibuja el score en la parte deseada de la pantalla 
Game.prototype.drawScore = function () {
  var self = this;

 
  self.ctx.fillStyle = 'white'
  self.ctx.font = '30px Arial'
  self.ctx.fillText('Score: ' + self.score, 50, 50 )
}

//Method que ejecuta todo lo anterior y dibuja el fondo 
Game.prototype.frame = function() {
  var self = this;
  
  self.ctx.clearRect(0, 0, self.width, self.heigth);
  self.ctx.drawImage(self.img, 0, 0, self.width, self.height);

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

//Method que llama al callback para acabar el juego
Game.prototype.onEnded = function (cb){
  var self = this;

  self.callback = cb
}