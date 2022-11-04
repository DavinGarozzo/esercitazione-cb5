import heroes from "./heroes.js";

console.log(heroes);
const bodyEl = document.querySelector("body");
//collegare la sezione generica contenente tutte le card
const cardDiv = document.querySelector("section");
cardDiv.className = "card";

//creazione div contenitore cards
// const cardDiv = document.createElement("div");
// cardDiv.className = "card"

// creiamo la funzione per la creazione delle card

const createCard = (data) => {
  const cardEl = document.createElement("div");
  const cardImgEl = document.createElement("img");
  const cardTitleEl = document.createElement("h1");

  cardEl.className = "card__cont";
  cardImgEl.setAttribute("src", data.image);
  cardImgEl.setAttribute("alt", data.title);
  cardTitleEl.textContent = data.name;

  //appendElements
  cardEl.append(cardImgEl, cardTitleEl);
  cardDiv.append(cardEl);
};

heroes.map((heroe) => createCard(heroe));

//evento
const buttonEl = document.querySelector("button");
const cardEl = document.querySelector(".card");
buttonEl.addEventListener("click", () => prompt("Cosa possiamo migliorare?"));
