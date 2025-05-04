let numberSecret

function generateRandom() {
    numberSecret = Math.trunc(Math.random() * 20) + 1
    return numberSecret
}
generateRandom()
let $HTML= document
let againButton = document.querySelector('.btn')
let number = document.querySelector('.number')
let massage = document.querySelector('.guess')
let input = document.querySelector('.secretInp')
let checkButton = document.querySelector('.check')
let scoreAvg = document.querySelector('.scoreBall')
let winScoreAvg = document.querySelector('.winScore')
let erorInp = document.querySelector('.wasted')
// console.log(againButton, secretNumbers, guessText, checkButton, scoreAvg, winScoreAvg,secretInput);

let scores = 20
let highScore = 0
// number.textContent = numberSecret
checkButton.addEventListener('click', () => {
    let number = Number(input.value); // TO‘G‘RILANGAN QATOR
    console.log(number);

    if (!number) {
        input.style.borderColor = "red"
        erorInp.textContent = "Qiymat kiriting "
        setTimeout(() => {
            input.style.borderColor = ''
            erorInp.textContent = ""
        }, 1000);
    } else if (number !== numberSecret) {
        if (scores > 1) {
            massage.textContent = number > numberSecret ? 'Juda baland📈' : 'Juda past📉'
            scores--
            scoreAvg.textContent = scores
        } else {
            massage.textContent = 'Yutqazdingiz'
            scores = 0
            scoreAvg.textContent = scores;
            $HTML.body.style.backgroundColor = 'red';

        }
    }else{
        massage.textContent="Siz G'alaba qozondingiz✨"
        $HTML.body.style.backgroundColor='green'
        scoreAvg.textContent=scores
        if(scores>highScore){
            highScore=scores
            winScoreAvg.textContent=highScore

        }
    }
});



againButton.addEventListener('click',()=>{
    generateRandom()
    scores=20
    winScoreAvg.textContent=highScore
    massage.textContent="Taxmin qiling..."
    input.value=''
    $HTML.body.style.backgroundColor=""
    number.textContent='?'
})