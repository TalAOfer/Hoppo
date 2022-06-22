const players = {}

function createPlayer(socketId , animalType){
    const player = new Character({
        position: {
        x: Math.floor(getRandomInt(100,450)),
        y: 600},
        velocity: {
        x: 0,
        y: 0
        },
        force: {
            x: 0,
            y: 0
        },
        width: 54,
        height: 64,
        animalType: animalType
    })
    players[socketId] = player
    socket.emit('newPlayer', {
        x: player.position.x , 
        y: player.position.y, 
        currentSprite: player.currentSprite,
        animalType : player.animalType,
        isAttacking : false})
    // socket.emit('newPlayer', {x: player.position.x , y: player.position.y})
    return player
}

// function getRandomAnimalType () {
//     const animals = ['bat','gorilla','goat','gecko']
//     const random = Math.floor(getRandomInt(0,4))
//     const randomAnimal = animals[random]
//     return randomAnimal
// } 

// function getPlayers(){
//     return players
// }
