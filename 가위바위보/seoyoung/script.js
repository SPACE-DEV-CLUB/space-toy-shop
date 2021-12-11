console.log("Start!");

const pickArray = ['✌','✊','🖐'];
const userPick = document.querySelector("#userpick");
const computerPick = document.querySelector("#computerpick");
const btnPick = document.querySelectorAll(".btn-pick");
const btnReset = document.querySelector(".btn-reset");
const result = document.querySelector(".result");
let click = true;

//순서대로 가위바위보 이미지 출력
let index = 0;
function randomPick() {
    userPick.innerText = `${pickArray[index++]}`;
    if(index == pickArray.length) {
    index = 0;
}}
let interVal = setInterval(randomPick, 200);

//유저가 버튼 클릭 시 반복을 멈추고, 컴퓨터가 선택한 이모지 출력
let userClick = function() {
    clearInterval(interVal);
    let random = pickArray[Math.floor(Math.random() * pickArray.length)];
    computerPick.innerText = `${random}`;
}

//결과 출력
for(let i = 0; i < btnPick.length; i++) {
    btnPick[i].addEventListener('click', function(){
        if (click){
            click = false;
            userClick();
            userPick.innerText = this.textContent;
            if (this.textContent == computerPick.innerText)
            result.innerText = "DRAW";
            else if (this.textContent == "✊" && computerPick.innerText == "✌")
            {result.innerText = "WIN";
            computerPick.classList.add("grayscale");}
            else if (this.textContent == "✌" && computerPick.innerText == "🖐")
            {result.innerText = "WIN";
            computerPick.classList.add("grayscale");}
            else if (this.textContent == "🖐" && computerPick.innerText == "✊")
            {result.innerText = "WIN";
            computerPick.classList.add("grayscale");}
            else
            {result.innerText = 'LOSE'
            userPick.classList.add("grayscale");}
        }
    })
}

//리셋
let resetGame = function(){
    click = true;
    interVal = setInterval(randomPick, 200);
    computerPick.innerText = '🤖';
    result.innerText = 'HUMAN vs ROBOT';
    userPick.classList.remove("grayscale");
    computerPick.classList.remove("grayscale");
}

btnReset.addEventListener('click', function() {
    if (!click) {
        resetGame();
        console.log("Dddd");
    }
})