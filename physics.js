function applyVelocity(player) {
    player.position.x += player.velocity.x;
    player.position.y += player.velocity.y;
}

function applyGravity(player){
    if (player.velocity.y <= 15) {
        player.velocity.y += gravity;
    }
    player.isGrounded = false;
    if (player.velocity.y === 0) {
        player.isJumping = false;
    }
}

function getColliderDirection() {
    if (player.currentSprite === player.sprites.idle.right) {
        return (player.colliderBox.position.x + player.width - 32)
    } else if (player.currentSprite === player.sprites.idle.left) {
        return (player.colliderBox.position.x)
    }
}

function checkBorderBounce(player) {
    /*check if player touch border side and apply*/
    if((player.position.x + player.width >= canvas.width - 1 || player.position.x <= canvas.width - canvas.width + 1)
        && !player.isOnPlatform) {
        playAudioOnce('wallSfx')
        player.velocity.x *= -1
        switch (player.currentSprite) {
            case player.sprites.idle.right:
                player.currentSprite = player.sprites.idle.left
                console.log('wtf1')
                break;
            case player.sprites.idle.left:
                player.currentSprite = player.sprites.idle.right
                console.log('wtf2')
                break;
        }
    }
    /*prevent player from going off border*/
    if (player.position.x + player.width + 1 === canvas.width) {
        player.velocity.x--
    } else if (player.position.x - 1 <= canvas.width - canvas.width) {
        player.velocity.x++
    }
}

function checkPlatformCollision(player) {
    const playerBottom = player.colliderBox.position.y + player.colliderBox.height
    currentScene.platforms.forEach(platform => {
        const platformTop = platform.collider.position.y
        if (platform.collider.isActive) {
            if (playerBottom <= platformTop
                && playerBottom + player.velocity.y >= platformTop
                && getColliderDirection() + player.colliderBox.width >= platform.collider.position.x - 1
                && getColliderDirection() <= platform.collider.position.x + platform.collider.width - 1) {
                   _handlePlatformCollision()
            }
        }
    })
}

function _handlePlatformCollision() {
    if (player.isOnPlatform === false) {
        playAudioOnce('landSfx')
    }
    player.isOnPlatform = true;
    player.isJumping = false;
    keyReleased[87] = false
    player.velocity.y = 0;
    player.velocity.x = 0;
}

function checkWallHeadbutt(player,platform){
    if(player.position.y <= platform.position.y + platform.height
        && player.colliderBox.position.y + player.colliderBox.height + player.velocity.y >= platform.collider.position.y
        && getColliderDirection() + player.colliderBox.width >= platform.collider.position.x
        && getColliderDirection() <= platform.collider.position.x + platform.collider.width
        && !player.isOnPlatform){
            _handleWallHeadbutt()
        }
}

function _handleWallHeadbutt(){
    if(player.isShovedY === false && player.isShovedX === true){
        player.velocity.y *= -1
        playAudioOnce('wallSfx')
        player.isShovedY = true
        setTimeout(() => player.isShovedY = false, 100)
    }
}

function checkWallCollide(player,platform){
    if(!(player.position.x + player.width + player.velocity.x <= platform.collider.position.x + 1
        || player.position.x + player.velocity.x >= platform.collider.position.x + platform.collider.width)){
            if(player.position.y <= platform.position.y + platform.height
                && player.position.y + player.height >= platform.position.y){
                    _handleWallCollide();
            }
    }
}

function _handleWallCollide(){
    if(player.isShovedX === false && !player.isOnPlatform){
        playAudioOnce('wallSfx')
        player.velocity.x *= -1
        switch(player.currentSprite){
            case player.sprites.idle.right:
                player.currentSprite = player.sprites.idle.left
                break
            case player.sprites.idle.left:
                player.currentSprite = player.sprites.idle.right
                break
        }
        player.isShovedX = true
        setTimeout(() => player.isShovedX = false, 100)
    }
}