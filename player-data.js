const players = {}

function createPlayer(animalType){
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
        width: 64,
        height: 66,
        animalType: animalType
    })
    // players[mySocketId] = player
    socket.emit('newPlayer', {
        x: player.position.x , 
        y: player.position.y, 
        currentSprite: player.currentSprite,
        animalType : player.animalType,
        isAttacking : false})
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

function getCurrentSpriteIMG(player){
    let IMG
    switch(player.currentSprite){
        case 'right':
            IMG =  player.sprites.idle.right
            break
        case 'left':
            IMG =  player.sprites.idle.left
            break
        case 'charge-right':
            IMG =  player.sprites.charge.right
            break
        case 'charge-left':
            IMG =  player.sprites.charge.left
            break
        case 'jump-right':
            IMG =  player.sprites.jump.right
            break
        case 'jump-left':
            IMG =  player.sprites.jump.left
            break
        case 'fall-right':
            IMG =  player.sprites.fall.right
            break
        case 'fall-left':
            IMG =  player.sprites.fall.left
            break
    }
    return IMG
}