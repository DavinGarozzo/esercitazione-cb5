const url_actor = "http://localhost:3000/attori";

function createCard(actors) {
  const containerActor = document.querySelector(".attori");

  for (let actor of actors) {
    const cardEl = document.createElement("div");
    const imgEl = document.createElement("div");
    const nameEl = document.createElement("h3");
    const cognomeEl = document.createElement("h3");
    const dataEl = document.createElement("h4");

    cardEl.className = "card";
    imgEl.className = "card-img";
    nameEl.className = "name";
    cognomeEl.className = "cognome";
    dataEl.className = "data-nascita";

    nameEl.textContent = actor.nome;
    cognomeEl.textContent = actor.cognome;
    dataEl.textContent = actor.data_nascita;

    cardEl.append(imgEl, nameEl, cognomeEl, dataEl);
    containerActor.appendChild(cardEl);
  }
}

fetch(url_actor)
  .then((resp) => resp.json())
  .then((res) => createCard(res));
