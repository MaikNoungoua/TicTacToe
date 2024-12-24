
const Player1  = {
    "name": "player1",
    "marker":"X"
};

const Player2  = {
    "name": "player2",
    "marker":"O"
};





const players = [Player1, Player2];

let activePlayer = players[0];

const switchPlayerturn = () => {
    if(activePlayer ==  players[0]){
        activePlayer = players[1];
    }
    else{
        activePlayer = players[0];
    }
}

document.getElementById("x")