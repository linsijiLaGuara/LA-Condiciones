
// Obtén la referencia a la imagen por su ID
var miImagen = document.getElementById("miImagen");

// Agrega un evento clic a la imagen
miImagen.addEventListener("click", function() {
    // Toggle (agregar o quitar) la clase 'borde-activo'
    //Activa o desactiva una clase.
    this.classList.toggle("borde-activo");
});
