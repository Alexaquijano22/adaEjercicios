// Crear un documento html con una adivinanza (o una pregunta) y
// 3 botones con posibles respuestas. Si se clickea la respuesta correcta,
// se debe mostrar en el documento un texto que lo indique
// (por ejemplo: ¡Correcto!) debajo de la adivinanza, y el botón
// seleccionado debe ponerse con un color de fondo verde.
// Si se clickea una respuesta incorrecta, se debe mostrar
// en el documento un texto que lo indique (por ejemplo:
// ¡Le erraste!) y mostrar el botón con la respuesta correcta
// con un color de fondo verde y los otros dos con un color
// de fondo rojo.

const opcionesF = document.querySelectorAll("#opcion-f");
const opcionV = document.getElementById("opcion-v");
const correcto = document.getElementById("correcto");
const incorrecto = document.getElementById("incorrecto");

const evaluar = (e) => {
    const opcion = e.target.getAttribute("data-opcion")
    if(opcion === "true"){
       opcionV.style.backgroundColor = "green"
       opcionV.style.color = "white"
       correcto.innerText = "¡Correcto!"
       incorrecto.innerText = ""
    }else{
        for(let i = 0; i<opcionesF.length;i++){
            opcionesF[i].style.backgroundColor = "red"
            opcionesF[i].style.color = "white"
            opcionV.style.backgroundColor = "green"
            opcionV.style.color = "white"
    
        }
        incorrecto.innerText = "¡Le erraste!"
        correcto.innerText = ""
    }
}

opcionV.addEventListener("click", evaluar)

for (let i = 0; i < opcionesF.length; i++) {
  opcionesF[i].addEventListener("click", evaluar)

}
