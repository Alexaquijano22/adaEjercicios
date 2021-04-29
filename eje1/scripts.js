//

const cancion = document.querySelector("#lista-canciones");

const cancion1 = prompt("Ingresa cancion  1")

const cancion2 = prompt("Ingresa cancion  2")

const cancion3 = prompt("Ingresa cancion 3 ")

const cancion4 = prompt("Ingresa cancion 4 ")

const cancion5 = prompt("Ingresa cancion 5 ")

cancion.innerHTML = `<ul id="lista-canciones">
<li >${cancion1}</li>
<li >${cancion2}</li>
<li >${cancion3}</li>
<li >${cancion4}</li>
<li >${cancion5}</li>
</ul>`