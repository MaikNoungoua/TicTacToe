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
    received request by player to position marker --> DONE 
    received request by CPU to position marker
    check if the value == ' ' --> validate or deny --> DONE
    check winning   
}

24/11/2024

I ran into several issues during the last few days. : 
    - it seems that using a funtion to update an object method is creating scope issues. 
This made me move away from using gameBoard as an array but as an object instead. We are now using a case switch to handle event delegation. 
It makes sense because the page interaction is based on click. 

One of the major issue I faced in my new approach is on how to paced up and down the execution of my code. I came up with: 
    - setTimeOut function --> check every seconds if players has placed a marker on the board
    - creation a hasPlayed flag 


25/11/2024
I realized after a good night sleep that the base logic of my code needed to be worked on. I had to brain strom again and think carefully about what was already working in my code and how to build on it to achieve my TIC TAC TOE oobjective. So: 

1 - User lands on the page (tic-tac-toe.com)
2 - User becomes a player by providing (name, marker_choice)
3 - gameController takes over after the user press the starts button
4 - gameController sequence of actions: 
        4-a Initiate CPU marker based on the user selection 
        4-b Initiate round 
        4-c Who will place marker on board first
        4-d Player 1 and CPU score 
        4-e Checks rows, columns, and diagonals for winner 


More detailled action plan: 

2 --> Need  to add a user Input and option to select a marker in to #top div of my page. Done!

3 -->  This means that from `switch case start`, I need to apply a sequence of actions that involves  `gameController` object.
I guess the question now is what kind of control do we want `gameController` to have on our gameBoard. We start by listing the action at are still missing at this stage for the code: 
    - CPU should be instanciated as a player `Done`
    - CPU and player1 scored should start at 0 `Done`
    - game controller should create a round object (number, winner, assert itslef (will implement it later)) ; these are later stored in array `rounds` to keep track of the different game. 
    

    - gameController should decide who is gonna make the first move
