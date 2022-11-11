let i = 1;
let result = `https://pokeapi.co/api/v2/pokemon/${i}`;
fetch(result)
  .then((res) => res.json())
  .then((res) => createCard(res));
//dichiarazione costanti
const contPokemon = document.createElement("div");
const namePokemon = document.createElement("h3");
const ImgPokemon = document.createElement("img");
const typePokemon = document.createElement("p");
const idPokemon = document.createElement("p");
// create card
const createCard = (pokemon) => {
  const cards = document.createElement("body");
  namePokemon.textContent = pokemon.forms[0].name;
  cards.className = pokemon.types[0].type.name;
  ImgPokemon.setAttribute("src", pokemon.sprites.front_default);
  typePokemon.textContent = pokemon.types[0].type.name;
  cards.classList.add(`bg-${pokemon.types[0].type.name}`);
  idPokemon.textContent = getId(pokemon.id);
  //appendo elemento al
  cards.append(namePokemon, ImgPokemon, typePokemon, idPokemon);
  pokedex.appendChild(cards);
};
const getIdAdvice = (URL) => {
  fetch(URL, { cache: "no-cache" })
    .then((res) => res.json())
    .then((res) => (id.innerHTML = res.slip.id))
    .catch((e) => console.log(e));
};
const pokedex = document.querySelector("body");
const getId = (n) => {
  if (!n) return null;
  let id = n;
  if (id < 10) {
    id = "#00" + id;
  } else if (id < 100) {
    id = "#0" + id;
  }
  return (id = "#" + id);
};
//dichiarazione bottoni
const buttonNext = document.querySelector(".nextbutton");
const buttonPrevious = document.querySelector(".firstbutton");
//eventi che richiamano una funzione dentro il bottone
buttonNext.addEventListener("click", () => {
  i++;
  let result = `https://pokeapi.co/api/v2/pokemon/${i}`;
  fetch(result)
    .then((res) => res.json())
    .then((res) => createCard(res));
  if (i >= 10) buttonNext.disabled = true;
  if (i === 1) buttonPrevious.disabled = true;
  else buttonPrevious.disabled = false;
});
buttonPrevious.addEventListener("click", () => {
  if (i <= 2) buttonPrevious.disabled = true;
  buttonNext.disabled = false;
  i--;
  let result = `https://pokeapi.co/api/v2/pokemon/${i}`;
  fetch(result)
    .then((res) => res.json())
    .then((res) => createCard(res));
});
window.onload = buttonPrevious.disabled = true;
