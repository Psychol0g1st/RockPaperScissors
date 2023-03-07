var playerPoints = 0
var computerPoints = 0

const SIGNS = ['rock', 'paper', 'scissors']
const resultText = document.getElementById('match-result')
const playerPointsText = document.querySelector('.result .point.player')
const computerPointsText = document.querySelector('.result .point.computer')
const computerSignContainer = document.querySelector(
    '.field.computer .selected-sign .icon'
)
var playerSignContainer = document.querySelector(
    '.field.player .selected-sign .icon'
)
var timerId

resultText.style.display = 'none'

function determineWinner(player1Choice, player2Choice) {
    playerSignContainer.dataset.sign = player1Choice
    computerSignContainer.dataset.sign = player2Choice

    if (player1Choice === player2Choice) {
        return 0
    }
    if (
        (player1Choice === 'rock' && player2Choice === 'scissors') ||
        (player1Choice === 'scissors' && player2Choice === 'paper') ||
        (player1Choice === 'paper' && player2Choice === 'rock')
    ) {
        return 1
    } else {
        return -1
    }
}
function processGameResult(resultCode) {
    resultText.style.display = 'block'

    switch (resultCode) {
        case -1: {
            computerPoints++
            computerPointsText.innerText = computerPoints
            resultText.innerText = 'Veszítettél'
            break
        }
        case 0: {
            resultText.innerText = 'Döntetlen'
            break
        }
        case 1: {
            playerPoints++
            playerPointsText.innerText = playerPoints
            resultText.innerText = 'Nyertél'
            break
        }
    }
    timerId = setTimeout(function () {
        resultText.style.display = 'none'
    }, 1000)
}

function computerSelectSign() {
    const randomIndex = Math.floor(Math.random() * SIGNS.length)
    return SIGNS[randomIndex]
}

function playGame(playerSign) {
    clearTimeout(timerId)
    computerSign = computerSelectSign()
    resultCode = determineWinner(playerSign, computerSign)
    processGameResult(resultCode)
}
