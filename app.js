let numberSecret

function generateRandom() {
    numberSecret = Math.trunc(Math.random() * 20) + 1
    return numberSecret
}
generateRandom()

let againButton = document.querySelector('.btn')
let number = document.querySelector('.number')
let input = document.querySelector('.guess')
let secretInput = document.querySelector('#secretInp')
let checkButton = document.querySelector('.check')
let scoreAvg = document.querySelector('.scoreBall')
let winScoreAvg = document.querySelector('.winScore')
// console.log(againButton, secretNumbers, guessText, checkButton, scoreAvg, winScoreAvg,secretInput);

let scores = 20
let highScore = 0
number.textContent = numberSecret

checkButton.addEventListener('click', () => {
    let guess = Number(input.guess) //xatolik bor

    if(!guess){
        input.computedStyleMap.borderColor="red"
    }
})

