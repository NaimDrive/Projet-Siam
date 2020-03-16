<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="css/bootstrap.min.css">
        <link rel="stylesheet" href="css/bootstrap-grid.min.css">
        <link rel="stylesheet" href="css/style.css">

        <link rel="icon" href="/images/logo_header_green.png">

        <title>Lobby</title>
    </head>
    <body>
        
        <div class="container mt-5">
            <select name="game_selected" id="game_selected" class="custom-select" size="5">
                <option value="" selected>Nombre de parties disponibles admettons</option>
                <option value="">Partie 1</option>
                <option value="">Partie 2</option>
                <option value="">Partie 3</option>
                <option value="">Partie 4</option>
            </select>
        </div>
        <div class="d-flex justify-content-center m-5 w-90">

            <div class="w-50">
                <button type="button" class="btn btn-dark btn-lg btn-block">Jouer !</button>
            </div>

        </div>

    </body>
</html>
<script src="js/jquery3.4.1.js"></script>
<script src="js/bootstrap.min.js"></script>
<script src="js/layout.js"></script>
<script>
    <?php session_start(); ?>;
    var session = <?php echo json_encode($_SESSION); ?>;
    initLayout(session);
</script>