var database;
var form1,player1,game1,playerCount,gameState=0;


function setup(){
  database = firebase.database();
   game1 = new game();
   game1.getState();
   game1.start();
}

function draw(){
  background("white");
  
    
}
