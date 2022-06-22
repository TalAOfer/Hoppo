const socket = io("http://localhost:3001");
let mySocketId
const currentPlayers = {}

socket.on("connect", () => {
    mySocketId = socket.id
    console.log(mySocketId);
})


socket.on('serverToClient', serverPlayers => {
    // console.log(serverPlayers);
    // console.log(serverPlayers);
    playersFound = {}
    if(currentPlayers[mySocketId] === undefined){
        currentPlayers[mySocketId] = player;
    }
    for(let id in serverPlayers){
        if(currentPlayers[id] === undefined && id !== mySocketId){
            console.log(serverPlayers[id]);
            // currentPlayers[id].animalType = serverPlayers[id].animalType
            currentPlayers[id] = createPlayer(id, serverPlayers[id].animalType)
        }
        playersFound[id] = true
        currentPlayers[id].position.x = serverPlayers[id].x
        currentPlayers[id].position.y = serverPlayers[id].y
        currentPlayers[id].currentSprite = serverPlayers[id].currentSprite
        currentPlayers[id].isAttacking = serverPlayers[id].isAttacking
        currentPlayers[id].animalType = serverPlayers[id].animalType
        currentPlayers[id].sprites.idle.right.src = `./img/Animal-Assets/${serverPlayers[id].animalType}-right.png`
        currentPlayers[id].sprites.idle.left.src = `./img/Animal-Assets/${serverPlayers[id].animalType}-left.png`
    }
    for(let id in currentPlayers){
        if(!playersFound[id]){
            delete currentPlayers[id]
        }
    }
})

