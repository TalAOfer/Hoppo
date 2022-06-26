//const canvas = document.querySelector('canvas');
const canvas = document.createElement('canvas')
const c = canvas.getContext('2d');

canvas.width = 480;
canvas.height = 720; 
// c.fillRect(0, 0, canvas.width, canvas.height);

//global variables
let gravity = 0.7;
const jumpMaxGauge = 2000;

// let currentPlayers = []

//creating scene 1 and attaching a background and its platforms to it 
// const scene1 = new Scene(level1,currentPlayers)
// const scene2 = new Scene(level2,currentPlayers)
// const scene3 = new Scene(level3,currentPlayers);
const beachScene = new Scene(beach,currentPlayers);
let player
//defaulting current scene to scene 1
let currentScene = beachScene;

const fps = 90
//Handling the global updating , gets called every frame
function animate(){
    //calls animate function every window frame
    setTimeout(() => {
        window.requestAnimationFrame(animate)
        //update current scene
        // currentPlayers.forEach(player => {
        // //console.log(currentPlayers);

        currentScene.players = currentPlayers
<<<<<<< HEAD
        // handleCamera(currentPlayers[mySocketId])
=======
        if(currentPlayers[mySocketId].velocity.y !== 0) handleCamera(currentPlayers[mySocketId])
>>>>>>> 7f1d739cfcf754228d58492ce4ed739657850905
        renderGame(currentScene)
        keyHandlerFunc(currentPlayers[mySocketId])
        currentPlayers[mySocketId].update();
        socket.emit('updateToServer', {
            x: currentPlayers[mySocketId].position.x, 
            y: currentPlayers[mySocketId].position.y, 
            currentSprite: currentPlayers[mySocketId].currentSprite,
            animalType : currentPlayers[mySocketId].animalType,
            isAttacking : currentPlayers[mySocketId].isAttacking
        })
        // c.save()
        // c.restore()
        // finishedFrame = true
        // })
 
    }
    ,1000/fps)
}



const menu2 = document.getElementById('main-menu')
function startGame(chosenAnimalType){
    const menu = document.getElementById('main-menu')
    menu.remove()
    const container = document.getElementById('screen')
    playAudioOnce('landSfx')
    container.prepend(canvas)
    player = createPlayer(chosenAnimalType)
    animate()
}

function endGame(){
    canvas.remove();
    delete player
    const container = document.getElementById('canvas-container')
    container.prepend(menu2)
    currentScene = scene1
}

function handleCamera(player){
    let scroll = 0
    if(player.position.y < 358 && player.position.y > -581){
        scroll = Math.floor(player.velocity.y / 1.2)
        console.log(scroll);
        c.translate(0,(-scroll))
    }else if(player.position.y > 358){
        c.setTransform(1, 0, 0, 1, 0, 0);
    } else if(player.position.y < -581){
        c.save();
        c.restore()
    }
    c.save();
}