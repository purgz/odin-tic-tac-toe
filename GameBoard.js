class GameBoard {
    #gameBoard;
    
    constructor(cells){
        this.#gameBoard = ["","","","","","","","",""];
        this.cells = cells;
    }

    display(){
        let i = 0;
        this.cells.forEach((cell)=>{
            cell.textContent = this.#gameBoard[i];
            i++;
        })
    }

    setGameboard(index,marker){
        this.#gameBoard[index-1] = marker;
        this.display();
    }

    getCell(index){
        return this.#gameBoard[index-1];
    }
    getBoard(){
        return this.#gameBoard;
    }
}

