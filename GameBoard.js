class GameBoard {
    constructor(){
        this.gameBoard = ["x","","","x","","","","",""];
        this.cells = document.querySelectorAll(".cell");
    }

    display(){
        let i = 0;
        this.cells.forEach((cell)=>{
            cell.textContent = this.gameBoard[i];
            i++;
        })
    }
}

