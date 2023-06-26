// DOM
const btnRules = document.querySelector('.rules-btn')
const btnClose = document.querySelector('.close-btn')
const gameRules= document.querySelector('.game-rules')

// Show/Hide Rules
btnRules.addEventListener('click', () => {
    gameRules.classList.toggle("show-game-rules")
});
btnClose.addEventListener('click', () => {
    gameRules.classList.toggle("show-game-rules")
});