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

    checkDraw(){
        let board = this.gameboard.getBoard();

        for (let cell of board){
            if (cell == ""){
                return false;
            }
        }
        return true;
    }

    endGame(){
        this.cells.forEach(cell=>{
            cell.removeEventListener("click",this.boundClickCell);
        })
    }
}

let modal = document.querySelector(".game-start-modal");
let p1Input = document.querySelector("#p1name");
let p2Input = document.querySelector("#p2name");
function startGame(){
    let p1name = p1Input.value;
    let p2name = p2Input.value;

    if (p1name && p2name){
        modal.style.display = "none";
        const game = new Game(p1name,p2name);
        game.startGame();
    }
}

function reset(){
    startGame();
}
function changeMode(){
    modal.style.display = "block";
}
