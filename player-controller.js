function handleJumpInput(player) {
    /*Check if jump gauge is at max , and jump if true  */
    if (jumpGauge >= jumpMaxGauge) {
        player.isJumping = true;
        player.chargeBar.tick.width = 3.7
        jumpGauge = jumpMaxGauge;
        if (keyPressed[65] && lastKey === 'a') {
            jump(player,'left')
        } else if (keyPressed[68] && lastKey === 'd') {
            jump(player,'right')
        } else {
            jump(player,'middle')
        }
        jumpGauge = 0
        /*If jump Gauge is not at max , Check if player released W key and jump if true  */
    } else if (keyReleased[87]) {
        if (player.isGrounded || player.isOnPlatform) {
            player.chargeBar.tick.width = 3.7
            if (keyPressed[65] && lastKey === 'a') {
                jump(player,'left')
            } else if (keyPressed[68] && lastKey === 'd') {
                jump(player,'right')
            } else {
                jump(player,'middle')
            }

        }
        jumpGauge = 0
    }
}

function jump(player, direction){
    playAudioOnce('jumpSfx')
    if(direction === 'left'){
        player.currentSprite = player.sprites.idle.left
        player.velocity.x = -4 - (jumpGauge / 550)
    }else if(direction === 'right'){
        player.currentSprite = player.sprites.idle.right
        player.velocity.x = 4 - (jumpGauge / 550)
    }
    player.velocity.y = -3 - (jumpGauge / 100)
    player.isJumping = true;
    player.isOnPlatform = false
    lastJump = Date.now();
}