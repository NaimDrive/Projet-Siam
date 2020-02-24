function initLayout(session) {
    $(document).ready(function () {

        if(Array.isArray(session) && session.length == 0) {
            console.log("Est vide !");
            
            $.get("/layout/header_unlogged.html",
                function(response) {
                    $("body").prepend(response);
                }
            
                );
        } else {
            console.log("En ligne !");
            
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

        /*$.ajax({
            type: "POST",
            url: "/ajax/test.ajax.php",
            // data: "data",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
        }).always(function(response) {
            console.log("rep : " + response);
        });*/
    });
}