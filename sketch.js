var Canvas;
var game,player,form;
var gameState = 0;
var playerCount;
var database

function setup(){
    database=firebase.database();
game = new Game()
game.getState()
game.start()


    
    
}

function draw(){
    background("white");


   
}

