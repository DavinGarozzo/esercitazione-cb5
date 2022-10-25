firstNum = prompt("Ciao, inserisci il primo numero!!");
secondNum = prompt("Adesso inserisci il secondo!!");
firstNumParsed = parseInt(firstNum);
secondNumParsed = parseInt(secondNum);
chooseOpe = prompt(
  "Cosa vuoi fare con questi numeri?!" +
    "Scegli tra queste operazioni: 1=addizione,2=sottrazione,3=moltiplicazione,4=divisione"
);
chooseOpe = parseInt(chooseOpe);
let sum = firstNumParsed + secondNumParsed;
let sub = firstNumParsed - secondNumParsed;
let molt = firstNumParsed * secondNumParsed;
let div = firstNumParsed / secondNumParsed;

switch (chooseOpe) {
  case 1:
    console.log(firstNumParsed + secondNumParsed);
    alert("Il tuo risultato è:" + sum);
    break;
  case 2:
    console.log(firstNumParsed - secondNumParsed);
    alert("Il tuo risultato è:" + sub);
    break;
  case 3:
    console.log(firstNumParsed * secondNumParsed);
    alert("Il tuo risultato è:" + molt);
    break;
  case 4:
    console.log(firstNumParsed / secondNumParsed);
    alert("Il tuo risultato è:" + div);
    break;
  default:
    console.log("Per andare avanti seleziona un numero tra: 1-4.");
    alert("Scegli una delle operazioni possibili");
    break;
}
