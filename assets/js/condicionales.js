// Obtén la referencia a la imagen por su ID
var miImagen = document.getElementById("miImagen");

// Agrega un evento clic a la imagen
miImagen.addEventListener("click", function () {
  // Toggle (agregar o quitar) la clase 'borde-activo'
  //Activa o desactiva una clase.
  this.classList.toggle("borde-activo");
});

const letra1 = document.querySelector("#letra1").value;
const letra2 = document.querySelector("#letra2").value;
const letra3 = document.querySelector("#letra3").value;

function consultar() {
  let btn = document.getElementById("consultar");

  if (btn.classList.contains("bg-red")) {
    btn.classList.remove("bg-red");
  } else {
    btn.classList.add("bg-red");
  }

  // const letras = letra1 + letra2;
  let clave_correcta =
    letra1 == "a" && letra2 == "b" && letra3 == "c"
      ? letra1 + letra2 + letra3
      : false;
  // let claveCorrecta;

  if (!clave_correcta) {
    // var msg = 'La clave es correcta: ' + letras;
    var msg = `La clave es correcta: ${letra1} ${letra2} 🎉🎉🎉 ....., pero en tus sueños`;

    document.getElementById("texto").innerText = msg;
  } else if (letra1 == "a" && letra2 == "e" && letra3 == "i") {
    // var msg = 'La clave es correcta: ' + letras;
    var msg = `La clave esta bien: ${letra1} ${letra2} 🤣🤣🤣`;

    document.getElementById("texto").innerText = msg;
  } else {
    var msg = "La clave es Incorrecta 😅";
    // var msg = `La clave es correcta ${letras}` ;

    document.getElementById("texto").innerText = msg;
  }
}
