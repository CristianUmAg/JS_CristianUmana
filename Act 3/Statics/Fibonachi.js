//Compruebo que un valor dado pertenezca a la sucesión
var num = prompt("Digita un núm para saber si pertenece a la suceción");
console.log("Núm sucesión: " + num);
var uno = 1;
var posUno = 0;
var posDos = 1;

while (num > posUno && num > posDos) {
  if (posUno < posDos) {
    posUno += posDos;
  }
  else {
    posDos += posUno;
  }
  uno++;
}
if (num == posUno || num == posDos) {
  console.log("El Número: " + num + " pertenece a la sucesion de Fibonachi, en la posicion: " + uno)
}
else {
  console.log("El Número: " + num + " no pertenece a la sucesion de Fibonachi");
}

//Introduce el ancho de la espiral
var dim = prompt("Digita la demención para la espiral");
console.log("Dimención de la espiral: " + dim);

var fibA = new Array();
var fibL = new Array();
var sum = fibA.unshift(fibL.unshift(0,1));

