import { c, q, GET, POST, DELETE, PATCH, createCard, uuidv4 } from "./utils.js";
//form pokemon
const form = document.forms.pokemon;
const element = form.elements;
const ul = q(".poke__list");
const url = "http://localhost:3000/pokemon";
const inputEl = q(".seach__input");
//form patch pokemon
const formPatch = document.forms.pokemonPatch;
const elementsFP = formPatch.elements;

formPatch.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("ciao pippo");
  const id = elementsFP.id.value;
  const data = {
    name: elementsFP.name.value,
    type: elementsFP.type.value,
  };
  PATCH(url, id, data)
    .then(() => location.reload())
    .catch((e) => console.log(e));
});

//EVENTO PER LA SEARCH BAR
// inputEl.addEventListener("input", (e) => {
//   const searchString = e.target.value;
//   const filteredProd = productsList.filter((prod) => {
//     return prod.title.includes(searchString);
//   });
//   console.log(filteredProd);
// });

//aggiungere evento al form
form.addEventListener("submit", (e) => {
  //bloccare gli eventi di default
  e.preventDefault();
  //raccogliere i dati
  const data = {
    id: uuidv4(),
    name: element.poke__name.value,
    type: element.poke__type.value,
  };

  //console.log(data);
  //API che ci invia i dati al server utilizzando POST invece di GET
  //specifichiamo il tipo dati che inviamo
  //utilizziamo stringify per trasformare i dati

  //fetch commentata per utilizzare la POST delle nostre /utils.js
  //   fetch("http://localhost:3000/pokemon", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(data),
  //   })
  POST(url, data)
    //controllare se l'upload va a buon fine(then), altrimenti (catch) per evidenziare l'errore
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    })
    //al termine della fetch vogliamo riavere i dati indietro
    .finally(() => {
      //fetch per prenderci i dati nuovi caricati
    });
});

//get commentata per utilizzare la nostra GET nelle /utils.js
// const getPokemon = () => {
//   fetch("http://localhost:3000/pokemon")
//     .then((res) => res.json())
//     .then((res) => res.map((pkm) => (ul.innerHTML += `<li>${pkm.name}</li>`)));
// };
//eseguire la funzione ogni volta che c'è un reload della pagina

//EVENTO CHE DOVREBBE FAR FUNZIONARE LA SEARCH BAR MA NON VA
// inputEl.addEventListener("input", (e) => {
//   const searchString = e.target.value;
//   container__list.replaceChildren()
//   //filtro
//   const pokeFiltered = res.filter(poke => poke?.name.includes(searchString))
//   pokeFiltered.map(poke => createCard(poke, container__list))
// })
window.onload = GET(url).then((res) =>
  res.map((pkm) => createCard(url, ul, pkm?.name, pkm?.type, pkm?.id))
);
