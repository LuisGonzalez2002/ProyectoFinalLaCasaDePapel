window.onload = function () {

// Obtener la referencia a la monumento1
    const temporada1 = document.getElementById('temporada1');

// Definir el nombre del personaje asociado a la imagen
    const numeroTemporada = "Primera Temporada";

// Función para mostrar el nombre del personaje
    function mostrarNumeroTemporada() {
        let timerInterval;
        Swal.fire({
            title: "La temporada seleccionada es la " + numeroTemporada,
            html: "Se cerrará en <b></b> milisegundos.",
            timer: 2000,
            timerProgressBar: true,
            didOpen: () => {
                Swal.showLoading();
                const timer = Swal.getPopup().querySelector("b");
                timerInterval = setInterval(() => {
                    timer.textContent = `${Swal.getTimerLeft()}`;
                }, 100);
            },
            willClose: () => {
                clearInterval(timerInterval);
            }
        }).then((result) => {
            /* Read more about handling dismissals below */
            if (result.dismiss === Swal.DismissReason.timer) {
                console.log("I was closed by the timer");
            }
        });
    }


// Agregar un evento para mostrar el nombre del personaje al hacer clic en la imagen
    temporada1.addEventListener('click', mostrarNumeroTemporada);

// Obtener la referencia a la monumento1
    const temporada2 = document.getElementById('temporada2');

// Definir el nombre del personaje asociado a la imagen
    const numeroTemporada2 = "Segunda Temporada";

// Función para mostrar el nombre del personaje
    function mostrarNumeroTemporada2() {
        Swal.fire({
            title: "La temporada seleccionada es la " + numeroTemporada2,
            html: "Se cerrará en <b></b> milisegundos.",
            timer: 2000,
            timerProgressBar: true,
            didOpen: () => {
                Swal.showLoading();
                const timer = Swal.getPopup().querySelector("b");
                timerInterval = setInterval(() => {
                    timer.textContent = `${Swal.getTimerLeft()}`;
                }, 100);
            },
            willClose: () => {
                clearInterval(timerInterval);
            }
        }).then((result) => {
            /* Read more about handling dismissals below */
            if (result.dismiss === Swal.DismissReason.timer) {
                console.log("I was closed by the timer");
            }
        });
    }


// Agregar un evento para mostrar el nombre del personaje al hacer clic en la imagen
    temporada2.addEventListener('click', mostrarNumeroTemporada2);

// Obtener la referencia a la temporada3
    const temporada3 = document.getElementById('temporada3');

// Definir el nombre del personaje asociado a la imagen
    const numeroTemporada3 = "Tercera Temporada";

// Función para mostrar el nombre del personaje
    function mostrarNumeroTemporada3() {
        Swal.fire({
            title: "La temporada seleccionada es la " + numeroTemporada3,
            html: "Se cerrará en <b></b> milisegundos.",
            timer: 2000,
            timerProgressBar: true,
            didOpen: () => {
                Swal.showLoading();
                const timer = Swal.getPopup().querySelector("b");
                timerInterval = setInterval(() => {
                    timer.textContent = `${Swal.getTimerLeft()}`;
                }, 100);
            },
            willClose: () => {
                clearInterval(timerInterval);
            }
        }).then((result) => {
            /* Read more about handling dismissals below */
            if (result.dismiss === Swal.DismissReason.timer) {
                console.log("I was closed by the timer");
            }
        });    }

// Agregar un evento para mostrar el nombre del personaje al hacer clic en la imagen
    temporada3.addEventListener('click', mostrarNumeroTemporada3);


// Obtener la referencia a la temporada4
    const temporada4 = document.getElementById('temporada4');

// Definir el nombre del personaje asociado a la imagen
    const numeroTemporada4 = "Cuarta Temporada";

// Función para mostrar el nombre del personaje

    function mostrarNumeroTemporada4() {
        Swal.fire({
            title: "La temporada seleccionada es la " + numeroTemporada4,
            html: "Se cerrará en <b></b> milisegundos.",
            timer: 2000,
            timerProgressBar: true,
            didOpen: () => {
                Swal.showLoading();
                const timer = Swal.getPopup().querySelector("b");
                timerInterval = setInterval(() => {
                    timer.textContent = `${Swal.getTimerLeft()}`;
                }, 100);
            },
            willClose: () => {
                clearInterval(timerInterval);
            }
        }).then((result) => {
            /* Read more about handling dismissals below */
            if (result.dismiss === Swal.DismissReason.timer) {
                console.log("I was closed by the timer");
            }
        });    }

    temporada4.addEventListener('click', mostrarNumeroTemporada4);

    // Obtener la referencia a la temporada5
    const temporada5 = document.getElementById('temporada5');

// Definir el nombre del personaje asociado a la imagen
    const numeroTemporada5 = "Quinta Temporada";

// Función para mostrar el nombre del personaje
    function mostrarNumeroTemporada5() {
        Swal.fire({
            title: "La temporada seleccionada es la " + numeroTemporada5,
            html: "Se cerrará en <b></b> milisegundos.",
            timer: 2000,
            timerProgressBar: true,
            didOpen: () => {
                Swal.showLoading();
                const timer = Swal.getPopup().querySelector("b");
                timerInterval = setInterval(() => {
                    timer.textContent = `${Swal.getTimerLeft()}`;
                }, 100);
            },
            willClose: () => {
                clearInterval(timerInterval);
            }
        }).then((result) => {
            /* Read more about handling dismissals below */
            if (result.dismiss === Swal.DismissReason.timer) {
                console.log("I was closed by the timer");
            }
        });    }


// Agregar un evento para mostrar el nombre del personaje al hacer clic en la imagen
    temporada5.addEventListener('click', mostrarNumeroTemporada5);


}