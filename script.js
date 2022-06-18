let modal = document.querySelector(".game-start-modal");
let p1Input = document.querySelector("#p1name");
let p2Input = document.querySelector("#p2name");
let ai;

function startGame(){
    ai = false;
    let p1name = p1Input.value;
    let p2name = p2Input.value;

    if (p1name && p2name){
        modal.style.display = "none";
        const game = new Game(p1name,p2name);
        game.startGame();
    } else{
        alert("Fill in names");
    }
}

function startGameAi(){
    ai = true;
    const game = new Ai("you","computer");
    modal.style.display = "none";
    game.startGame();
}

function reset(){
    ai?startGameAi():startGame();
}
function changeMode(){
    modal.style.display = "block";
}

/*
let newBoard = prepareBoard( ["O","","X","X","","X","","O","O"])
console.log(minimax(newBoard,"O").index)
*/