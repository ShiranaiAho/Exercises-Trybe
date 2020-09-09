function menorValor (array) {
  let menor = array[0];
  let menorIn = array[0];

  for (let i = array.length-1; i >= 0; i -= 1) {
    if (array[i] < menor) {
      menor = array[i];
      menorIn = i;
    }
  }
  return menorIn;
}

let teste = [2, 4, 6, 7, 10, 0, -3];
console.log (menorValor(teste));