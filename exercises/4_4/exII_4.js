function maiorCaracteres (array) {
  let maior = array[0];

  for (let i = 0; i < array.length; i += 1) {
    if (maior.length < array[i].length) {
      maior = array[i];
    }
  }
  return maior;
}

let teste = ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"];
console.log (maiorCaracteres(teste));