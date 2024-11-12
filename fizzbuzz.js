let nombre = 30;

let printable = "";

if (nombre % 3 === 0) {
  printable += "fizz";
}

if (nombre % 5 === 0) {
  printable += "buzz";
}

console.log(printable || nombre);