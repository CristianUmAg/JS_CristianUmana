let celda = prompt("Digite las dimenciones de la tabla");
console.log(celda);

//Se crea la tabla
let body = document.getElementsByTagName("body");
let tabla = document.createElement("table");
tabla.setAttribute("id", "tab");
//Se crean las columnas

for (var z = 1; z <= celda; z++) {
  let tr = document.createElement("tr");
  tr.setAttribute("class", "tr");
  // Se deberian de crear las celdas :((
  for (var y = 1; y <= celda; y++) {
    let color = (z + y) % 2;
    if (color != 0) {
      let td = document.createElement("td");
      td.setAttribute("class", "white");
      tr.appendChild(td);
    }
    else {
      let td = document.createElement("td");
      td.setAttribute("class", "black");
      tr.appendChild(td);
    }
  }
  tabla.appendChild(tr);
}
body[0].appendChild(tabla);
