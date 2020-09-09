function maiorValor (array) {
  let maior = array[0];
  let maiorIn = array[0];

  for (let i = 0; i < array.length; i += 1) {
    if (array[i] > maior) {
      maior = array[i];
      maiorIn = i;
    }
  }
  return maiorIn;
}

let teste = [2, 3, 6, 7, 10, 1];
console.log (maiorValor(teste));