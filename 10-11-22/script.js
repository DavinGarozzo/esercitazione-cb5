//selezione degli elementi del dom per la manipolazione dinamica
const btn = document.getElementById("btn-generator");
const advice = document.getElementById("advice");
const idAdvice = document.getElementById("id-advice");
const urlAdvice = "https://api.adviceslip.com/advice";
//dichiarazione della funzione che ci fornirà l'indice
const getID = (URL) => {
  fetch(URL, { cache: "no-cache" })
    .then((res) => res.json())
    .then((res) => (idAdvice.innerHTML = "ID Num: " + res.slip.id))
    .catch((e) => console.log("Error:" + e));
};

//dichiarazione della funzione che ci fornirà l'advice
const getAdvice = (URL) => {
  fetch(URL, { cache: "no-cache" })
    .then((res) => res.json())
    .then((res) => (advice.innerHTML = res.slip.advice))
    .catch((e) => console.log("Error:" + e));
};

const onFirstLoad = () => {
  //evento del bottone che ad ogni click richiamerà le funzioni modificando il dom
  btn.addEventListener("click", () => {
    getID(urlAdvice);
    getAdvice(urlAdvice);
  });
  getID(urlAdvice);
  getAdvice(urlAdvice);
};

window.onload = onFirstLoad;
