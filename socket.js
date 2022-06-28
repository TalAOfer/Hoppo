const socket = io("http://localhost:3001");
let mySocketId
let currentPlayers = {}

socket.on("connect", () => {
    mySocketId = socket.id
})

socket.on('newPlayerToClient', (serverPackage) => {
    const {serverPlayers, createdPlayerId } = serverPackage
    console.log(serverPlayers);
    console.log(createdPlayerId);
    if (currentPlayers[mySocketId] === undefined && player && createdPlayerId === mySocketId) {
        currentPlayers[mySocketId] = player;
    }
    for (let id in serverPlayers) {
        console.log('MY PLAYERS :' , currentPlayers);
        console.log('SERVER PLAYERS ' , serverPlayers);
        if (!currentPlayers[id] && id !== mySocketId && id === createdPlayerId) {
            // currentPlayers[id].animalType = serverPlayers[id].animalType
            currentPlayers[id] = createPlayer(serverPlayers[id].animalType)
            currentPlayers[id].sprites.idle.right.src = `./img/Animal-Assets/${serverPlayers[id].animalType}/${serverPlayers[id].animalType}-right.png`
            currentPlayers[id].sprites.idle.left.src = `./img/Animal-Assets/${serverPlayers[id].animalType}/${serverPlayers[id].animalType}-left.png`
            currentPlayers[id].sprites.idle.right.src = `./img/Animal-Assets/${serverPlayers[id].animalType}/${serverPlayers[id].animalType}-charge-right.png`
            currentPlayers[id].sprites.idle.left.src = `./img/Animal-Assets/${serverPlayers[id].animalType}/${serverPlayers[id].animalType}-charge-left.png`
            currentPlayers[id].sprites.idle.right.src = `./img/Animal-Assets/${serverPlayers[id].animalType}/${serverPlayers[id].animalType}-jump-right.png`
            currentPlayers[id].sprites.idle.left.src = `./img/Animal-Assets/${serverPlayers[id].animalType}/${serverPlayers[id].animalType}-jump-left.png`
            currentPlayers[id].sprites.idle.right.src = `./img/Animal-Assets/${serverPlayers[id].animalType}/${serverPlayers[id].animalType}-fall-right.png`
            currentPlayers[id].sprites.idle.left.src = `./img/Animal-Assets/${serverPlayers[id].animalType}/${serverPlayers[id].animalType}-fall-left.png`
            currentPlayers[id].position.x = serverPlayers[id].x
            currentPlayers[id].position.y = serverPlayers[id].y
            currentPlayers[id].currentSprite = serverPlayers[id].currentSprite
            currentPlayers[id].isAttacking = serverPlayers[id].isAttacking
            currentPlayers[id].animalType = serverPlayers[id].animalType
            currentPlayers[id].didWin = serverPlayers[id].didWin
        }
    }
})

socket.on('serverToClient', serverPlayers => {
    // //console.log(serverPlayers);
    // //console.log(serverPlayers);
    const playersFound = {}
    for(let id in currentPlayers){
        if (player && currentPlayers[id].animalType !== undefined) {
            playersFound[id] = true
            currentPlayers[id].position.x = serverPlayers[id].x
            currentPlayers[id].position.y = serverPlayers[id].y
            currentPlayers[id].currentSprite = serverPlayers[id].currentSprite
            currentPlayers[id].isAttacking = serverPlayers[id].isAttacking
            currentPlayers[id].animalType = serverPlayers[id].animalType
            currentPlayers[id].didWin = serverPlayers[id].didWin
            currentPlayers[id].sprites.idle.right.src = `./img/Animal-Assets/${serverPlayers[id].animalType}/${serverPlayers[id].animalType}-right.png`
            currentPlayers[id].sprites.idle.left.src = `./img/Animal-Assets/${serverPlayers[id].animalType}/${serverPlayers[id].animalType}-left.png`
            currentPlayers[id].sprites.charge.right.src = `./img/Animal-Assets/${serverPlayers[id].animalType}/${serverPlayers[id].animalType}-charge-right.png`
            currentPlayers[id].sprites.charge.left.src = `./img/Animal-Assets/${serverPlayers[id].animalType}/${serverPlayers[id].animalType}-charge-left.png`
            currentPlayers[id].sprites.jump.right.src = `./img/Animal-Assets/${serverPlayers[id].animalType}/${serverPlayers[id].animalType}-jump-right.png`
            currentPlayers[id].sprites.jump.left.src = `./img/Animal-Assets/${serverPlayers[id].animalType}/${serverPlayers[id].animalType}-jump-left.png`
            currentPlayers[id].sprites.fall.right.src = `./img/Animal-Assets/${serverPlayers[id].animalType}/${serverPlayers[id].animalType}-fall-right.png`
            currentPlayers[id].sprites.fall.left.src = `./img/Animal-Assets/${serverPlayers[id].animalType}/${serverPlayers[id].animalType}-fall-left.png`
        }
    }
})

socket.on('disconnectToClient' ,deletedId => {
    // console.log(deletedId);
    for (let id in currentPlayers) {
        if (id === deletedId) {
            delete currentPlayers[id]
        }
    }
})