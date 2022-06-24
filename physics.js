function applyVelocity(player) {
    player.position.x = Math.floor(player.position.x) + Math.floor(player.velocity.x);
    player.position.y = Math.floor(player.position.y) + Math.floor(player.velocity.y);
    if (player.velocity.y > 1) {
        switch (player.currentSprite) {
            case 'jump-right':
                player.currentSprite = 'fall-right'
                break
            case 'jump-left':
                player.currentSprite = 'fall-left'
                break
        }
    }
}

function applyForce(player) {
    player.position.x = Math.floor(player.position.x) + Math.floor(player.force.x)
    player.position.y = Math.floor(player.position.x) + Math.floor(player.force.y)
}

function applyGravity(player) {
    if (player.velocity.y <= 15) {
        player.velocity.y += gravity;
    }
    player.isGrounded = false;
}

function getPlayerColliderX(player) {
    return (player.collider.position.x + 11)
}

function checkBorderBounce(player) {
    /*check if player touch border side and apply*/
    if ((player.position.x + player.width >= canvas.width - 1 || player.position.x <= canvas.width - canvas.width + 1)
        && !player.isOnPlatform) {
        playAudioOnce('wallSfx')
        player.velocity.x *= -1
        switch (player.currentSprite) {
            case 'jump-right':
                player.currentSprite = 'jump-left'
                console.log('wtf1')
                break;
            case 'jump-left':
                player.currentSprite = 'jump-right'
                console.log('wtf2')
                break;
            case 'fall-right':
                player.currentSprite = 'fall-left'
                console.log('wtf1')
                break;
            case 'fall-left':
                player.currentSprite = 'fall-right'
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
    const playerBottom = player.collider.position.y + player.collider.height
    currentScene.platforms.forEach(platform => {
        const platformTop = platform.collider.position.y + 1
        if (platform.collider.isActive) {
            if (playerBottom <= platformTop
                && playerBottom + player.velocity.y >= platformTop
                && getPlayerColliderX(player) + player.collider.width >= platform.collider.position.x - 1
                && getPlayerColliderX(player) <= platform.collider.position.x + platform.collider.width - 1) {
                _handlePlatformCollision(player)

            }
        }
    })
}

function _handlePlatformCollision(player) {
    if (player.isOnPlatform === false) {
        playAudioOnce('landSfx')
        switch (player.currentSprite) {
            case 'fall-right':
                player.currentSprite = 'right'
                break
            case 'fall-left':
                player.currentSprite = 'left'
                break
        }
    }
    player.isOnPlatform = true;
    player.isJumping = false;
    keyReleased[87] = false
    player.velocity.y = 0;
    player.velocity.x = 0;
}

function checkWallHeadbutt(player, platform) {
    const playerTop = player.position.y - player.velocity.y - 6
    const playerMiddle = player.position.x + player.width / 2
    const playerBottom = player.collider.position.y + player.collider.height

    const platformBorderBottom = platform.collider.position.y + platform.height + 3
    const platformBorderTop = platform.collider.position.y + 3
    const platformBorderLeft = platform.collider.position.x - (player.width / 2)
    const platformBorderRight = platform.collider.position.x + platform.width + (player.width / 2)

    // c.fillStyle = 'red'
    // c.fillRect(playerMiddle, playerTop, 2, 2)

    // c.fillStyle = 'blue'
    // c.fillRect(platformBorderLeft, platformBorderBottom, 2, 2)

    //     c.fillStyle = 'blue'
    // c.fillRect(platformBorderRight, platformBorderBottom, 2, 2)

    // c.fillStyle = 'blue'
    // c.fillRect(platformBorderLeft, platformBorderBottom, 2, 2)

    //     c.fillStyle = 'blue'
    // c.fillRect(platformBorderRight, platformBorderTop, 2, 2)

    if (!player.isOnPlatform
        && player.velocity.y < 0
        && playerTop <= platformBorderBottom
        && playerTop >= platformBorderTop
        && playerMiddle >= platformBorderLeft
        && playerMiddle <= platformBorderRight) {
        _handleWallHeadbutt(player)
    }
}

function _handleWallHeadbutt(player) {
    console.log('did');
    if (player.isShovedY === false) {
        player.velocity.y *= -0.4
        playAudioOnce('wallSfx')
        player.isShovedY = true
        setTimeout(() => player.isShovedY = false, 400)
    }

}

function checkWallCollide(player, platform) {

    const playerRight = player.position.x + player.width
    const playerLeft = player.position.x
    const playerTop = player.position.y - player.velocity.y - 6
    const playerBottom = player.position.y + player.height

    const platformBorderLeft = platform.position.x
    const platformBorderRight = platform.position.x + platform.width
    const platformBorderTop = platform.position.y - player.height
    const platformBorderBottom = platform.position.y + platform.height


    // //platform left - top
    // c.fillStyle = 'red'
    // c.fillRect(platformBorderLeft - 3, platformBorderTop, 2, 2)
    // c.fillStyle = 'blue'
    // c.fillRect(platformBorderLeft + 3, platformBorderTop, 2, 2)

    // //platform left - bottom
    // c.fillStyle = 'green'
    // c.fillRect(platformBorderLeft - 3, platformBorderBottom, 2, 2)
    // c.fillStyle = 'black'
    // c.fillRect(platformBorderLeft + 3, platformBorderBottom, 2, 2)

    // //platform left - top
    // c.fillStyle = 'red'
    // c.fillRect(platformBorderRight - 3, platformBorderTop, 2, 2)
    // c.fillStyle = 'blue'
    // c.fillRect(platformBorderRight + 3, platformBorderTop, 2, 2)

    // //platform rightplatformBorderRight - bottom
    // c.fillStyle = 'green'
    // c.fillRect(platformBorderRight - 3, platformBorderBottom, 2, 2)
    // c.fillStyle = 'black'
    // c.fillRect(platformBorderRight + 3, platformBorderBottom, 2, 2)

    // //platform left - bottom
    // c.fillStyle = 'red'
    // c.fillRect(playerRight, playerTop, 2, 2)

    // //platform left - bottom
    // c.fillStyle = 'red'
    // c.fillRect(playerLeft, playerTop, 2, 2)


    if (player.velocity.x > 0) {
        if (playerRight >= platformBorderLeft - 3 && playerRight < platformBorderLeft + 3) {
            checkYWallCollide(player, playerTop, playerBottom, platformBorderTop, platformBorderBottom)
        }
    }
    else if (player.velocity.x < 0) {
        if (playerLeft <= platformBorderRight + 3 && playerRight > platformBorderRight - 3) {
            checkYWallCollide(player, playerTop, playerBottom, platformBorderTop, platformBorderBottom)
        }

    }
}

function checkYWallCollide(player, playerTop, playerBottom, platformBorderTop, platformBorderBottom) {
    if (playerTop > platformBorderTop
        && playerTop < platformBorderBottom) {
        _handleWallCollide(player);
    }
}

function _handleWallCollide(player) {
    if (player.isShovedX === false && !player.isOnPlatform) {
        playAudioOnce('wallSfx')
        player.velocity.x *= -1
        console.log('miki');
        switch (player.currentSprite) {
            case 'jump-right':
                player.currentSprite = 'jump-left'
                console.log('wtf1')
                break;
            case 'jump-left':
                player.currentSprite = 'jump-right'
                console.log('wtf2')
                break;
            case 'fall-right':
                player.currentSprite = 'fall-left'
                console.log('wtf1')
                break;
            case 'fall-left':
                player.currentSprite = 'fall-right'
                console.log('wtf2')
                break;
        }
        player.isShovedX = true
        setTimeout(() => player.isShovedX = false, 400)
    }
}

function checkPunched(player) {
    for (let id in currentPlayers) {
        const rightPunchCollider = currentPlayers[id].punch.right.collider
        const leftPunchCollider = currentPlayers[id].punch.left.collider

        const rightPunchColliderX = rightPunchCollider.position.x
        const rightPunchColliderY = rightPunchCollider.position.y
        const leftPunchColliderX = leftPunchCollider.position.x
        const leftPunchColliderY = leftPunchCollider.position.y
        const punchWidth = currentPlayers[id].punch.right.width
        const playerColliderX = player.collider.position.x
        const playerColliderY = player.collider.position.y
        const playerHeight = player.collider.height
        const playerWidth = player.width

        if (currentPlayers[id] !== mySocketId) {
            if (rightPunchCollider.isActive) {
                if ((rightPunchColliderX + punchWidth > playerColliderX
                    && rightPunchColliderX + punchWidth < playerColliderX + playerWidth)
                    || (rightPunchColliderX < playerColliderX + playerWidth
                        && rightPunchColliderX > playerColliderX)
                    && rightPunchColliderY > playerColliderY - 10
                    && rightPunchColliderY < playerColliderY + playerHeight) {
                    console.log('punched from my left')
                    getPunched(player, 'right')
                }
            } else if (leftPunchCollider.isActive) {
                if ((leftPunchColliderX < playerColliderX + playerWidth
                    && leftPunchColliderX > playerColliderX)
                    || (leftPunchColliderX + punchWidth > playerColliderX
                        && leftPunchColliderX + punchWidth < playerColliderX + playerWidth)
                    && leftPunchColliderY > playerColliderY - 10
                    && leftPunchColliderY < playerColliderY + playerHeight) {
                    console.log('punched from my right')
                    getPunched(player, 'left')
                }
            }
        }
    }
}
