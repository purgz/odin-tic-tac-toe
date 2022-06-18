class Ai extends Game{
   constructor(p1name,p2name){
       super(p1name,p2name);
   }

   clickCell(e){
        if (this.currentPlayer !== this.player1){ return; }
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
        console.log(checkGameOver(this.gameboard.getBoard(),this.currentPlayer.marker))
        if(checkGameOver(this.gameboard.getBoard(),this.currentPlayer.marker)){
            this.result.textContent = (`Game Over ${this.currentPlayer.name} wins`)
            this.endGame();
            return;
        }
        if(emptyCells(this.gameboard.getBoard()).length == 0){
            this.result.textContent = "Draw"
            this.endGame();
            return;
        }
        this.currentPlayer = this.swapTurn();
        this.aiMove();
    }

    aiMove(){
      
        let move = this.generateMove();
       
        this.gameboard.setGameboard(move,this.currentPlayer.marker);

        if(checkGameOver(this.gameboard.getBoard(),this.currentPlayer.marker)){
            this.result.textContent = (`Game Over ${this.currentPlayer.name} wins`)
            this.endGame();
        }
        if(emptyCells(this.gameboard.getBoard()).length == 0){
            this.result.textContent = "Draw"
            this.endGame();
        }
        
        this.currentPlayer = this.swapTurn();
    }
    //random move generator 
    generateMove(){
        let board = prepareBoard(Array.from((this.gameboard.getBoard())))
        console.log(board)
        let move =  minimax(board,"O").index 
        console.log(move);
        return move + 1;
    }
}