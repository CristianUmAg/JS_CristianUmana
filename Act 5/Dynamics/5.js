let texto = prompt("Escribe el texto que deses utilizar para encontar a Password123");
/* Definimos las regex para buscar a Password123 */
let script = new RegExp (/((<script>+)|(<\/script>+))/,'gmi');
let equisde = new RegExp(/equisde/, "gmi");

let scriptS = texto.search(script);
let equisdeM = texto.match(equisde);

equisdeM = equisdeM == null ? 0 : equisdeM;

/* Esto solo es pa ver qu se compara y eso */
console.log(scriptS);
console.log(equisdeM);

/* Fallamos programando js y de paso encontramos a los aliados de las Fuerzas Bárbaras
Informáticas o a Password123*/
if (scriptS != -1 && equisdeM.length >= 5) {
  console.log("Oso oso mentiroso, vete lejos antes de que te lance mis calcetines olor a queso.");
}
else {
  if (scriptS >= 0 && equisdeM === 0) {
    console.log("¿Bob?");
    console.log("¿Wade?");
  } else {
    if (scriptS === -1 && equisdeM.length != null) {
      console.log("¿Bob?");
      console.log("¿Wade?");
    }
  }
}

