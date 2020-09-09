let chess = "QUEEN".toLowerCase();

switch (chess) {
 case "pawn":
  console.log (chess + " -> " + "Foward");
  break;

 case "knight":
  console.log (chess + " -> " + "L");
  break;

 case "bishop":
  console.log (chess + " -> " + "Diagonals");
  break;

 case "rook":
  console.log (chess + " -> " + "Straight line in foward, backward, right and left");
  break;

 case "queen":
  console.log (chess + " -> " + "Straight line in any direction");
  break;

 case "king":
  console.log (chess + " -> " + "One square in any direction");
  break;

 default:
  console.log (chess + " This piece doesn't exist");
}