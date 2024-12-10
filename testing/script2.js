let playFlag = true;

function GameBoard() {
    const rows = 3; 
    const columns = 3; 
    const board = [];

    for (let i = 0; i < rows; i++){
        board[i] = [];
        for (let j = 0; j < columns; j++){
            board[i].push(Tile());
        }
    }

    //this is the method to retrieve our baord and on it the info that the UI will render
    const getBoard = () => board;

    //In order to place a marker we must check that the till is empty
    const playMarker = (player, marker)



}



function Tile (){
    let value = 0; 

    //Accept a player marker to change the value  of the tile

    const addMarker = (player) => {
        value = player; 
    };

    //How we will retrieve the current value of this cell through closure
    const getValue = () => value; 

    return{
        addMarker,
        getValue
    };
}


/* 
** The GameController will be responsible for controlling the 
** flow and state of the game's turns, as well as whether
** anybody has won the game
*/

function GameController(
    playerOneName = "Player One",
    playerTwoName = "Player Two"
) {
    const board = Gameboard();

    const players = [
        {name:playerOneName, 
         token: 1
        },
        {
         name:playerTwoName, 
         token: 2
        }
    ];

    let activePlayer = players[0]; 

    const switchPlayerTurn = () => {
        activePlayer = activePlayer === players[0]? players[1]: players[0]; 
    }

    const getActivePlayer = () => activePlayer;

    const printNewRound = () => {}

    //This function method will be used to pause the code while waiting for the user to play
    const sleep = (ms) => {return new Promise(resolve => setTimeout(resolve,ms))};

    const checkFlag = () => {if (playFlag == true) 
            {GameController.sleep(3000); 
            GameController.checkFlag;} 
        else{return false}; 
} 

}


function main () {
    
}