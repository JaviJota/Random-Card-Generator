/* eslint-disable */
import "bootstrap";
import "./style.css";

// import "./assets/img/rigo-baby.jpg";
// import "./assets/img/4geeks.ico";
// window.onload = function() {
//Generador de nueva carta aleatoria
function updateCard() {
  const simbolTop = document.querySelector(".simbol-top");
  const simbolBottom = document.querySelector(".simbol-bottom");
  const number = document.querySelector(".number");
  const docSimbol = getRandomSimbol();

  simbolTop.innerHTML = docSimbol;
  simbolBottom.innerHTML = docSimbol;
  number.innerHTML = getRandomNumber();
  getStyleColor(getColor(docSimbol));
}

const newCardBtn = document.querySelector(".newCard-btn");
newCardBtn.addEventListener("click", function() {
  updateCard();
  startInterval();
});

//Generar número aleatorio de carta
function getRandomNumber() {
  const numbers = ["A", 2, 3, 4, 5, 6, 7, 8, 9, "J", "Q", "K"];
  let randomNumber = Math.floor(Math.random() * 12);
  console.log("getRandomNumber" + numbers[randomNumber]);

  return numbers[randomNumber];
}

//Generar palo aleatorio de carta
function getRandomSimbol() {
  const simbol = ["♦", "♥", "♠", "♣"];
  const randomSimbolNumber = Math.floor(Math.random() * simbol.length);
  console.log("getRandomSimbol" + simbol[randomSimbolNumber]);

  return simbol[randomSimbolNumber];
}

function getColor(simbol) {
  let color = "";
  if (simbol === "♥" || simbol === "♦") {
    color = "red";
  } else if (simbol === "♠" || simbol === "♣") {
    color = "black";
  }
  console.log("getColor" + color);
  return color;
}

function getStyleColor(color) {
  const simbolTop = document.querySelector(".simbol-top");
  const simbolBottom = document.querySelector(".simbol-bottom");

  simbolTop.style.color = color;
  simbolBottom.style.color = color;
}

let intervalId;
//Cambiar de carta cada 10secs
function startInterval() {
  //Reset del intervalo iniciado al cargar la página
  clearInterval(intervalId);
  //Iniciar el intervalo de nuevo
  intervalId = setInterval(updateCard, 10000);
}

// Al cargar la página: generar nueva carta e iniciar intervalo
window.onload = function() {
  updateCard();
  startInterval();
};
// }
