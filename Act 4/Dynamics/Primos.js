/* Definimos variables */
let numero = prompt("Introduzca un número MAYOR a 1");
let resultado = Array();
let div = 0;
let y = 1;
let z = 2;

/* Comprueba que el número sea mayor o igual a 2 */
if (numero >= 2) {
  /* Genera todos los números enteros entre 2 y el introducido por el usuario */
  for (z = 2; z <= numero; z++) {
    /* Verifica si el número dado por el usuario da como resultante un valor exacto  */
    if (numero % z == 0) {
      /* Resta los divisores de los números que son divisibles al que proporcionó el usuario */
      div = 0;
      /* Cuenta los divisores del prompt */
      for (y = 1; y <= z; y++) {
        if (z % y == 0) {
          div = div + 1;
        }
      }
      /* Se agrega al arreglo si cumple las condiciones de los núm primos */
      if (div == 2) {
        resultado.push(z);
      }
    }
  }
  console.log(resultado);
}
/* En caso de que el usuario digite un valor menor a 1 se avisa que el valor digitado es invalido */
else {
  alert("Introduce un número MAYOR a 1");
}
