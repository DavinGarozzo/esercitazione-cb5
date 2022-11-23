import {
  somma,
  sottrazione,
  divisione,
  moltiplicazione,
} from "./calcolatrice.js";

import http from "http";
import url from "url";
import fs from "fs";
const server = http.createServer((req, res) => {
  const my_url = url.parse(req.url, true).pathname;
  const params = url.parse(req.url, true).query;
  const { param1, param2 } = params;
  console.log(param1, param2);

  switch (my_url) {
    case "/home":
      res.write("home");
      break;
    case "/calcolatrice":
      const data = fs.readFileSync(`./html/calcolatrice.html`);
      res.write(data.toString());
      break;
    case "/somma":
      // res.write("somma");
      const dataSomma = fs.readFileSync(`./html/somma.html`);
      res.write(dataSomma.toString());
      res.write(`${somma(param1, param2)}`);

      break;
    case "/sottrazione":
      // res.write("sottrazione");
      const dataSottrazione = fs.readFileSync(`./html/sottrazione.html`);
      res.write(dataSottrazione.toString());
      res.write(`${sottrazione(param1, param2)}`);

      break;
    case "/moltiplicazione":
      // res.write("moltiplicazione");
      const dataMoltiplicazione = fs.readFileSync(
        `./html/moltiplicazione.html`
      );
      res.write(dataMoltiplicazione.toString());
      res.write(`${moltiplicazione(param1, param2)}`);
      break;
    case "/divisione":
      // res.write("divisione");
      const dataDivisione = fs.readFileSync(`./html/divisione.html`);
      res.write(dataDivisione.toString());
      res.write(`${divisione(param1, param2)}`);

      break;
    case "/style.css":
      const style = fs.readFileSync("./style.css");
      res.write(style.toString());
      break;
    default:
      res.write(
        "<h1>Ahi ahi ahi</h1><p>La pagina non esiste, torna alla <a href='/home'>Buenohome<a></p>"
      );
  }
  res.end();
});

// console.log(somma(1, 2));
server.listen(3000);
