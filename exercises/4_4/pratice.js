function sum (a, b) {
  return a + b;
}
function sub (a, b) {
  return a - b;
}
function mult (a, b) {
  return a * b;
}
function div (a, b) {
  return a / b;
}
function mod (a, b) {
  return a % b;
}
function highNum (a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}
function highNum2 (a, b, c) {
  if (a > b && a > c) {
    return a;
  } else if (b > a && b > c) {
    return b;
  } else {
    return c;
  }
}


// Exercicio 1 - Dado numeros a e b, some, subtraia, multiplique, divida e module.
console.log (sum (65, 78));
console.log (sub (14, 32));
console.log (mult (37, 14));
console.log (div (83, 67));
console.log (mod (82, 20));

// Exercicio 2 - Dado numeros a e b, veja qual é maior.
console.log (highNum (22, 55));

// Exercicio 3 - Dado numeros a, b e c, veja qual o maior.
console.log (highNum2 (97, 78, 17));
