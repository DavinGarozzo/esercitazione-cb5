const url_actor = "http://localhost:3000/attori";

function createCard(actors) {
  const containerActor = document.querySelector(".attori");

  for (let actor of actors) {
    const cardEl = document.createElement("div");

    const idEl = document.createElement("p");
    const nameEl = document.createElement("h3");
    const cognomeEl = document.createElement("h3");
    const dataEl = document.createElement("h4");

    cardEl.className = "card";
    idEl.className = "id";
    nameEl.className = "name";
    cognomeEl.className = "cognome";
    dataEl.className = "data-nascita";

    idEl.textContent = "Id: " + actor.id;
    nameEl.textContent = actor.nome;
    cognomeEl.textContent = actor.cognome;
    dataEl.textContent = actor.data_nascita;

    cardEl.append(idEl, nameEl, cognomeEl, dataEl);
    containerActor.appendChild(cardEl);
  }
}

fetch(url_actor)
  .then((resp) => resp.json())
  .then((res) => createCard(res));
