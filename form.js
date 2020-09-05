class form {
    constructor(){

    }
    display(){
        var title = createElement("h1");
        title.html("Car Racing Game");
        title.position(130,0);

        var input = createInput("Name");
        input.position(130,160);

        var button = createButton("Button");
        button.position(150,200);

        button.mousePressed(function(){
            input.hide();
            button.hide();
            var name = input.value();
            playerCount = playerCount+1;
            player1.update(name);
            player1.updateCount(playerCount);
            var greating = createElement("h2");
            greating.position(130,160);
            greating.html("Hello "+name);
        });

    }
}