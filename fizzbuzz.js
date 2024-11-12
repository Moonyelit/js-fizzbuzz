let nombreTest = 15;
let resultat;

if (nombreTest % 3 === 0 && nombreTest % 5 != 0) {
  resultat("Fizz");
}

if (nombreTest % 5 === 0 && nombreTest % 3 != 0) {
  resultat("Fizz");
}

if (nombreTest % 3 === 0 && nombreTest % 5 == 0) {
  resultat("fizzbuzz");
}

 
console.log(resultat || nombreTest);

