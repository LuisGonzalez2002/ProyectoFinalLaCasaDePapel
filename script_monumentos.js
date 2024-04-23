window.onload = function () {

// Obtener la referencia a la monumento1
    const monumento1 = document.getElementById('imagen1');

// Definir el nombre del personaje asociado a la imagen
    const nombreMonumento = "Banco de España";

// Función para mostrar el nombre del personaje
    function mostrarNombreMonumento() {
        Swal.fire("El monumento seleccionado es el " + nombreMonumento);
    }


// Agregar un evento para mostrar el nombre del personaje al hacer clic en la imagen
    monumento1.addEventListener('click', mostrarNombreMonumento);

// Obtener la referencia a la imagen2
    const imagen2 = document.getElementById('imagen2');

// Definir el nombre del personaje asociado a la imagen
    const nombreMonumento2 = "Fábrica Nacional de Moneda y Timbre";

// Agregar un evento para mostrar el nombre del personaje al hacer clic en la imagen
    imagen2.addEventListener('click', function () {
        // Mostrar el nombre del personaje al hacer clic en la imagen
        Swal.fire("El monumento seleccionado es la " + nombreMonumento2);
    });



}