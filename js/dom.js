const gatoCard = document.querySelector("#gato-card");
const gatoTitulo = document.querySelector("#gato-titulo");
const gatoDescripcion = document.querySelector("#gato-descripcion");
const listaHabilidades = document.querySelector("#lista-habilidades");
const botonAgregar = document.querySelector("#agregar-habilidad");
const botonModificar = document.querySelector("#modificar-gato");

const habilidades = [
    "Dormir",
    "Comer",
    "Caminar sobre el teclado",
    "Maullar",
    "Conquistar el mundo"
];

let siguienteHabilidad = 0;
let cardModificada = false;

botonAgregar.addEventListener("click", () => {
    const nuevaHabilidad = document.createElement("li");

    nuevaHabilidad.className = "list-group-item";
    nuevaHabilidad.textContent = habilidades[siguienteHabilidad];

    listaHabilidades.appendChild(nuevaHabilidad);

    siguienteHabilidad++;

    if (siguienteHabilidad === habilidades.length) {
        siguienteHabilidad = 0;
    }

    gatoDescripcion.textContent =
        `El gato tiene ${listaHabilidades.children.length} habilidades.`;
});

botonModificar.addEventListener("click", () => {
    cardModificada = !cardModificada;

    if (cardModificada) {
        gatoTitulo.textContent = "Michi senior developer";
        gatoDescripcion.textContent =
            "La card fue modificada utilizando JavaScript.";

        gatoCard.classList.add("border-warning", "border-4");
        botonModificar.textContent = "Restaurar card";
    } else {
        gatoTitulo.textContent = "Michi programador";
        gatoDescripcion.textContent =
            "Este gato modifica elementos del DOM.";

        gatoCard.classList.remove("border-warning", "border-4");
        botonModificar.textContent = "Modificar card";
    }
});