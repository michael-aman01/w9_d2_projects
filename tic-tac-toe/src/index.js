const View = require("./ttt-view")
const Game = require("../ttt_node/game")

document.addEventListener("DOMContentLoaded", () => {
  const game = new Game();
  const figureElement = document.getElementsByClassName("ttt")[0]
  const view = new View(game,figureElement);

  
});
