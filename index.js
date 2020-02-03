document.addEventListener("DOMContentLoaded", function (event) {
    var elementEdad = document.getElementById("edad");

    var timestampNacimiento = 905990400 * 1000; //17/09/1998 00:00

    var edadAnios = calcularEdad(timestampNacimiento);

    elementEdad.textContent = edadAnios;
});

function calcularEdad(timestampNacimiento) {
    var timestampActual = new Date().getTime();
    return Math.floor(((timestampActual - timestampNacimiento) / (1000 * 60 * 60 * 24 * 365)))
}