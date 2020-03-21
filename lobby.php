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

        <title>Salon</title>
    </head>
    <body>
        <!-- BUTTON CREER PARTIE -->
        <div class="container mt-5 ml-5">
            <button class="btn btn-success ml-5" data-toggle="modal" data-target="#modalPartie">
                <div class="typcn typcn-plus">&nbsp;<span class="lobby_title">Créer une partie</span></div>
            </button>
        </div>
        <!-- ^^^^^^^^^^^^^^^^^^ -->
        <!-- MODAL CREATION DE PARTIE -->
        <div class="modal fade" id="modalPartie" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Création d'une partie</h5>
                        <button type="button" id="closeCreerPartie" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <form id="creerPartieForm" method="post">
                        <div class="modal-body">
                            <label>Nom de la partie</label>
                            <div class="input-group">
                                <input type="text" name="nom" class="form-control" aria-label="Nom de la partie">
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Annuler</button>
                            <button type="submit" class="btn btn-primary">Créer !</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <!-- ^^^^^^^^^^^^^^^^^^ -->
        <form id="lobbyForm" action="game.php" method="post">
            <div class="container mt-3">
                <h3 class="mb-4 lobby_title">Parties disponibles</h3>
                <div class="d-flex justify-content-center">
                    <select name="game_selected" id="game_selected" class="custom-select w-75" size="5">
                        <!-- Insertion dynamique des parties -->
                    </select>
                </div>
            </div>
            <div class="d-flex justify-content-center m-5 w-90">
    
                <div class="w-50">
                    <button type="submit" id="lobbySubmit" class="btn btn-dark btn-lg btn-block">Jouer !</button>
                </div>
    
            </div>
        </form>
        
        <div> <!-- Permet l'insertion du footer -->  </div>

    </body>
</html>
<script src="js/jquery3.4.1.js"></script>
<script src="js/bootstrap.min.js"></script>
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
<script src="js/init.js"></script>
<script src="js/convertFromJson.js"></script>
<script src="js/lobby.js"></script>