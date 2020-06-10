// Se declaran las variables al inicio de cada atributo a añadir
// Según sea el caso se le añaden "sub-atributos" a los atributos

let divisor = document.createElement("div");

//h1
let titGrande = document.createElement("h1");
let hipr = document.createElement("a");
hipr.setAttribute("href", "#");
hipr.innerText = ("Soy el más grande...");
titGrande.appendChild(hipr);

//h2
let titMed = document.createElement("h2");
titMed.innerText = "Curso Web 2020";

//h3
let titMedd = document.createElement("h3");
let hiprR = document.createElement("a");
hiprR.setAttribute("href", "#2");
hiprR.innerText = ("Mediano");
titMedd.appendChild(hiprR);

//h4
let titChiG = document.createElement("h4");
titChiG.innerText = "Jelou";

//h5
let titChi = document.createElement("h5");
titChi.innerText = "Estoy medio chiquito";

// Se afregan al contenedor que pertenenecen para despues imprimirlos 
divisor.prepend(titGrande, titMed, titMedd, titChiG, titChi);
let body = document.getElementsByTagName("body");
body[0].appendChild(divisor);
