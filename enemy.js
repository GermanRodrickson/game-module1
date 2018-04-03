function Enemy(canvas) {
  var self = this;

  self.x = 25;
  self.y = 25;
  self.canvas = canvas;
  self.ctx = canvas.getContext("2d");



  self.draw();
}

Enemy.prototype.draw = function () {
  var self = this
  self.ctx.clearRect(0, 0, self.width, self.heigth);
  self.ctx.fillStyle = "white";
  self.ctx.fillRect(0, 0, self.width, self.height);

  window.requestAnimationFrame(function() {
    self.draw();
  });
}