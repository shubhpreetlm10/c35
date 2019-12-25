class Game{
    constructor(){}
    getstate(){
        var gref = database.ref('gamestate');
        gref.on("value",function (data){
            gamestate = data.val();
        })
    }
    update(state){
        database.ref('/').update({
            gamestate: state
        })
    }
    start(){
if (gamestate == 0){
    player = new PLayer();
    player.getCount();
    form = new Form();
    form.display();
}
    }
}