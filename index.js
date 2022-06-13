//const canvas = document.querySelector('canvas');
const canvas = document.createElement('canvas')
const c = canvas.getContext('2d');
//tomer push check
const music23 = new Audio('./audio/scene23music.wav')
music23.loop = true
const music4 = new Audio('./audio/scene4music.wav')
music4.loop = true
const music5 = new Audio('./audio/scene5music.wav')
music5.loop = true
//music.loop = true

canvas.width = 480;
canvas.height = 720; 
c.fillRect(0, 0, canvas.width, canvas.height);

//global variables
let lastJump = Date.now();
let gravity = 0.7;
let force = 0;
let jumpGauge = 0;
const jumpMaxGauge = 2000;

//Instance of player
const player = new Character({
    position: {
    x: 100,
    y: 300},
    velocity: {
    x: 0,
    y: 0
    },
    width: 50,
    height: 71
})

const players = [player]

//creating scene 1 and attaching a background and its platforms to it 
const scene1 = new Scene(level1,players)
const scene2 = new Scene(level2,players)
const scene3 = new Scene(level3,players);
const scene6 = {}

//defaulting current scene to scene 1
let currentScene = scene1;


//data for key presses
const keys = {
    a: {
        pressed: false
    },
    d: {
        pressed: false
    },
    w: {
        pressed: false,
        released: false
    },
}
let keyPressed = {};
let keyReleased = {};
let lastKey;
let keyUp;

let scroll = 0
const fps = 90
//Handling the global updating , gets called every frame
function animate(){
    //calls animate function every window frame
    setTimeout(() => {
        window.requestAnimationFrame(animate)
        //update current scene
        if(player.position.y < 360 && player.position.y > -461){
            scroll = player.velocity.y / 1.2
            c.translate(0,(-scroll))
        }else if(player.position.y > 360){
            c.setTransform(1, 0, 0, 1, 0, 0);
        } else if(player.position.y < -461){
            c.save();
            c.restore()
        }
        c.save();
        renderGame(currentScene)
        //update the player 
        player.update();
        //sceneHandler();
        keyHandlerFunc()
    }
    ,1000/fps)
}


animate();


//Handle the players input when pressing down a key
window.addEventListener('keydown', (event) => {
    keyPressed[event.keyCode || event.which] = true;
})

//Handle the players input when leaving a key
window.addEventListener('keyup', (event) => {
    switch(event.keyCode){
        case 87:
            keyPressed[event.keyCode || event.which] = false;
            keyReleased[event.keyCode || event.which] = true;
            break
        case 68:
            setTimeout(()=>{
                keyPressed[event.keyCode || event.which] = false;
                keyReleased[event.keyCode || event.which] = true;
            },100)
            break
        case 65:
            setTimeout(()=>{
                keyPressed[event.keyCode || event.which] = false;
                keyReleased[event.keyCode || event.which] = true;
            },100)


    }
    //keyPressed[event.keyCode || event.which] = false;
    //keyReleased[event.keyCode || event.which] = true;
})

function keyHandlerFunc(){
    // w press check
    if(keyPressed[87]){
        if(!player.isJumping){
            keys.w.pressed = true;
            if(jumpGauge < jumpMaxGauge && (player.isGrounded || player.isOnPlatform)){
                jumpGauge += 40
            }
       }
    }
    else {
        jumpGauge = 0
    }
    // w release check
    if(keyReleased[87]){
        player.isJumping = true
    }
    // d press check
    if(keyPressed[68]){
        lastKey = 'd'
    }
    // d release check
    if(keyReleased[68]){
        keyUp = 'd'
    }
    // a press check
    if(keyPressed[65]){
        lastKey = 'a'
    }
    // a release check
    if(keyReleased[65]){
        keyUp = 'a'
    }
}

const menu2 = document.getElementById('main-menu')
function startGame(){
    const menu = document.getElementById('main-menu')
    menu.remove()
    const container = document.getElementById('canvas-container')
    playAudioOnce('landSfx')
    container.prepend(canvas)
}

function endGame(){
    canvas.remove();
    delete player
    const container = document.getElementById('canvas-container')
    container.prepend(menu2)
    currentScene = scene1
}
