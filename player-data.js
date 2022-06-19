const players = {}

function createPlayer(socketId){
    const player = new Character({
        position: {
        x: Math.floor(getRandomInt(100,450)),
        y: 600},
        velocity: {
        x: 0,
        y: 0
        },
        width: 50,
        height: 71
    })
    players[socketId] = player
    socket.emit('newPlayer', {x: player.position.x , y: player.position.y, currentSprite: player.currentSprite})
    // socket.emit('newPlayer', {x: player.position.x , y: player.position.y})
    return player
}

function getPlayers(){
    return players
}
