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
        <link rel="stylesheet" href="css/plateau.css">

        <link rel="icon" href="/images/logo_header_green.png">

        <title>Projet Siam</title>
    </head>
    <body>
        <input type="hidden" style="display: none;" id="game_id" name="game_id" value="<?php echo $_POST["game_selected"]; ?>">
        <div class="d-flex justify-content-center mt-4">
            <div class="h4 lobby_title"></div>
        </div>
        <div class="d-flex justify-content-center tour_joueur mb-2">
        Au tour de... &nbsp;<div id="tour_joueur">admin</div>
        </div>

        <div id="game_area" class="container-fluid text-center d-flex">
            <div>
                <span class="J1">
                    Joueur 1
                </span>
                <div id="div-joueur1">
                </div>
            </div>
            <div class="container" id="div-tableau">
                <div class="row">
                    <div class="col border" id="case_0_0"></div>
                    <div class="col border" id="case_0_1" ></div>
                    <div class="col border" id="case_0_2"></div>
                    <div class="col border" id="case_0_3"></div>
                    <div class="col border" id="case_0_4"></div>
                </div>
                <div class="row">
                    <div class="col border" id="case_1_0"></div>
                    <div class="col border" id="case_1_1"></div>
                    <div class="col border" id="case_1_2"></div>
                    <div class="col border" id="case_1_3"></div>
                    <div class="col border" id="case_1_4"></div>
                </div>
                <div class="row">
                    <div class="col border" id="case_2_0"></div>
                    <div class="col border" id="case_2_1"></div>
                    <div class="col border" id="case_2_2"></div>
                    <div class="col border" id="case_2_3"></div>
                    <div class="col border" id="case_2_4"></div>
                </div>
                <div class="row">
                    <div class="col border" id="case_3_0"></div>
                    <div class="col border" id="case_3_1"></div>
                    <div class="col border" id="case_3_2"></div>
                    <div class="col border" id="case_3_3"></div>
                    <div class="col border" id="case_3_4"></div>
                </div>
                <div class="row">
                    <div class="col border" id="case_4_0"></div>
                    <div class="col border" id="case_4_1"></div>
                    <div class="col border" id="case_4_2"></div>
                    <div class="col border" id="case_4_3"></div>
                    <div class="col border" id="case_4_4"></div>
                </div>
            </div>
            <div>
                <span class="J2">
                    Joueur 2
                </span>
                <div id="div-joueur2">
                </div>
            </div>
        </div>

        <div class="container p-3">
            <div class="d-flex justify-content-center btn-group">
                <button class="btn btn-dark" id="bouton_placer_pion">Déplacer/Placer pion</button>
                <button class="btn btn-dark" id="bouton_tourner_pion">Tourner pion</button>
                <button class="btn btn-dark" id="bouton_enlever_pion">Enlever pion</button>
                <button class="btn btn-dark" id="bouton_pousser_pion">Pousser pion</button>
                <a class="btn btn-dark" href="lobby.html">Quitter</a>
            </div>
        </div>

    </body>
    <script src="js/jquery3.4.1.js"></script>
    <script src="js/layout.js"></script>
    <script src="js/Enumerations.js"></script>
    <script src="js/Images.js"></script>
    <script src="js/Pion.js"></script>
    <script src="js/Animaux.js"></script>
    <script src="js/Rocher.js"></script>
    <script src="js/NullObject.js"></script>
    <script src="js/Player.js"></script>
    <script src="js/Plateau.js"></script>
    <script src="js/listeners.js"></script>
    <script src="js/Partie.js"></script>
    <script src="js/convertFromJson.js"></script>
    <script src="js/init.js"></script>
    <script src="js/main.js"></script>
    
</html>
