<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="css/bootstrap.min.css">
        <link rel="stylesheet" href="css/bootstrap-grid.min.css">
        <link rel="stylesheet" href="css/style.css">
        <link rel="stylesheet" href="css/plateau.css">
        <title>Projet Siam</title>
    </head>
    <body>

        <div class="d-flex justify-content-center mt-5">
            <img class="align-content-center" src="images/logo_sia.gif" alt="">
        </div>

        <div class="container-fluid text-center d-flex">
            <div>
                Joueur 1
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
                Joueur 2
                <div id="div-joueur2">
                </div>
            </div>
        </div>

        <div class="container pt-5">
            <div class="d-flex justify-content-center">
                <a role="button" id="bouton_placer_pion">Placer pion</a>
                <a role="button" id="bouton_tourner_pion">Tourner pion</a>
                <a role="button" id="bouton_enlever_pion">Enlever pion</a>
                <a role="button" id="bouton_pousser_pion">Pousser pion</a>
                <a href="index.php" role="button">Quitter</a>
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
    <script src="js/main.js"></script>
    <script>
        <?php session_start(); ?>;
        var session = <?php echo json_encode($_SESSION); ?>;
        initLayout(session);
    </script>
</html>
