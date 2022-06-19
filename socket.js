const socket = io("http://localhost:3001");
let mySocketId
let currentPlayers = {}

socket.on("connect", () => {
    mySocketId = socket.id
    console.log(mySocketId);
})


socket.on('serverToClient', serverPlayers => {
    // console.log(serverPlayers);
    playersFound = {}
    if(currentPlayers[mySocketId] === undefined){
        currentPlayers[mySocketId] = createPlayer(mySocketId);
    }
    for(let id in serverPlayers){
        if(currentPlayers[id] === undefined && id !== mySocketId){
            currentPlayers[id] = createPlayer(id)
        }
        playersFound[id] = true
        currentPlayers[id].position.x = serverPlayers[id].x
        currentPlayers[id].position.y = serverPlayers[id].y
        currentPlayers[id].currentSprite = serverPlayers[id].currentSprite
        currentPlayers[id].isAttacking = serverPlayers[id].isAttacking
    }
    for(let id in currentPlayers){
        if(!playersFound[id]){
            delete currentPlayers[id]
        }
    }
})