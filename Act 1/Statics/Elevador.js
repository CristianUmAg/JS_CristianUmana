//Definimos variables
console.log("Digita la poscición de los elevadores");
var elev_A = prompt("Digite la posicion del elevador A");
console.log("El elevador A esta en el piso: " + elev_A);
var elev_B = prompt("Digite la posicion del elevador B");
console.log("El elevador B esta en el piso: " + elev_B);
var gama = prompt("Digite la posicion de Gama");
console.log("Gama está en el piso: " + gama);
var distElv = elev_A - elev_B;
//Validamos la posicion mas cercana a gama
if (distElv > 0) {
  //Si el resultado de la resta es positivo el elevador B es el más cercano
  console.log("Gama, deberias tomar el elevador A");
}
if (distElv < 0) {
  //Si el resultado de la resta es negativo el elevador A es el más cercano 
  console.log("Gama, deberias tomar el elevador B");
}
if (distElv == 0) {
  //Si el resultado de la resta es 0 los elevadores A y B estan en el mismo piso
  console.log("Gama, puedes tomas cualquiera de los dos elevadores, ya que estan en el mismo piso que tú");
}
