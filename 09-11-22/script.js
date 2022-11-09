const urlArray = []; //creo un array vuoto che conterrà gli url singoli
const loadingEl = document.querySelector(".loading");
for (let i = 1; i <= 150; i++) {
  urlArray.push(`https://pokeapi.co/api/v2/pokemon/${i}`); //pusho gli url nell'array
}

let request = urlArray.map((url) => {
  loadingEl.classList.add("active");
  return fetch(url).then((res) => res.json()); //creo un array di promise mappando urlArray
});

Promise.all(request)
  .then((res) => res.map((r) => createPokemonCard(r)))
  .finally(() => loadingEl.classList.remove("active"));

//funzione createCard
const bodyEl = document.querySelector("body");

const createPokemonCard = (data) => {
  const cardEl = document.createElement("div");
  const cardImgEl = document.createElement("img");

  const cardNameEl = document.createElement("h1");
  const typeEl = document.createElement("h3");
  const contCard = document.createElement("div");
  cardEl.className = "cardEl";
  cardEl.classList.add(`bg-${data.types[0].type.name}`);
  cardImgEl.setAttribute("src", data.sprites.other.dream_world.front_default);
  cardImgEl.setAttribute("alt", "img");
  cardNameEl.textContent = data.name;
  typeEl.textContent = "Type: " + data.types[0].type.name;
  const pokemonId = document.createElement("h3");
  pokemonId.className = "pokemon-id";
  pokemonId.textContent = `ID# ${createId(data.id)}`;

  //funzione id dinamico
  function createId(id) {
    if (!id) return null;
    if (id < 10) {
      return `00${id}`;
    } else if (id < 100) {
      return `0${id}`;
    }
    return id;
  }
  cardEl.append(cardImgEl, pokemonId, cardNameEl, typeEl);
  contCard.append(cardEl);
  bodyEl.append(contCard);
};
