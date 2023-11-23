// ejercicios 3

// Obtén la referencia a la imagen por su ID
var miImagen = document.getElementById("miImagen");

// Agrega un evento clic a la imagen
miImagen.addEventListener("click", function () {
  // Toggle (agregar o quitar) la clase 'borde-activo'
  //Activa o desactiva una clase.
  this.classList.toggle("borde-activo");
});

//ejercicio 2
function BtnVerificar() {
  const stiker1 = parseInt(document.querySelector("#stiker1").value) || 0;
  const stiker2 = parseInt(document.querySelector("#stiker2").value) || 0;
  const stiker3 = parseInt(document.querySelector("#stiker3").value) || 0;

  let cantidad = stiker1 + stiker2 + stiker3;

  if (cantidad <= 10) {
    var msg = `Llevas ${cantidad} stickers 💐`;

    document.getElementById("texto").innerHTML = msg;
  } else {
    var msg = ` !Llevas demasiados stickers! 🙀 `;

    document.getElementById("texto").innerHTML = msg;
  }
  if (cantidad == 0) {
    var msg = `Llevas ${cantidad} stickers 🥲, llévate aunque sea uno soló 😕`;

    document.getElementById("texto").innerHTML = msg;
  }
}
//funcion para limpiar lo input
function resetInputs() {
  // Obtiene todos los campos de entrada por su nombre de clase
  var inputs = document.querySelectorAll('input[type="text"]');

  // Itera sobre los campos de entrada y límpialos
  inputs.forEach(function (input) {
    input.value = "";
  });
}
