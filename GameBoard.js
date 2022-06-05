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

    isFull(){
        for(let i = 0;i < this.#gameBoard.length;i++){
            if (this.#gameBoard[i] == ""){
                return false;
            }
        }
        console.log("full")
        return true;
    }
}

