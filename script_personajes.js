window.onload = function () {


// Obtener la referencia a la imagen1
    const imagen1 = document.getElementById('personaje1');

// Definir el nombre del personaje asociado a la imagen
    const nombrePersonaje = "El Profesor";

// Función para mostrar el nombre del personaje
    function mostrarNombrePersonaje() {
        Swal.fire({
            title: "El personaje seleccionado es " + nombrePersonaje,
            imageUrl: "elprofesorAviso.jpeg",
            imageWidth: 400,
            imageHeight: 200,
        });
    }


// Agregar un evento para mostrar el nombre del personaje al hacer clic en la imagen
    imagen1.addEventListener('mouseover', mostrarNombrePersonaje);

// Obtener la referencia a la imagen2
    const imagen2 = document.getElementById('personaje2');

// Definir el nombre del personaje asociado a la imagen
    const nombrePersonaje2 = "Rio";

// Agregar un evento para mostrar el nombre del personaje al hacer clic en la imagen
    imagen2.addEventListener('mouseover', function () {
        // Mostrar el nombre del personaje al hacer clic en la imagen
        Swal.fire({
            title: "El personaje seleccionado es " + nombrePersonaje2,
            imageUrl: "rioAviso.jpg",
            imageWidth: 400,
            imageHeight: 200,
        });
    });

    const imagen3 = document.getElementById('personaje3');
    const nombrePersonaje3 = "Lisboa";
    imagen3.addEventListener('mouseover', function () {
        Swal.fire({
            title: "El personaje seleccionado es " + nombrePersonaje3,
            imageUrl: "LisboaAviso.jpg",
            imageWidth: 400,
            imageHeight: 200,
        });
    });

}