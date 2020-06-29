class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  start(){
    if(gameState === 0){
      player = new Player();
      player.getCount();
      form = new Form()
      form.display();
    }
  }

  play() {
    form.hide();
    var Text = text("Game Start!", 100, 100);
    Player.getPlayerInfo();
    if(allPlayers !== undefined) {
      var display_Position = 120;
      for(var plr in allPlayers) {
        if(plr === "player" + player.index) {
          fill("red");
        } else {
          fill("black");
        }
        display_Position += 20;
        textSize(16);
        var Text1 = text(allPlayers[plr].name + ":" + allPlayers[plr].distance, 120, display_Position);
      }
    }
    if(keyIsDown(UP_ARROW) && player.index !== null) {
      player.distance += 50;   
      player.update();   
    }
  }
}
