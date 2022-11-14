let i = 1;
let result = `https://jsonplaceholder.typicode.com/posts/${i}`;
const loadingEl = document.querySelector(".loading");
//fetch per richiamare
fetch(result)
  .then((res) => res.json())
  .then((res) => createCard(res))
  //LOADER CHE PERO' NON FUNZIONA
  .finally(() => {
    loadingEl.classList.add("active");
    loadingEl.classList.remove("active");
  });

//dichiarazione costanti
const post = document.querySelector("body");
const contPost = document.createElement("div");
contPost.classList.add("contpost");
const postTitle = document.createElement("h3");
const postBody = document.createElement("p");
const postId = document.createElement("p");

//funzione per creare la card
const createCard = (posts) => {
  const cards = document.createElement("body");
  postTitle.textContent = posts.title;
  postId.textContent = getId(posts.id);
  postBody.textContent = posts.body;

  //appendo elemento al
  cards.append(postId, postTitle, postBody);
  post.appendChild(cards);
};

//fetch per richiamarci l'ID
const getIdAdvice = (URL) => {
  fetch(URL, { cache: "no-cache" })
    .then((res) => res.json())
    .then((res) => (id.innerHTML = res.posts.id))
    .catch((e) => console.log(e));
};

//funzione per creare l'id generico
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
  let result = `https://jsonplaceholder.typicode.com/posts/${i}`;
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
  let result = `https://jsonplaceholder.typicode.com/posts/${i}`;
  fetch(result)
    .then((res) => res.json())
    .then((res) => createCard(res));
});

//bottone previous disattivato al load della pagina
window.onload = buttonPrevious.disabled = true;
