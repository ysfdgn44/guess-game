//? 1-100 arası sayı tut
let random = Math.ceil(Math.random() * 100);
const input = document.querySelector(".input");
const button = document.querySelector(".input-con button");
const result = document.querySelector(".result");
const imgCon = document.querySelector(".img-con");
let attapts = document.getElementById("live");
const inputCon = document.querySelector(".input-con");
const startButton = document.querySelector(".start-button button");
const tryButton = document.querySelector(".try button");
let live = 6;

startButton.addEventListener("click", () => {
  startButton.style.display = "none";
  inputCon.style.display = "flex";
  document.querySelector(".live-con").style.display = "block";
  input.focus();
});
console.log(random);

attapts.innerText = `${live}`;
button.addEventListener("click", () => {
  // input.value = "";
  input.focus();

  live--;
  attapts.innerText = `${live}`;
  if (random === +input.value) {
    console.log("bildiniz");
    result.innerText = "Congratulations";
    imgCon.style.backgroundImage = 'url("./assets/zafer.gif")';
    tryButton.style.display = "inline-block";
    start();
  }
  if (random < +input.value) {
    console.log("azaltınız");
    result.innerHTML = "decrease⬇";
    // input.value = "";
  }
  if (random > +input.value) {
    console.log("arttırınız");
    result.innerHTML = "increase⬆";
    // input.value = "";
  }

  if (live === 0 && input.value != random) {
    tryButton.style.display = "inline-block";
    inputCon.style.display = "none";
    live = 0;
    // input.value = "";
    console.log("can bitti geçmiş olsun");
    result.innerHTML = "Try Again😌";
    imgCon.style.backgroundImage = 'url("./assets/yenilgi.gif")';
  }
  input.value = "";
});
start();
function start() {
  tryButton.addEventListener("click", () => {
    tryButton.style.display = "none";
    inputCon.style.display = "flex";
    random = Math.ceil(Math.random() * 100);
    live = 6;
    attapts.innerText = `${live}`;
    imgCon.style.backgroundImage = 'url("./assets/bulut.png")';
    result.innerHTML = "Write the Number";
    console.log(random);
    input.focus();
  });
}

document.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    button.click();
  }
});
// console.log((result.innerHTML = "braaavoo"));
