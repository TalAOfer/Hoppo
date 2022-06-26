const socket = io("http://localhost:3001");
let mySocketId
const currentPlayers = {}

socket.on("connect", () => {
    mySocketId = socket.id
    // //console.log(mySocketId);
})


socket.on('serverToClient', serverPlayers => {
    // //console.log(serverPlayers);
    // //console.log(serverPlayers);
    const playersFound = {}
    if(currentPlayers[mySocketId] === undefined && player){
        currentPlayers[mySocketId] = player;
    }
    for(let id in serverPlayers){
        if(currentPlayers[id] === undefined && id !== mySocketId){
            // //console.log(serverPlayers[id]);
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
        }
        if(player){
            playersFound[id] = true
            currentPlayers[id].position.x = serverPlayers[id].x
            currentPlayers[id].position.y = serverPlayers[id].y
            currentPlayers[id].currentSprite = serverPlayers[id].currentSprite
            currentPlayers[id].isAttacking = serverPlayers[id].isAttacking
            currentPlayers[id].animalType = serverPlayers[id].animalType
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
    for(let id in currentPlayers){
        if(!playersFound[id]){
            delete currentPlayers[id]
        }
    }
})

