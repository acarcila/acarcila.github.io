$(document).ready(function () {
    var $edad = $('#edad');

    var timestampNacimiento = 905990400 *1000; //17/09/1998 00:00

    var edadAnios = calcularEdad(timestampNacimiento);

    $edad.text(edadAnios);
});

function calcularEdad(timestampNacimiento){
    var timestampActual = new Date().getTime();
    return Math.floor(((timestampActual - timestampNacimiento)  / (1000 * 60 * 60 * 24 * 365)))
}

// $(document).ready(function () {
//     var $cursor = $('#cursor');

//     document.addEventListener('mousemove', function (e) {
//         var x = e.clientX;
//         var y = e.clientY;

//         $cursor.css({ "left": x + "px", "top": y + "px" });
//     });
// });

