$(document).ready(function () {
    $.get("/layout/header.html",
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