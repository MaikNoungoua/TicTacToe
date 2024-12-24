
const GameBoard = {
    "board":[0,0,0,0,0,0,0,0,0]
   /* "winning_combo1": [GameBoard.board[0],GameBoard.board[1],GameBoard.board[2]],
    "winning_combo2": [GameBoard.board[3],GameBoard.board[4],GameBoard.board[5]],
    "winning_combo3": [GameBoard.board[6],GameBoard.board[7],GameBoard.board[8]],
    "winning_combo4": [GameBoard.board[0],GameBoard.board[4],GameBoard.board[8]],
    "winning_combo5": [GameBoard.board[2],GameBoard.board[4],GameBoard.board[6]],
    "winning_combo6": [GameBoard.board[0],GameBoard.board[3],GameBoard.board[6]],
    "winning_combo7": [GameBoard.board[1],GameBoard.board[4],GameBoard.board[7]],
    "winning_combo1": [GameBoard.board[2],GameBoard.board[5],GameBoard.board[8]]*/
}


let Player1 = {
    "name": 'Player1',
    "marker" : '1', 
    "score":0,
    "num_value": '1'
};

let Player2 = {
    "name": 'Player2',
    "marker": '2',
    "score": 0,
    "num_value": '2'
};

const assignXMarkerPlayer1 = () =>{
    Player1.marker = "X";   
}
const assignOMarkerPlayer1 = () =>{
    Player1.marker = "O";   
}

const assignXMarkerPlayer2 = () =>{
    Player2.marker = "X";   
}
const assignOMarkerPlayer2 = () =>{
    Player2.marker = "O";   
}

const players = [Player1,Player2];

let activePlayer = players[0];

const switchPlayerTurn = () => {
    //activePlayer = activePlayer === players[0] ? players[0] : players[1];    
    if (activePlayer == players[0]){
        activePlayer = players[1]
    }
    else{
        activePlayer = players[0];
    }
}

const playValidation = (index) => {
    if (GameBoard.board[index] == 0 ){
        return true
    }
    else{
        alert("Invalid moove");
    }
}

const checkWinner = () => {
    if(GameBoard.board[0]+GameBoard.board[1]+GameBoard.board[2] == '111' || 
       GameBoard.board[3]+GameBoard.board[4]+GameBoard.board[5] == '111' || 
       GameBoard.board[6]+GameBoard.board[7]+GameBoard.board[8] == '111' || 
       GameBoard.board[0]+GameBoard.board[3]+GameBoard.board[6] == '111' ||
       GameBoard.board[1]+GameBoard.board[4]+GameBoard.board[7] == '111' ||
       GameBoard.board[2]+GameBoard.board[5]+GameBoard.board[8] == '111' || 
       GameBoard.board[0]+GameBoard.board[4]+GameBoard.board[8] == '111' ||
       GameBoard.board[2]+GameBoard.board[4]+GameBoard.board[6] == '111')
    {
        return "Player 1"
    }
    if(GameBoard.board[0]+GameBoard.board[1]+GameBoard.board[2] == '222'
        || GameBoard.board[3]+GameBoard.board[4]+GameBoard.board[5] == '222'
        || GameBoard.board[6]+GameBoard.board[7]+GameBoard.board[8] == '222'
        || GameBoard.board[0]+GameBoard.board[3]+GameBoard.board[6] == '222'
        || GameBoard.board[1]+GameBoard.board[4]+GameBoard.board[7] == '222'
        || GameBoard.board[2]+GameBoard.board[5]+GameBoard.board[8] == '222'
        || GameBoard.board[0]+GameBoard.board[4]+GameBoard.board[8] == '222'
        || GameBoard.board[2]+GameBoard.board[4]+GameBoard.board[6] == '222'
    ){
        return "Player 2"
    }
    else{}
    

}





let clickHandler = document.querySelector("body")

