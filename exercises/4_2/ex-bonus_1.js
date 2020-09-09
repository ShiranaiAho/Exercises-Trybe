let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let j = 1; j < numbers.length; j += 1) {
  for (let i = 0; i < j; i += 1) {
    if (numbers[i] > numbers[j]) {
      let position = numbers[j]; 

      numbers[j] = numbers[i];
      numbers[i] = position;
    }
  }
}
console.log (numbers);