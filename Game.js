class Game{
    constructor(){
        this.cells = document.querySelectorAll(".cell");
        this.cells.forEach(cell=>{
            cell.addEventListener("click",(e)=>{
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
                }
                this.currentPlayer = this.swapTurn();
            });
        })

        this.gameboard = new GameBoard(this.cells);
    }
    
    startGame(){
        this.player1 = new Player("p1","X");
        this.player2 = new Player("p2","O");
        this.currentPlayer = this.player1;
        this.gameboard.display();
    }

    swapTurn(){
        return this.currentPlayer == this.player1
            ?this.player2
            :this.player1
    }


    checkGameOver(){
        let board = this.gameboard.getBoard();
        const winConditions = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ]

        //check each combination
        for (let combination of winConditions){
            if (board[combination[0]] == board[combination[1]] &&
                board[combination[0]] == board[combination[2]] &&
                board[combination[0]] !== ""){
                    return true;
                }
            }
    }
}

const game = new Game();
game.startGame();