clickHandler.addEventListener('click', (event) => {
    let index = 0;
    let target = event.target;
    let rounds = [];
    

    switch(target.id){

        case 'square0':
            index = target.id.slice(-1);
            if (playValidation(index) == true) {
                GameBoard.board[0] = activePlayer.num_value;
                document.getElementById(target.id).innerHTML = activePlayer.marker;
                switchPlayerTurn();
            };
            
            if (checkWinner() == "Player 1"){
                alert("Player 1 wins");
            }
            else if (checkWinner() == "Player 2"){
                alert("Player 1 wins");
            }
            else {}
            
            break;
        case 'square1':

            index = target.id.slice(-1);
            console.log(index);
            if (playValidation(index) == true) {
                GameBoard.board[index] = activePlayer.num_value;
                document.getElementById(target.id).innerHTML = activePlayer.marker;
                switchPlayerTurn();
            };
            if (checkWinner() == "Player 1"){
                alert("Player 1 wins");
            }
            else if (checkWinner() == "Player 2"){
                alert("Player 1 wins");
            }
            else {}
            break;
        case 'square2':
            index = target.id.slice(-1);
            console.log(index);
            if (playValidation(index) == true) {
                GameBoard.board[index] = activePlayer.num_value;
                document.getElementById(target.id).innerHTML = activePlayer.marker;
                switchPlayerTurn();
            };
            if (checkWinner() == "Player 1"){
                alert("Player 1 wins");
            }
            else if (checkWinner() == "Player 2"){
                alert("Player 1 wins");
            }
            else {}
            break;
        case 'square3':
            index = target.id.slice(-1);
            console.log(index);
            if (playValidation(index) == true) {
                GameBoard.board[index] = activePlayer.num_value;
                document.getElementById(target.id).innerHTML = activePlayer.marker;
                switchPlayerTurn();
            };
            if (checkWinner() == "Player 1"){
                alert("Player 1 wins");
            }
            else if (checkWinner() == "Player 2"){
                alert("Player 1 wins");
            }
            else {}
            break;
        case 'square4':
            index = target.id.slice(-1);
            console.log(index);
            if (playValidation(index) == true) {
                GameBoard.board[index] = activePlayer.num_value;
                document.getElementById(target.id).innerHTML = activePlayer.marker;
                switchPlayerTurn();
            };
            if (checkWinner() == "Player 1"){
                alert("Player 1 wins");
            }
            else if (checkWinner() == "Player 2"){
                alert("Player 1 wins");
            }
            else {}
            break;
        case 'square5':
            index = target.id.slice(-1);
            console.log(index);
            if (playValidation(index) == true) {
                GameBoard.board[index] = activePlayer.num_value;
                document.getElementById(target.id).innerHTML = activePlayer.marker;
                switchPlayerTurn();
            };
            if (checkWinner() == "Player 1"){
                alert("Player 1 wins");
            }
            else if (checkWinner() == "Player 2"){
                alert("Player 1 wins");
            }
            else {}
            break;
        case 'square6':
            index = target.id.slice(-1);
            console.log(index);
            if (playValidation(index) == true) {
                GameBoard.board[index] = activePlayer.num_value;
                document.getElementById(target.id).innerHTML = activePlayer.marker;
                switchPlayerTurn();
            };
            if (checkWinner() == "Player 1"){
                alert("Player 1 wins");
            }
            else if (checkWinner() == "Player 2"){
                alert("Player 1 wins");
            }
            else {}
            break;
        case 'square7':
            index = target.id.slice(-1);
            console.log(index);
            if (playValidation(index) == true) {
                GameBoard.board[index] = activePlayer.num_value;
                document.getElementById(target.id).innerHTML = activePlayer.marker;
                switchPlayerTurn();
            };
            if (checkWinner() == "Player 1"){
                alert("Player 1 wins");
            }
            else if (checkWinner() == "Player 2"){
                alert("Player 1 wins");
            }
            else {}
            break; 
        case 'square8':
            index = target.id.slice(-1);
            console.log(index);
            if (playValidation(index) == true) {
                GameBoard.board[index] = activePlayer.num_value;
                document.getElementById(target.id).innerHTML = activePlayer.marker;
                switchPlayerTurn();
            };
            if (checkWinner() == "Player 1"){
                alert("Player 1 wins");
            }
            else if (checkWinner() == "Player 2"){
                alert("Player 1 wins");
            }
            else {}
            break;
        case 'x-pl-1':
            assignXMarkerPlayer1();
            break;
        case 'o-pl-1':
            assignOMarkerPlayer1();
            break;
        case 'x-pl-2':
            assignXMarkerPlayer2();
            break;
        case 'o-pl-2':
            assignOMarkerPlayer2();
            break;
    }
});

