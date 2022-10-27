//Esercizio numero 1
function calcolatrice(num1, num2, operation) {
  switch (operation) {
    case "+":
      num1 + num2;
      return num1 + num2;

    case "-":
      num1 - num2;
      return num1 - num2;

    case "*":
      num1 * num2;
      return num1 * num2;

    case "/":
      num1 / num2;
      return num1 / num2;

    default:
      console.log("Error, select a valid operator");
  }
}
console.log(calcolatrice(7, 10, "+"));
console.log(calcolatrice(7, 3, "-"));
console.log(calcolatrice(5, 5, "*"));
console.log(calcolatrice(100, 100, "/"));
console.log(calcolatrice(7, 8, "d"));
console.log(calcolatrice(32, 2, ""));

//esercizio numero 2
const character = {
  Name: "Phil",
  Surname: "Spencer",
  Age: "54",
  Birthdate: "12 January 1968",
  Work: "CEO of Microsoft Gaming.",
};
console.log(character);
console.log(character.Name);
console.log(character.Surname);
console.log(character.Work);
const characterKeys = Object.keys(character);
console.log(characterKeys);
const characterValues = Object.values(character);
console.log(characterValues);
console.log(Object.isExtensible(character));
Object.preventExtensions(character);
console.log(Object.isExtensible(character));

const descriptor1 = Object.getOwnPropertyDescriptor(character, "Work");
console.log(descriptor1.configurable);
console.log(descriptor1.value);
