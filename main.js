'use strict';

function createHtml(html) {
  var div = document.createElement("div");
  div.innerHTML = html;
  return div.children[0];
}

function main() {

  var mainContentElement = document.getElementById("main-content");

  // -- TITLE SCREEN

  var titleScreenElement;
  var startButtonElement;

  function handleStartClick() {
    destroyTitleScreen();
    buildGameScreen();
  }

  function buildTitleScreen() {
    titleScreenElement = createHtml(`<div class = "main-background">
    <h1 class = "main-title">Help **** get home</h1>
    <div class = "main-buttons">
      <button>Start game</button>
      <button>Instruccions</button>
    </div>
    </div>`);
    mainContentElement.appendChild(titleScreenElement);
    startButtonElement = titleScreenElement.querySelector("button");
    startButtonElement.addEventListener("click", handleStartClick);
  }

  function destroyTitleScreen() {
    titleScreenElement.remove();
    startButtonElement.removeEventListener("click", handleStartClick);
  }

  // -- GAME SCREEN

  var gameScreenElement;
  var game;
  var player;
  var enemy;

  function gameEnded(score) {
    destroyGameScreen();
    buildGameOverScreen(score);
  }

  function buildGameScreen() {
    gameScreenElement = createHtml(`<div class = "rapha"><canvas id="canvas"></canvas></div>`);
    mainContentElement.appendChild(gameScreenElement);
    var canvas = document.getElementById("canvas");
    var game = new Game(canvas);
    enemy = new Enemy(canvas);
    game.onEnded(function(score){
      gameEnded(score)
    })
  }
  function destroyGameScreen() {
    gameScreenElement.remove();
  }

  // -- GAME OVER SCREEN

  var gameOverScreenElement;
  var restartGameButtonElement;

  function handleRestartClick() {
    destroyGameOverScreen();
    buildGameScreen();
  }

  function buildGameOverScreen(score) {
    gameOverScreenElement = createHtml(`<div class = "game-over-background">
    <h1 class="game-over-title">Game Over</h1>
      <div class = "game-over-text">
        <p class = "score">Score:`+score+`</p>
        <button class="restart">Restart</button>
      </div>
      </div>`);
    mainContentElement.appendChild(gameOverScreenElement);
    restartGameButtonElement = gameOverScreenElement.querySelector("button");
    restartGameButtonElement.addEventListener("click", handleRestartClick);
  }

  function destroyGameOverScreen() {
    gameOverScreenElement.remove();
    restartGameButtonElement.removeEventListener("click", handleRestartClick);
  }

  // -- start the app

  buildTitleScreen();
}

window.addEventListener("load", main);


