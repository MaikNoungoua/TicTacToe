
let playFlag = true;


let gameBoard = {
    "board": [0,0,0,0,0,0,0,0,0],
    }

const sleep = (ms) => {return new Promise(resolve => setTimeout(resolve,ms))}

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


function easyGame(arg1, arg2){ //creation a throtlle function and multi-thread to listen hasPlayed flag.


    
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
}

function mediumGame(arg1, arg2){
   console.log("this medium game should not be looged into the console"); 
}

function hardGame(arg1, arg2){
    console.log("this hard game should not be looged into the console"); 
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


function gameLogic(arg){
    computerResquestedMove = Math.floor(Math.random() * (9 - 1 + 1)) + 1;
    console.log(computerResquestedMove);
}


let difficultyLevel = document.querySelector("#main-container")

difficultyLevel.addEventListener('click', (event) => {
    let target = event.target;
    let rounds = [];
    //let gameDifficuly = 0;

    switch(target.id){
        case 'easy':
            gameDifficulty = 'easy';
            break;
        case 'medium':
            gameDifficulty = 'medium';
            break;
        case 'hard':
            gameDifficulty = 'hard';
            break;
        case 'tile1':
            
            valid = validator(target.id);
            /*if (valid == true) {
                document.getElementById('tile1').innerHTML = "X";
            }
            else{
                alert("This is where we will need a timeout function waiting the player / computer to play again");
            }*/
            flag = false;
            break;
        case 'tile2':
            document.getElementById('tile2').innerHTML = "X";
            break;
        case 'tile3':
            document.getElementById('tile3').innerHTML = "O";
            break;
        case 'tile4':
            document.getElementById('tile4').innerHTML = "O";
            break;
        case 'tile5':
            document.getElementById('tile5').innerHTML = "X";
            break;
        case 'tile6':
            document.getElementById('tile6').innerHTML = "O";
            break;
        case 'tile7':
            document.getElementById('tile7').innerHTML = "O";
            break;
        case 'tile8':
            document.getElementById('tile8').innerHTML = "X";
            break;
        case 'tile9':
            document.getElementById('tile9').innerHTML = "X";
            break; 
        case 'X':
            playerMarker =document.getElementById('X').innerHTML;
            break;
        case 'O':
            playerMarker = document.getElementById('O').innerHTML;
            break;
        case 'start':
            let playerName = document.getElementById('fname').value;
            var myPlayer = new Player(playerName, playerMarker) 
            var myCpu = new CPU(playerMarker); 
            alert(`${gameDifficulty}`)
            
            if (gameDifficulty === 'easy'){
                easyGame(myPlayer, myCpu);
            }
            else if (gameDifficulty === 'medium'){
                mediumGame(myPlayer, myCpu);
            }
            else if (gameDifficulty === 'hard'){
                hardGame(myPlayer, myCpu);
            }
    }
});

