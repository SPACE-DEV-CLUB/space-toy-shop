const listGame = document.getElementById("list-game");
const listChoice = document.querySelectorAll("button");
const result = document.querySelector(".result");
const reTry = document.querySelector(".retry");
const choices = {
  0: {
    emojis: "βοΈ",
    value: "Scissors",
  },
  1: {
    emojis: "β",
    value: "Rock",
  },
  2: {
    emojis: "π",
    value: "Paper",
  },
};
let values = 0;
//μ΄κΈ° μ΄λ―Έμ§ μλ¦¬ μ€μ , λλλ§ μ ux
listGame.innerHTML = `<p>β</p>`;

const selectChoices = (e) => {
  let clickedValue = e.target.innerHTML;
  let randomValue = choices[values].value;

  clearInterval(listMotion);

  listChoice.forEach((element) => {
    element.disabled = true;
  });

  if (clickedValue === randomValue) {
    result.innerHTML = `<p>Draw</p>`;
  } else if (
    (clickedValue === "Scissors" && randomValue === "Rock") ||
    (clickedValue === "Rock" && randomValue === "Paper") ||
    (clickedValue === "Paper" && randomValue === "Scissors")
  ) {
    result.innerHTML = `<p>You Lose</p>`;
  } else {
    result.innerHTML = `<p>You Win</p>`;
  }
};

const reStart = () => {
  window.location.reload();
};
reTry.addEventListener("click", reStart);

//choices animation
const listMotion = setInterval(() => {
  values++;
  if (values > 2) {
    values = 0;
  }
  listGame.innerHTML = `<p>${choices[values].emojis}</p>`;
}, 100);

listChoice.forEach((element) => {
  element.addEventListener("click", selectChoices);
});
