const botones = document.querySelectorAll(".boton-contar");
const numero = document.getElementById("numero");
console.log(numero);

const calcular = (e) => {
  const cantidad = e.target.getAttribute("data-cantidad");
  const op = e.target.getAttribute("data-op");

  if (op === "+") {
    numero.value = parseInt(numero.value) + parseInt(cantidad);
  } else {
    numero.value = parseInt(numero.value) - parseInt(cantidad);
  }
};

for (let i = 0; i < botones.length; i++) {
  botones[i].addEventListener("click", calcular);
}
