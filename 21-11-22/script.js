"use strict";

function somma(a, b) {
  return a + b;
}

function sottrazione(a, b) {
  return a - b;
}

function moltiplicazione(a, b) {
  return a * b;
}

function divisione(a, b) {
  return a / b;
}

const argvs = process.argv;
const argv = argvs.slice(2);
const operator = argv[0];
const num1 = parseFloat(argv[1]);
const num2 = parseFloat(argv[2]);

switch (operator) {
  case "somma":
    console.log("La tua somma è: " + somma(num1, num2));
    break;
  case "sottrazione":
    if (num1 < num2) {
      console.log("Sottrazione non valida");
    } else console.log("La tua sottrazione è: " + sottrazione(num1, num2));

    break;
  case "moltiplicazione":
    console.log("La tua moltiplicazione è: " + moltiplicazione(num1, num2));
    break;
  case "divisione":
    if (num1 > num2) {
      console.log("La tua divisione è: " + divisione(num1, num2));
    } else if (num1 == 0) {
      console.log("Perchè vuoi dividere lo 0??????");
    } else if (num1 < num2) {
      console.log("Non puoi dividere questi due numeri!!");
    }
    break;

  default:
    console.log("Abbiamo riscontrato un errore, ricarica e riprova! ");
}
