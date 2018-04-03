
function Player(canvas) {
  var self = this;
  
  self.x = 900/2;
  self.y = 450;
  self.canvas = canvas;
  self.ctx = canvas.getContext("2d");


  self.size = {
    x: 10,
    y: 20
  };
  //self.update();
  self.draw();
  //self.move();
  
}
// ----------- Draw---------------
Player.prototype.draw = function() {
  var self = this;
  self.ctx.clearRect(0, 0, self.width, self.heigth);
   self.ctx.fillStyle = "red";
  self.ctx.fillRect(self.x, self.y, 25, 25);

    window.requestAnimationFrame(function() {
      self.draw();
    });
};

// ----------- Movements---------------
Player.prototype.moveUp = function() {
  var self = this;
  self.y -= 10;
};
Player.prototype.moveDown = function() {
  var self = this;
  self.y += 10;
};
Player.prototype.moveRight = function() {
  var self = this;
  self.x += 10;
};
Player.prototype.moveLeft = function() {
  var self = this;
  self.x -= 10;
};
// ----------- Update---------------
Player.prototype.update = function() {
  document.onkeydown = function(event) {
    switch (event.keyCode) {
      case 38:
        moveUp();
        break;
      case 40:
        moveDown();
        break;
      case 37:
        moveLeft();
        break;
      case 39:
        moveRight();
        break;
    }
  };
}

