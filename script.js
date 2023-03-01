var playerSign = null
var computerSignContainer = document.querySelector(
    '.field.computer selected-sign'
)
var playerSignContainer = document.querySelector('.field.player selected-sign')

function playerSelectSign(sign) {
    if (playerSign != null) {
        playerSign = sign
        playGame()
    }
}

function playGame() {}
