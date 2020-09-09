let n = 5;
let ast = "*";
let line = "";
let position = n;

for (let i = 1; i <= n; i += 1) {
  for (let j = 1; j <= n; j += 1) {
    if (j < position) {
      line += " ";
    } else {
      line += ast
    }
  }
console.log (line);
line = "";
position -= 1; 
}