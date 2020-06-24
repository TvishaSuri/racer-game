class Player {
  constructor(){
    this.index=null;
    this.distance=0;
    this.name=null
  }
  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",function(data){
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }
static getPlayerInfo(){
  var playerIndexRef=database.ref('players')
  playerIndexRef.on("value",(data)=>{
    allPlayers=data.val();
  })
}
  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      distance:this.distance
    });
  }
}
