var canvas, database , position, gamestate, playercount,form ,player, game;
gamestate = 0;
function setup(){
    database = firebase.database();
    canvas = createCanvas(500,500);
   game = new Game();
   game.getstate();
   game.start();
}

function draw(){
   
}
