//funzione createElement
const c = (el) => document.createElement(el);
//funzione querySelector
const q = (el) => document.querySelector(el);
//funzione GET
const GET = async (BASE_URL) => {
  const res = await fetch(BASE_URL);
  return await res.json();
};
//funzione POST
const POST = async (BASE_URL, body) => {
  return await fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
};
//funzione PATCH
const PATCH = async (URL, id, body) => {
  return await fetch(`${URL}/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
};
//funzione DELETE
const DELETE = async (URL, id) => {
  return await fetch(`${URL}/${id}`, {
    method: "DELETE",
    // headers: {
    //   'Content-Type': 'application/json'
    // },
  });
};

//----------------FUNZIONE CREATE CARD--------------
const createCard = (url, parent, name, type, id) => {
  const wrapperEl = c("li");
  const cardEl = c("div");
  const nameEl = c("p");
  const typeEl = c("p");
  //const idEl = c("p");
  const btn = c("button");
  const btnEdit = c("button");

  wrapperEl.className = "list__card";

  nameEl.textContent = name;
  typeEl.textContent = type;
  btn.textContent = "❌";
  btnEdit.textContent = "📝";
  //idEl.textContent = "Id: " + id;

  btn.addEventListener("click", () => {
    //console.log("clicked")
    DELETE(url, id);
  });

  btnEdit.addEventListener("click", () => {
    const patchForm = document.forms.pokemonPatch;
    const elements = patchForm.elements;
    elements.id.value = id;
    elements.name.value = nameEl.textContent;
    elements.type.value = typeEl.textContent;
  });
  cardEl.append(nameEl, typeEl, btn, btnEdit);
  wrapperEl.append(cardEl);
  parent.appendChild(wrapperEl);
};
//--------------FINE FUNZIONE CREATE CARD--------------

// API
/**
 * Create an unique hash code
 * @returns string
 */
function uuidv4() {
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
    (
      c ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
    ).toString(16)
  );
}

export { c, q, GET, POST, DELETE, PATCH, createCard, uuidv4 };
