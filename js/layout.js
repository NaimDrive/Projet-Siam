$(document).ready(function () {
    $.get("/layout/header.html",
        function(response) {
            $("body").prepend(response);
        }
    );

    $.get("/layout/footer.html",
        function(response) {
            $("body").append(response);
        }
    );
});