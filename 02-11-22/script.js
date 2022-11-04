import heroes from "./heroes.js";
console.log(heroes);

const bodyEl = document.querySelector("body");

const createCard = (name, imgUrl, imgAlt, description) => {
  const cardEl = document.createElement("div");
  cardEl.className = "card";
  const nameEl = document.createElement("h1");
  nameEl.textContent = name;

  const imgEl = document.createElement("img");
  imgEl.setAttribute = ("src", imgUrl);
  imgEl.setAttribute = ("alt", imgAlt);

  const parEl = document.createElement("p");
  parEl.textContent = description;

  cardEl.append(nameEl, imgEl, parEl);
  return bodyEl.appendChild(cardEl);
};
heroes.map((heroe) => createCard(heroe.name, heroe.image, heroe.description));
