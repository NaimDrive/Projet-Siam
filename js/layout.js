function initLayout(session) {
    $(document).ready(function () {

        if(Array.isArray(session) && session.length == 0) {
            
            $.get("/layout/header_unlogged.html",
                function(response) {
                    $("body").prepend(response);
                }
            
                );
        } else {
            
            $.get("/layout/header_logged.html",
                function(response) {
                    $("body").prepend(response);
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