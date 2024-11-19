
getPlayer = function createPlayer(name, marker) {
    return player1 ={name, marker}
}

const gameBoard = {
    "tiles": [" "," "," "," "," "," "," "," "," "],
    "mappings":{
        "1":0,
        "2":1,
        "3":2,
        "4":3,
        "5":4,
        "6":5,
        "7":6,
        "8":7,
        "9":8
    }
}

recordInputPlayer1 = (tile) => {return tile}

moveValidator = function(arg){ //arg is the tile number 
    console.log(arg);
    console.log(gameBoard.mappings[`"${arg}"`]);
    switch (arg){
        case 1: 
            playRequested = gameBoard.mappings["1"];
            if (gameBoard.tiles[playRequested] != " "){
                console.log(`Playing on ${arg} is not a valid move. Please select another tile.`);
        } 
            else {
                
                gameBoard.tiles[playRequested] = arg; 

            }
            break; 
        case 2:
            playRequested = gameBoard.mappings["2"];
            if (gameBoard.tiles[playRequested] != " "){
                console.log(`Playing on ${arg} is not a valid move. Please select another tile.`);
            } 
            else {
                gameBoard.tiles[playRequested] = arg;
            }
            break;
        case 3:
            playRequested = gameBoard.mappings["3"];
            if (gameBoard.tiles[playRequested] != " "){
                console.log(`Playing on ${arg} is not a valid move. Please select another tile.`);
            } 
            else {
                gameBoard.tiles[playRequested] = arg;
            }
            break;
        
        case 4: 
            playRequested = gameBoard.mappings["4"];
            if (gameBoard.tiles[playRequested] != " "){
                console.log(`Playing on ${arg} is not a valid move. Please select another tile.`);
            }
            else {
                gameBoard.tiles[playRequested] = arg;
            }
            break;

        case 5: 
            playRequested = gameBoard.mappings["5"];
            if (gameBoard.tiles[playRequested] != " "){
                console.log(`Playing on ${arg} is not a valid move. Please select another tile.`);
            }
            else {
                gameBoard.tiles[playRequested] = arg;
            }
            break;
        case 6: 
            playRequested = gameBoard.mappings["6"];
            if (gameBoard.tiles[playRequested] != " "){
                console.log(`Playing on ${arg} is not a valid move. Please select another tile.`);
            }
            else {
            gameBoard.tiles[playRequested] = arg;
            }
            break;

        case 7: 
            playRequested = gameBoard.mappings["7"];
            if (gameBoard.tiles[playRequested] != " "){
                console.log(`Playing on ${arg} is not a valid move. Please select another tile.`);
            }
            else {
            gameBoard.tiles[playRequested] = arg;
            }
            break;
        
        case 8: 
            playRequested = gameBoard.mappings["8"];
            if (gameBoard.tiles[playRequested] != " "){
                console.log(`Playing on ${arg} is not a valid move. Please select another tile.`);
            }
            else{
                gameBoard.tiles[playRequested] = arg;
            }
            break;



        
        
        }
        
        

}

const gameController = {
    "getPlayer":getPlayer, 
    "clearBoard": gameBoard, // well be use at the end of each round, setting the tiles back for a new round
    "playerPlays": recordInputPlayer1,

    "moveValidatation": moveValidator 
}