function initLayout(session) {
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

                    $("[data-toggle='popover']").popover({
                        trigger: "hover focus"
                    });

                    if(session["admin"] == true) {
                        $("#user_status").addClass("admin_status");
                        $(".admin_status").attr('data-content', "Administrateur");
                        $("#creerCompte").append('<button class="btn btn-outline-light mb-0 mr-2" id="inscription" data-toggle="modal" data-target="#inscriptionModal">Créer un compte</button>');
                    } else {
                        $("#user_status").addClass("basic_status");
                        $(".basic_status").attr('data-content', "Utilisateur");
                    }
                    
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
var session;

$.ajax({
    method: "POST",
    url: "ajax/users.ajax.php?act=Whoami",
    type: "POST",
    dataTyp1e: 'json', 
    async: false
}).done(function(response) {
    session = JSON.parse(response); 
    initLayout(session);
    
});