let n = 5;
let astN = 1;
let line = "";
let spaceN = (n - 1) / 2;


if (n % 2 == 1) {
  for (let i = 0)
  for (let j = 0; i < spaceN; i += 1) {
    line += " ";
  }

  for (i = 0; i < astN; i += 1) {
    line += "*";
  }
  console.log (line);
  
} else {
  console.log ("Não funciona com numeros pares, por favor, insira um numero impar");
}