function initLayout(session) {
    console.log("initLayout");
    $(document).ready(function () {
        
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
                    // console.log(session);

                    $("[data-toggle='popover']").popover();

                    if(session["admin"] == true) {
                        $("#user_status").addClass("admin_status");
                        $(".admin_status").attr('data-content', "Administrateur");
                    } else {
                        $("#user_status").addClass("basic_status");
                        $(".basic_status").attr('data-content', "Utilisateur");
                    }
                    

                    $(".admin_status , .basic_status").hover(function() {
                        $(this).click();
                    }, function() {
                        $(this).click();
                    });
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

$.ajax({
    method: "POST",
    url: "ajax/users.ajax.php?act=Whoami",
    type: "POST",
    dataTyp1e: 'json'
}).done(function(response) {
    let session = JSON.parse(response); 
    initLayout(session);
    
});