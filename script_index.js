
document.addEventListener("DOMContentLoaded", function() {
    // Si se le da click al boton se cambiará el textContent a "¡El atraco se realizó con éxito!"
    const botonInteractivo = document.getElementById("boton-interactivo");
    botonInteractivo.addEventListener("click", function() {
        botonInteractivo.textContent = "¡El atraco se realizó con éxito!";
    });

    // Si se pasa el mouse por encima del botón, el color de fondo cambiará a rojo
    botonInteractivo.addEventListener("mouseover", function() {
        botonInteractivo.style.backgroundColor = "#ff0000";
    });
    // Si se quita el mouse del botón, el color de fondo volverá a ser blanco
    botonInteractivo.addEventListener("mouseout", function() {
        botonInteractivo.style.backgroundColor = "#ffffff";
    });

    // Se mostrará un mensaje de bienvenida al cargar la página
    //alert("¡Bienvenido a La Casa de Papel!");
    Swal.fire({
        title: "Bienvenido!",
        text: "En esta página encontrarás información sobre La Casa de Papel",
        imageUrl: "bienvenido.jpg",
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: "Custom image"
    });
});
