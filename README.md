# TicTacToe

The requirement for the project: 

    - gameboard is an array inside a Gameboard object
    - players are objects 
    - flow of the game is controlled by an object 
        --> have a litle as global code as possible 
        --> try using FACTORIES as much as possile; If in in of a single instance of something wrap the factory inside an IIFE (module pattern) so it cannot be reused to create additional instances
        --> a great article to brainstorm on the kind of logic needed for this project: https://www.ayweb.dev/blog/building-a-house-from-the-inside-out


Implementation: 

    - Make sure that the logic is the one expected. Focusing on the back and and having the console log output that are right 
    - the logic should: 
        --> check for when the game is over (after 3 rounds)
    - Once you have a working console game, create an object that will handle the display/DOM logic
    -Write the functions that allow players to add marks to a specific spot on the board by interacting with the appropriate DOM elements (e.g. letting players click on a board square to place their marker)
    - DON'T FORGET THE LOGIC PREVENTING THE PLAYER FROM USING A SQUARE/TILE THAT IS ALREADY TAKEN



    Finally: 
    Clean up the interface to allow players to put in their names, include a button to start/restart the game and add a display element that shows the results upon game end!


gameController = {
    check for player1 and welcome him to the game
    Initialize the board with no markers, only blank spaces --> DONE
    check game round 
    check player turn
    received request by player to position marker 
    received request by CPU to position marker
    check if the value == ' ' --> validate or deny
    check winning   
}
