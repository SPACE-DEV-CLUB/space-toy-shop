console.log("Start!");

const pickArray = ['β','β','π'];
const userPick = document.getElementById("userpick");
const computerPick = document.getElementById("computerpick");
const btnPick = document.querySelectorAll(".btn-pick");
const btnReset = document.querySelector(".btn-reset");
const result = document.querySelector(".result");
let click = true;

//μμλλ‘ κ°μλ°μλ³΄ μ΄λ―Έμ§ μΆλ ₯
let index = 0;
function randomPick() {
    userPick.innerText = `${pickArray[index++]}`;
    if(index == pickArray.length) {
    index = 0;
}}
let interVal = setInterval(randomPick, 200);

//μ μ κ° λ²νΌ ν΄λ¦­ μ λ°λ³΅μ λ©μΆκ³ , μ»΄ν¨ν°κ° μ νν μ΄λͺ¨μ§ μΆλ ₯
const userClick = function() {
    clearInterval(interVal);
    const random = pickArray[Math.floor(Math.random() * pickArray.length)];
    computerPick.innerText = `${random}`;
}

//κ²°κ³Ό μΆλ ₯
for(let i = 0; i < btnPick.length; i++) {
    btnPick[i].addEventListener('click', function(){
        if (click){
            click = false;
            userClick();
            userPick.innerText = this.textContent;
            if (this.textContent == computerPick.innerText){
                result.innerText = "DRAW";
            } else if (
                (this.textContent == "β" && computerPick.innerText == "β") ||
                (this.textContent == "β" && computerPick.innerText == "π") ||
                (this.textContent == "π" && computerPick.innerText == "β")
            ){
                result.innerText = "WIN";
                computerPick.classList.add("grayscale");
            } else
            {
                result.innerText = 'LOSE'
                userPick.classList.add("grayscale");}
        }
    })
}

//λ¦¬μ
const resetGame = function(){
    click = true;
    interVal = setInterval(randomPick, 200);
    computerPick.innerText = 'π€';
    result.innerText = 'HUMAN vs ROBOT';
    userPick.classList.remove("grayscale");
    computerPick.classList.remove("grayscale");
}

btnReset.addEventListener('click', function() {
    if (!click) {
        resetGame();
    }
})