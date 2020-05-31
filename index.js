document.addEventListener("DOMContentLoaded", function (event) {
    var lastId,
        topMenu = $("#menu"),
        topMenuHeight = topMenu.outerHeight(),
        // All list items
        menuItems = topMenu.find(".o-boton-lateral"),
        // Anchors corresponding to menu items
        scrollItems = menuItems.map(function () {
            var item = $($(this).attr("href"));
            if (item.length) { return item; }
        });

    var elementEdad = document.getElementById("edad");

    var timestampNacimiento = 905990400 * 1000; //17/09/1998 00:00

    var edadAnios = calcularEdad(timestampNacimiento);

    elementEdad.textContent = edadAnios;


    menuItems.click(function (e) {
        var href = $(this).attr("href"),
            offsetTop = href === "#inicio" ? 0 : $(href).offset().top;
        $('html, body').stop().animate({
            scrollTop: offsetTop
        }, 300);
        e.preventDefault();
    });

    function calcularEdad(timestampNacimiento) {
        var timestampActual = new Date().getTime();
        return Math.floor(((timestampActual - timestampNacimiento) / (1000 * 60 * 60 * 24 * 365)))
    }

    $(window).scroll(function () {
        // Get container scroll position
        var fromTop = $(this).scrollTop() + topMenuHeight;

        // Get id of current scroll item
        var cur = scrollItems.map(function () {
            if ($(this).offset().top < fromTop)
                return this;
        });
        // Get the id of the current element
        cur = cur[cur.length - 1];
        var id = cur && cur.length ? cur[0].id : "";

        if (lastId !== id) {
            lastId = id;
            // Set/remove active class
            menuItems
                .removeClass("active")
                .filter("[href='#" + id + "']").addClass("active");
        }
    });
});