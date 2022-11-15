import { c, q, GET, POST, uuidv4 } from "./utils.js";
const form = document.forms.pokemon;
const element = form.elements;
const ul = q(".poke__list");
const url = "http://localhost:3000/pokemon";

//console.log(element.poke__name.value);

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
window.onload = GET(url).then((res) =>
  res.map((pkm) => (ul.innerHTML += `<li>${pkm.name}</li>`))
);
