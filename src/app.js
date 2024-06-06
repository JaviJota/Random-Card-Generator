/* eslint-disable */
// import "bootstrap";
import "./style.css";

// import "./assets/img/rigo-baby.jpg";
// import "./assets/img/4geeks.ico";

// window.onload = function() {
let simbolTop = document.querySelector(".simbol-top");
let simbolBottom = document.querySelector(".simbol-bottom");
let number = document.querySelector(".number");
let newCardBtn = document.querySelector(".newCard-btn");
let intervalId;

const simbol = ["♦", "♥", "♠", "♣"];

//Generador de nueva carta aleatoria
function getRandomCard() {
  getRandomNumber();
  getRandomSimbol();
}

newCardBtn.addEventListener("click", function() {
  getRandomCard();
  startInterval();
});

//Generar número aleatorio de carta
function getRandomNumber() {
  let randomNumber = Math.floor(Math.random() * 12 + 1);
  if (randomNumber == 10) number.innerHTML = "J";
  else if (randomNumber == 11) number.innerHTML = "Q";
  else if (randomNumber == 12) number.innerHTML = "K";
  else number.innerHTML = randomNumber;
}

//Generar palo aleatorio de carta
function getRandomSimbol() {
  let randomSimbolNumber = Math.floor(Math.random() * simbol.length);
  simbolTop.innerHTML = simbol[randomSimbolNumber];
  simbolBottom.innerHTML = simbol[randomSimbolNumber];
  if (randomSimbolNumber == 0 || randomSimbolNumber == 1) {
    simbolTop.style.color = "red";
    simbolBottom.style.color = "red";
  } else {
    simbolTop.style.color = "black";
    simbolBottom.style.color = "black";
  }
}

//Cambiar de carta cada 10secs
function startInterval() {
  //Reset del intervalo iniciado al cargar la página
  clearInterval(intervalId);
  //Iniciar el intervalo de nuevo
  intervalId = setInterval(getRandomCard, 10000);
}

//Al cargar la página: generar nueva carta e iniciar intervalo
window.onload = function() {
  getRandomCard();
  startInterval();
};
// };
