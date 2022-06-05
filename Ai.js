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
        if(this.checkGameOver()){
            console.log(`game over ${this.currentPlayer.name} wins`)
            this.endGame();
            return;
        }
        if(this.checkDraw()){
            console.log("draw");
            this.endGame();
            return;
        }
        this.currentPlayer = this.swapTurn();
        this.aiMove();
    }

    aiMove(){
      
        let move;
        do{
            move = this.generateMove();
        } while (this.gameboard.getCell(move)!=="" && !this.gameboard.isFull());
       
        this.gameboard.setGameboard(move,this.currentPlayer.marker);

        if(this.checkGameOver()){
            console.log(`game over ${this.currentPlayer.name} wins`)
            this.endGame();
        }
        if(this.checkDraw()){
            console.log("draw");
            this.endGame();
        }
        this.currentPlayer = this.swapTurn();
    }

    generateMove(){
        return Math.round(Math.random()*(9-1)+1);
    }
}