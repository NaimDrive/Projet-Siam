/**
 * Actualise les composants du plateau.
 */
function refresh() {
  plateau.actualiserAffichage(joueur1, joueur2);
  // partie.actualiserTour(joueurCourant);
}

/**
 * Sauvegarde la progression de la partie
 */
function savePartie() {
  partie.save();
}

/**
 * Récupére les données nécessaire à la récupération de la partie
 */
function getPartie() {
  var values = {"game_selected" : $("#game_id").val()};
  $.ajax({
      method: "POST",
      url: "ajax/users.ajax.php?act=getPartie",
      data: values,
      type: "POST",
      dataTyp1e: 'json',
      async: false
  }).done(function(response) {
      response = JSON.parse(response)
      partieFromJSON(response["data"]);
      tableauFromJSON(partie["plateau"]);
      animauxFromJSON(partie["joueur1"], joueur1);
      animauxFromJSON(partie["joueur2"], joueur2);
      joueurCourant = (response["joueurCourant"] == "1" ? joueur1 : joueur2);
      $(".lobby_title").text(decodeURI(response["nom"]));
  });
}

/**
 * Initialise les objets du jeux.
 */
function initGame() {
    getPartie();
    
    refresh();
        
    initPlateauListener();
    initButtonListener();
    initPlayerImagesListener(joueur1);
    initPlayerImagesListener(joueur2);

    if(joueur2.getUsername() == null && joueur1.getUsername() != session["username"]) {
      joueur2.setUsername(session["username"]);
      joueur2.setUserID(session["id"]);
      savePartie();
    }
    
    partie.actualiserTour(joueurCourant);
}
if(session.length == 0) window.location.replace("index.php");
initGame();
