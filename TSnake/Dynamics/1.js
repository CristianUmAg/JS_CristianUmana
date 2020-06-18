//Genera un numero aleatorio
function NumRandom(){
  return Math.round(Math.random()*9);
}
//Funcion para generar manzanas
function GenManzana() {
  do {
    let Ok=0;
    var ColMan = NumRandom();
    var CelMan = NumRandom();
    for (var i = 0; i < Viborita.length; i++) {
      if (Viborita[i][0] == ColMan && Viborita[i][1]==CelMan) {
        GenerarPosMan= true;
        console.log("Acabas de evitar que caiga sobre la vibora");
      }else {
        Ok++;
      }
    }
    if (Ok==Viborita.length) {
      GenerarPosMan=false;
    }
  } while (GenerarPosMan==true);
  let manzana = terreno[ColMan].children[CelMan];
  manzana.classList.add("manzana");
}

///
function DiujarViborita(){
  for (var i = 0; i < Viborita.length; i++) {
    var PoscicionNueVibora = terreno[Viborita[i][0]].children[Viborita[i][1]];
    PoscicionNueVibora.classList.add("Viborita");
  }
}
///
function DestruirExViborita() {
  //Destruye la serpiente abterior
  for (var i = 0; i < Viborita.length; i++) {
    var PoscicionVieVibora = terreno[Viborita[i][0]].children[Viborita[i][1]];
    PoscicionVieVibora.classList.remove("Viborita");
  }
}

//Coleccion del terreno
var terreno = document.getElementsByClassName("terreno")[0].children;

//Valor Inicial de la vibora
var Puntaje=0;
var Velocidad=1000;
var Viborita=[[4,4]];
var Sentido;
document.addEventListener("keydown",direccion);
function direccion(event){
    let key = event.keyCode;
    if( key == 37 && Sentido != "Derecha"){
        Sentido = "Izquierda";
    }else if(key == 38 && Sentido != "Abajo"){
        Sentido = "Arriba";
    }else if(key == 39 && Sentido != "Izquierda"){
        Sentido = "Derecha";
    }else if(key == 40 && Sentido != "Arriba"){
        Sentido = "Abajo";
    }
}
/////////////////////////////__Juego__//////////////////////////////////
  var Juego = setInterval(()=>{
  DestruirExViborita()

  //Variables para recalcular la nueva cabeza
  var AntCabezaCol = Viborita[0][0]
  var AntCabezaCel = Viborita[0][1]
  var NuevaCabeza = new Array;
  var CabezaCol;
  var CabezaCel;

  //Detecta las flechas
  if (Sentido=="Abajo") {
    if (Viborita[0][1]==9) {
      CabezaCel=0;
    }else {
      CabezaCel=Viborita[0][1]+1;
    }
    CabezaCol=Viborita[0][0]
  }else if (Sentido=="Arriba") {
    if (Viborita[0][1]==0) {
      CabezaCel=9;
    }
    else {
      CabezaCel=Viborita[0][1]-1;
    }
    CabezaCol=Viborita[0][0]
  }else if (Sentido=="Derecha") {
    if (Viborita[0][0]==9) {
      CabezaCol=0;
    }else {
      CabezaCol=Viborita[0][0]+1;
    }
    CabezaCel=Viborita[0][1]
  }else if (Sentido=="Izquierda") {
    if (Viborita[0][0]==0) {
      CabezaCol=9;
    }else {
      CabezaCol=Viborita[0][0]-1;
    }
    CabezaCel=Viborita[0][1]
  }else {
    CabezaCol=Viborita[0][0]
    CabezaCel=Viborita[0][1]
  }
  NuevaCabeza=[CabezaCol,CabezaCel];
  Viborita.unshift(NuevaCabeza)
  //Si la cabeza esta sobre la manzana
  if (terreno[Viborita[0][0]].children[Viborita[0][1]].classList.contains("manzana", "celda")) {
    console.log("Yesssssssss!!!!!!");
    terreno[Viborita[0][0]].children[Viborita[0][1]].classList.remove("manzana")
    ManzanaExist=false
    Puntaje++;
    document.getElementById("Puntuacion").innerHTML = "Puntaje: "+Puntaje;
  }else {
    Viborita.pop()
  }
  //Comprueba si hubo choque de la viborita
  for (var i = 2; i < Viborita.length; i++) {
    if (CabezaCol==Viborita[i][0] && CabezaCel==Viborita[i][1]) {
      alert("Has muerto carnal FFFFFFFFFFFFF");
      alert("Tu puntaje es de: "+Puntaje+" manzanitas");
      alert("Haz click en Aceptar para comenzar una nueva partida");
      window.clearInterval(Juego);
      window.location.reload();
    }
  }
    DiujarViborita()
}, 100);
//////////////////////////__Manzanas__///////////////////////////////
//Crea La Primera Manzana
var ManzanaExist;
window.setTimeout(()=>{
  GenManzana();
  ManzanaExist=true
  console.log("Primera Manzana generada");
}, 1000*1);
//Crea una manzana cada 30 segundos
setInterval(()=>{
  if (ManzanaExist==false) {
      GenManzana();
      ManzanaExist=true;
  }else {
    console.log("Hay Manzana Existente");
  }
}, 1000*3);
