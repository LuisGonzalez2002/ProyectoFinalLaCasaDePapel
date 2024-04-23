document.addEventListener('DOMContentLoaded', function () {
    const listaPersonajes = document.getElementById('listaPersonajes');
    const opcionInput = document.getElementById('opcion');
    const botonComprobar = document.getElementById('botonComprobar');
    const resultado = document.getElementById('resultado');
    const numeroPelicula = document.getElementById('numeroPelicula');

    // Definir los personajes para cada número de película, en el caso de 0 es para mostrar todos los personajes
    const personajesPorPelicula = {
        0: ['Tokyo', 'Berlin', 'Rio', 'Nairobi', 'Denver', 'Moscu', 'Helsinki', 'Estocolmo', 'Profesor', 'Oslo','Lisboa','Bogota', 'Marseille', 'Palermo'],
        1: ['Tokyo', 'Berlin', 'Rio', 'Nairobi', 'Denver', 'Moscu', 'Helsinki', 'Oslo', 'Profesor'],
        2: ['Tokyo', 'Berlin', 'Rio', 'Nairobi', 'Denver', 'Moscu', 'Helsinki', 'Oslo', 'Profesor'],
        3: ['Tokyo', 'Berlin', 'Rio', 'Nairobi', 'Denver', 'Helsinki', 'Profesor','Bogota', 'Marseille', 'Palermo'],
        4: ['Tokyo', 'Berlin', 'Rio', 'Nairobi', 'Denver', 'Helsinki', 'Profesor','Bogota', 'Marseille', 'Palermo'],
        5: ['Tokyo', 'Berlin', 'Rio', 'Denver', 'Helsinki', 'Profesor','Bogota', 'Marseille', 'Palermo']
    };

    // Generar un número de película aleatorio entre 1 y 5
    const numeroAleatorio = Math.floor(Math.random() * 5) + 1;
    numeroPelicula.textContent = numeroAleatorio;

    // Generar la lista de personajes que se hace desde la posición 0 que ha sido creada
    // a propósito para poder mostrar todos los personajes
    personajesPorPelicula[0].forEach(personaje => {
        const listItem = document.createElement('li');
        listItem.textContent = personaje;
        listaPersonajes.appendChild(listItem);
    });

    // Comprobar la opción ingresada por el usuario si se le da click, si acierta se mostrára un mensaje de acierto
    // de lo contrario se mostrará un mensaje de fallo
    botonComprobar.addEventListener('click', function () {
        const opcion = opcionInput.value;
        if (personajesPorPelicula[numeroAleatorio].includes(opcion)) {
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Acertaste!",
                showConfirmButton: false,
                timer: 1500
            });
        } else {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "El personaje no aparece en la serie " + numeroAleatorio + "!",
                showConfirmButton: false,
                footer: '<a href="juego.html">Volver a jugar</a>'
            });
        }
    });
});
