$(document).ready(function () {
    var $cursor = $('#cursor');

    document.addEventListener('mousemove', function (e) {
        var x = e.clientX;
        var y = e.clientY;

        $cursor.css({ "left": x + "px", "top": y + "px" });
    });
});