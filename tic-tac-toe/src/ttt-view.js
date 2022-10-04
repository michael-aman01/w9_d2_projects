class View {
  constructor(game, el) {
    this.game = game;
    this.el = el;
    this.setupBoard()
  }

  setupBoard() {
    this.grid = document.createElement("ul");
    this.grid.setAttribute("id","grid");
    this.el.appendChild(this.grid);
    //add children 
    for(let i = 0; i < 3; i++){
      for(let j = 0; j < 3; j++){
          let newChild = document.createElement('li');
          newChild.setAttribute("data-pos",[i,j]);

          newChild.setAttribute("class","cell");
          this.grid.appendChild(newChild)
          this.bindEvents(newChild)
      }
    }
    this.bindEvents();
  }
  
  bindEvents(element) {
    let that = this
    element.addEventListener("click", function(e){
      that.handleClick(e)
    })
  }

  handleClick(e) {
    console.log(e)
    e.target.style.backgroundColor = "red"
    
    this.makeMove(e.target)
  }

  makeMove(square) {
    let strVal  = square.getAttribute("data-pos").split(',')

    let pos = [parseInt(strVal[0]), parseInt(strVal[1])] 
    // console.log(pos, pos[0])
    // console.log(square.getAttribute("data-pos")[0])
    // console.log(this.game)
    this.game.playMove(pos)
    let currentPlayer = this.game.currentPlayer
    // console.log(currentPlayer)
    console.log(square)
    if (currentPlayer === "x") {
      square.innerHTML= 'o';
    } else {
      square.innerHTML = 'x';
    }
    if(this.game.board.isOver()){
      alert("GAME OVER")
      this.el.remove()
      this.game.winner()
      window.location.reload()
    }
  }
  

}


module.exports = View;
