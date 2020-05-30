document.addEventListener("DOMContentLoaded", function (event) {
    var elementEdad = document.getElementById("edad");

    var timestampNacimiento = 905990400 * 1000; //17/09/1998 00:00

    var edadAnios = calcularEdad(timestampNacimiento);

    elementEdad.textContent = edadAnios;
});

calcularEdad = (timestampNacimiento) => {
    var timestampActual = new Date().getTime();
    return Math.floor(((timestampActual - timestampNacimiento) / (1000 * 60 * 60 * 24 * 365)))
}

goToSection = (sectionID, boton) => {
    var arrElements = document.getElementsByClassName('o-boton-lateral');
    for (var i = 0; i < arrElements.length; i++) {
        arrElements[i].classList.remove("selected");
    }
    var botonID = boton.id;
    document.getElementById(sectionID).scrollIntoView();
    document.getElementById(botonID).classList.add("selected");
    console.log(document.activeElement);
}
