function checkGameOver(board,player){
    
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
            board[combination[0]] !== "" &&
            board[combination[0]] == player){
                return true;
            }
    }
}

function emptyCells(board){
    return board.filter(e => e !="X" && e != "O");
}

let huPlayer = "X";
let aiPlayer = "O";
fc = 0;

function prepareBoard(board){
    for (let i = 0; i<board.length;i++){
        if (board[i] == ""){
            board[i] = i;
        }
    }
    return board;
}

function minimax(newboard,player){
    fc++;
   // console.log(fc)

    let availSpots = emptyCells(newboard);

    if (checkGameOver(newboard,huPlayer)){
        return {score: -10}  
    }
    else if (checkGameOver(newboard,aiPlayer)){
        return {score: 10};
    }
    else if (availSpots.length == 0){
        return {score:0};
    }

    let moves = [];

    for (let i = 0; i < availSpots.length; i++){
        let move = {};
        move.index = newboard[availSpots[i]];

        newboard[availSpots[i]] = player;

        if (player == aiPlayer){
            let result = minimax(newboard,huPlayer);
            move.score = result.score;
        }
        else {
            let result = minimax(newboard,aiPlayer);
            move.score = result.score;
        }

        newboard[availSpots[i]] = move.index;

        moves.push(move);
    }

    let bestmove;
    if (player === aiPlayer){
        let bestScore = -100000;
        for (var i = 0; i < moves.length; i++){
            if (moves[i].score > bestScore){
                bestScore = moves[i].score;
                bestmove = i;
            }
        }
    }
    else {
        let bestScore = 100000;
        for (var i = 0; i < moves.length; i++){
            if (moves[i].score < bestScore){
                bestScore = moves[i].score;
                bestmove = i;
            }
        }
    }    

    return moves[bestmove];
}