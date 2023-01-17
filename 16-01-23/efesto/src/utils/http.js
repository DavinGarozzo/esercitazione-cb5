const BASE_URL = "https://dummyjson.com";

//CHIAMATA GET PER RECUPERO DATI
const GET = async (resource) => {
  const res = await fetch(`${BASE_URL}/${resource}`);
  const data = await res.json();

  return data;
};

//CHIAMATA POST PER AGGIUNGERE DATI

const POST = async (resource, body) => {
  const res = await fetch(`${BASE_URL}/${resource}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  const data = await res.json();

  return data;
};

export { GET, POST };
