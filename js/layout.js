$(document).ready(function () {
    $.get("/layout/header_unlogged.html",
        function(response) {
            $("body").prepend(response);
        }
    );

    $.get("/layout/footer.html",
        function(response) {
            $("body>div:last").after().append(response);
            $("#footer").insertAfter("body>div:last");
        }
    );
});