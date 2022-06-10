class Game{
    constructor(p1name,p2name){
        this.p1name = p1name;
        this.p2name = p2name;

        this.cells = document.querySelectorAll(".cell");
        this.gameboard = new GameBoard(this.cells);
        //create this new function so that event listener can be removed
        //and reference the correct this in the function
        this.boundClickCell = (e) => this.clickCell(e);
        this.cells.forEach(cell=>{
            cell.addEventListener("click",this.boundClickCell);
        })
    }

    clickCell(e){
        //prevents placing in a used square
        if (this.gameboard.getCell(
            e.target.dataset.index
        ) !== ""){
            return;
        }

        this.gameboard.setGameboard(
            e.target.dataset.index,
            this.currentPlayer.marker
        )
        if(checkGameOver(this.gameboard.getBoard(),this.currentPlayer.marker)){
            console.log(`game over ${this.currentPlayer.name} wins`)
            this.endGame();
        }
        if(emptyCells(this.gameboard.getBoard()).length == 0){
            console.log("draw");
            this.endGame();
        }
        this.currentPlayer = this.swapTurn();
    }
    
    startGame(){
        this.player1 = new Player(this.p1name,"X");
        this.player2 = new Player(this.p2name,"O");
        this.currentPlayer = this.player1;
        this.gameboard.display();
    }

    swapTurn(){
        return this.currentPlayer == this.player1
            ?this.player2
            :this.player1
    }

    endGame(){
        this.cells.forEach(cell=>{
            cell.removeEventListener("click",this.boundClickCell);
        })
    }
}

