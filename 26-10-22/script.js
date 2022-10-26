let datiArr = ["Davin", "Garozzo", "24", "Diploma"];
console.log(datiArr);
datiArr.splice(2, 1);
console.log(datiArr);
datiArr.splice(2, 0, "27/11/1997");
datiArr.splice(0, 1, datiArr[0].toUpperCase());
datiArr.splice(1, 1, datiArr[1].toUpperCase());
console.log(datiArr);

let str = "#######";
for (let i = 7; i >= 0; i--) {
  console.log(str.slice(0, i));
}
