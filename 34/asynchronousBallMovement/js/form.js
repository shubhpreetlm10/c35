class Form{
constructor(){}
display(){
    var title = createElement('h2')
    title.html("CarRace")
    title.position(250,20)
    var input = createInput("name")
    var button = createButton("play");
    var greeting = createElement('h3')
    input.position(350.34,64.74)
    button.position(350.34,84.74);
    button.mousePressed(function(){
        input.hide();
        button.hide();
var name = input.value();
playercount += 1
player.update(name);
player.updateCount(playercount)
greeting.html("hello "+ name)
greeting.position(350.34,104.74)

    })
}

}
