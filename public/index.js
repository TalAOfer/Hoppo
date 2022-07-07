//const canvas = document.querySelector('canvas');
const canvas = document.createElement('canvas')
const c = canvas.getContext('2d');
const elCanvas = document.getElementById('screen')

canvas.width = 480;
canvas.height = 1440; 
// c.fillRect(0, 0, canvas.width, canvas.height);

//global variables
let gravity = 0.7;
const jumpMaxGauge = 2000;
let lastCanvasPos = -720
// let currentPlayers = []

//creating scene 1 and attaching a background and its platforms to it 
// const scene1 = new Scene(level1,currentPlayers)
// const scene2 = new Scene(level2,currentPlayers)
// const scene3 = new Scene(level3,currentPlayers);
const beachScene = new Scene(beach,currentPlayers);
let player
//defaulting current scene to scene 1
let currentScene = beachScene;
let animateId
const fps = 140
//Handling the global updating , gets called every frame
function animate(){
    //calls animate function every window frame
    // setTimeout(() => {
       animateId = window.requestAnimationFrame(animate)
        //update current scene
        // currentPlayers.forEach(player => {
        // //console.log(currentPlayers);
        // console.log(currentPlayers[mySocketId].position.y);
        currentScene.players = currentPlayers
        handleCamera(currentPlayers[mySocketId])
        renderGame(currentScene, endGame)
        keyHandlerFunc(currentPlayers[mySocketId])
        currentPlayers[mySocketId].update();
        socket.emit('updateToServer', {
            x: currentPlayers[mySocketId].position.x, 
            y: currentPlayers[mySocketId].position.y, 
            currentSprite: currentPlayers[mySocketId].currentSprite,
            animalType : currentPlayers[mySocketId].animalType,
            isAttacking : currentPlayers[mySocketId].isAttacking,
            didWin : currentPlayers[mySocketId].didWin,
            isAlive: currentPlayers[mySocketId].isAlive
        })
        // c.save()
        // c.restore()
        // finishedFrame = true
        // })
 
    }
//     ,1000/fps)
// }



function startGame(chosenAnimalType){
    c.clearRect(0, 0, canvas.width, canvas.height)
    const menu = document.getElementById('main-menu')
    menu.remove()
    const container = document.getElementById('screen')
    playAudioOnce('landSfx')
    container.prepend(canvas)
    console.log(chosenAnimalType);
    player = createPlayer(chosenAnimalType)
    animate()
}

const menu2 = document.getElementById('main-menu')
function endGame(){
    // delete player
    socket.emit('endGame')
    // for(let id in currentPlayers){
    //     delete currentPlayers[id]
    // }ה
    cancelAnimationFrame(animateId)
    canvas.remove();
    currentPlayers = {}
    const container = document.getElementById('canvas-container')
    container.prepend(menu2)
    currentScene = beach
}
function handleCamera(player){
    let scroll = 0
    let sentCanvasPos = lastCanvasPos
    if(lastCanvasPos >= 0)sentCanvasPos = 0
    if(player.position.y < 1080 && player.position.y >= 254){
        scroll = Math.floor(player.velocity.y)
        // console.log(scroll);
        // c.translate(0,(-scroll))
        // console.log(lastCanvasPos);
        lastCanvasPos = lastCanvasPos - scroll
        elCanvas.style['margin-top'] = `${sentCanvasPos}px`
    }else if(player.position.y > 1080){
        lastCanvasPos = -720
        elCanvas.style['margin-top'] = `${sentCanvasPos}px`
    }
    // c.save();
}