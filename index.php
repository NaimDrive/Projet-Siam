<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="css/bootstrap.min.css">
        <link rel="stylesheet" href="css/bootstrap-grid.min.css">
        <link rel="stylesheet" href="css/typicons.css">
        <link rel="stylesheet" href="css/style.css">

        <link rel="icon" href="/images/logo_header_green.png">

        <title>Projet Siam</title>
    </head>
    <body>
        <div class="d-flex justify-content-center mt-5">
            <img class="align-content-center" src="images/logo_sia.gif" alt="">
        </div>

        <div class="container pt-5">
            <div class="d-flex justify-content-center">
                <!-- <a href="game.php" role="button" class="btn btn-dark m-3">Jouer</a> -->
                <a href="regles.html" role="button" class="btn btn-info m-3">Règles du jeu</a>
            </div>
            <div class="d-flex justify-content-center ">
                <button id="exemple" class="btn btn-success m-3">Exemple d'Ajax</button>
                <a id="test_lobby" class="btn btn-warning m-3" href="lobby.php" style="color: white"> Test lobby </a>
            </div>
            <div id="exemple_ajax" class="d-flex justify-content-center m-5">
                <table id="table_ajax" class="table table-dark">
                    <thead>
                        <tr style="text-align: center;">
                          <th id="user1" scope="col"></th>
                          <th id="user2" scope="col"></th>
                          <th id="user3" scope="col"></th>
                        </tr>
                      </thead>
                </table>
            </div>
        </div>
    </body>
</html>
<script src="js/jquery3.4.1.js"></script>
<script src="js/bootstrap.min.js"></script>
<script src="js/layout.js"></script>
<script>

    $(document).ready(function () {
        $("#exemple_ajax, #table_ajax").hide();
        $("#exemple").click(function() {
            $.ajax({
                type: "POST",
                url: "ajax/users.ajax.php?act=getUsers",
                contentType: 'application/json',
                cache: false,
                dataType: 'json',
                crossDomain: true
            }).done(function(response) {

                $("#exemple_ajax, #table_ajax").show();

                $("#user1").html(response[1]);
                $("#user2").html(response[2]);
                $("#user3").html(response[3]);

            });
        });
    });

</script>
