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
}

function Tile (){
    let value = 0; 

    //Accept a player marker to change the value  of the tile

    const addMarker = (player) => {
        value = player; 
    };

}

//Factory for player creation 
function Player(name, marker, ){
    this.name = name; 
    this.marker = marker;
    this.score = 0;
}

//Factory for CPU creation 
function CPU(playerMarker){
    this.name = 'CPU';
    this.playerMarker = playerMarker;
    if(this.playerMarker == 'X'){
        this.cpuMarker = 'O';
    }
    else if(this.playerMarker == 'O'){
        this.cpuMarker = 'X';
    }; 
    this.score = 0;
}



const GameController = {
    "registeredPlayer": {
        "get": function(){
        let playerName = document.getElementById('fname').value;
        const myPlayer = new Player(playerName, playerMarker); 
        return myPlayer
        },
       // "name" : myPlayer.name

},
    "Cpu": {

    },
    "rounds" : [],
    "round" : 1,

    //"players": [myPlayer, myCpu], 
    }



   /* let activePlayer = players[0]; 

    const switchPlayerTurn = () => {
        activePlayer = activePlayer === players[0] ? players[0] : players[1];    
    }

    const getActivePlayer = () => {return activePlayer};

    const genCpuMove = () => {
        //everytime we click on the
        //let currentBoardArray = boardArray;
    }  
    const getEmptytiles = function(array){ // return an array of item indexes on the board/
        return array.reduce((acc, val, index) => {
            if(val === 0 ) {
                acc.push(index);
            }
            return acc;
        },[]);
    }
        
        function filterEmptyTile(){
            
        }
    }
    */

//const sleep = (ms) => {return new Promise(resolve => setTimeout(resolve,ms))}

validator = function playValidation(tile){ //checks if the player is playing on an empty tile

    let index = tile - 1; 

    if (gameBoard.board[index] == 0 ){
        gameBoard.board[index] = 1
        return true}
    else{return false }
}

const checkFlag = () => {if (playFlag == true) 
    {sleep(3000)     
    checkFlag;
    console.log("the flag is checked");} 
        
    else{
        return false
    }
};


/*function easyGame(arg1, arg2){ //creation a throtlle function and multi-thread to listen hasPlayed flag.


    
    for (let i = 0; i < 3; i++ ){

        for (let j = 0; j < 9; j++){

            cpm = Math.floor(Math.random() * (8 - 1 + 1)) + 1; //cmp => computerRequestedMove
            mapping = cpm+1;

            if (validator(cpm) == true){
                document.getElementById(`tile${mapping}`).innerHTML = `${arg2.cpuMarker}`;
                
            }
            else{
                console.log(cpm);}
            }
        checkFlag;

}
}*/

function mediumGame(arg1, arg2){
   console.log("this medium game should not be looged into the console"); 
}

function hardGame(arg1, arg2){
    console.log("this hard game should not be looged into the console"); 
}



function gameLogic(arg){
    computerResquestedMove = Math.floor(Math.random() * (9 - 1 + 1)) + 1;
    console.log(computerResquestedMove);
}


let difficultyLevel = document.querySelector("#board")

difficultyLevel.addEventListener('click', (event) => {
    let target = event.target;
    let rounds = [];
    

    switch(target.id){
        /case 'easy':
            gameDifficulty = 'easy';
            break;
        case 'medium':
            gameDifficulty = 'medium';
            break;
        case 'hard':
            gameDifficulty = 'hard';
            break;
        case 'square0':
            board = GameBoard.board
            document.getElementById('square0').innerHTML = "X";
            test = GameController.getEmptytiles(board);
            console.log(test);
            
            break;
        case 'square1':
            document.getElementById('square1').innerHTML = "O";
            break;
        case 'square2':
            document.getElementById('square2').innerHTML = "O";
            break;
        case 'square3':
            document.getElementById('square3').innerHTML = "X";
            break;
        case 'square4':
            document.getElementById('square4').innerHTML = "O";
            break;
        case 'square5':
            document.getElementById('square5').innerHTML = "O";
            break;
        case 'square6':
            document.getElementById('square6').innerHTML = "X";
            break;
        case 'square7':
            document.getElementById('square7').innerHTML = "X";
            break; 
        case 'square8':
            document.getElementById("square8").innerHTML = "X";
            break;
        case 'X':
            playerMarker =document.getElementById('X').innerHTML;
            break;
        case 'O':
            playerMarker = document.getElementById('O').innerHTML;
            break;
        case 'start':
            
            alert(`${gameDifficulty}`);
            GameController.registeredPlayer.get()
            
            if (gameDifficulty === 'easy'){
                //easyGame(myPlayer, myCpu);
                //GameController(myPlayer, myCpu);
            }
            else if (gameDifficulty === 'medium'){
                mediumGame(myPlayer, myCpu);
            }
            else if (gameDifficulty === 'hard'){
                hardGame(myPlayer, myCpu);
            }
    }
});

