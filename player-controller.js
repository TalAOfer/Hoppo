function handleJumpInput(player) {
    /*Check if jump gauge is at max , and jump if true  */
    if (jumpGauge >= jumpMaxGauge) {
        player.isJumping = true;
        player.chargeBar.tick.width = 3.7
        jumpGauge = jumpMaxGauge;
        if (keyPressed[65] && lastKey === 'a') {
            player.currentSprite = player.sprites.idle.left
            playAudioOnce('jumpSfx')
            player.velocity.x = -4 - (jumpGauge / 550)
            player.velocity.y = -3 - (jumpGauge / 100)
            if (currentScene === scene6) {
                player.velocity.y /= 1.6
                player.velocity.x /= 1.3
            }
            player.isOnPlatform = false
            lastJump = Date.now();
            keyReleased[87] = false
        } else if (keyPressed[68] && lastKey === 'd') {
            player.currentSprite = player.sprites.idle.right
            playAudioOnce('jumpSfx')
            player.velocity.x = 4 + (jumpGauge / 550)
            player.velocity.y = -3 - (jumpGauge / 100)
            if (currentScene === scene6) {
                player.velocity.y /= 1.6
                player.velocity.x /= 1.3
            }
            player.isOnPlatform = false
            lastJump = Date.now();
            keyReleased[87] = false
        } else {
            playAudioOnce('jumpSfx')
            player.velocity.y = -3 - (jumpGauge / 100)
            if (currentScene === scene6) {
                player.velocity.y /= 1.6
            }
            player.isOnPlatform = false
            lastJump = Date.now();
            keyReleased[87] = false
        }
        jumpGauge = 0
        /*If jump Gauge is not at max , Check if player released W key and jump if true  */
    } else if (keyReleased[87]) {
        if (player.isGrounded || player.isOnPlatform) {
            player.chargeBar.tick.width = 3.7
            if (keyPressed[65] && lastKey === 'a') {
                player.currentSprite = player.sprites.idle.left
                playAudioOnce('jumpSfx')
                player.velocity.x = -4 - (jumpGauge / 550)
                player.velocity.y = -3 - (jumpGauge / 100)
                if (currentScene === scene6) {
                    player.velocity.y /= 1.6
                    player.velocity.x /= 1.3
                }
                player.isJumping = true;
                player.isOnPlatform = false
                lastJump = Date.now();
                keyReleased[87] = false
            } else if (keyPressed[68] && lastKey === 'd') {
                player.currentSprite = player.sprites.idle.right
                playAudioOnce('jumpSfx')
                player.velocity.x = 4 + (jumpGauge / 550)
                player.velocity.y = -3 - (jumpGauge / 100)
                if (currentScene === scene6) {
                    player.velocity.y /= 1.6
                    player.velocity.x /= 1.3
                }
                player.isJumping = true;
                player.isOnPlatform = false
                lastJump = Date.now();
                keyReleased[87] = false
            } else {
                playAudioOnce('jumpSfx')
                player.velocity.y = -3 - (jumpGauge / 100)
                if (currentScene === scene6) {
                    player.velocity.y /= 1.6
                }
                player.isJumping = true;
                player.isOnPlatform = false
                lastJump = Date.now();
                keyReleased[87] = false
            }

        }
        jumpGauge = 0
    }
}

