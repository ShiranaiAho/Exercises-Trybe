let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
};
let info2 = {
  personagem: "Tio Patinhas",
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: "O ultimo MacPatinhas",
  recorrente: "sim",
};

info.recorrente = "sim";
console.log (info);

for (valor in info) {
  if (info[valor] === info2[valor]) {
    console.log ("Ambos " + valor + "s");
    break;
  }
  console.log (info[valor] + " e " + info2[valor]);
  
}