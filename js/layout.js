function initLayout(session) {
    $(document).ready(function () {
        console.log(session);
        if(Array.isArray(session) && session.length == 0 || session == null) {
            
            $.get("/layout/header_unlogged.html",
                function(response) {
                    $("body").prepend(response);
                }
            
                );
        } else {
            
            $.get("/layout/header_logged.html",
                function(response) {
                    $("body").prepend(response);
                    $("#current_user").text(session["username"]);
                    console.log(session["username"]);
                }
            );

        }
        

        $.get("/layout/footer.html",
            function(response) {
                $("body>div:last").after().append(response);
                $("#footer").insertAfter("body>div:last");
            }
        );
    });
}