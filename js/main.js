

/**
 * Actualise les composants du plateau.
 */
function refresh() {
  plateau.actualiserAffichage(joueur1, joueur2);
}

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
      // console.log("ajax done !");
      // console.log("Result :");
      response = JSON.parse(response)
      // console.log(response);
      partieFromJSON(response["data"]);
      animauxFromJSON(partie["joueur1"], joueur1);
      animauxFromJSON(partie["joueur2"], joueur2);
      tableauFromJSON(partie["plateau"]);
      joueurCourant = (response["joueurCourant"] == "1" ? joueur1 : joueur2);
      console.log(response);
  });
}

function savePartie() {
  partie.save();
}

/**
 * Initialise les objets du jeux.
 */
function initGame() {
    getPartie();
    
    refresh();

    // joueurCourant = joueur2;
    
    initPlateauListener();
    initButtonListener();
    initPlayerImagesListener(joueur1);
    initPlayerImagesListener(joueur2);
    if(joueur2.getUsername() == null && joueur2.getUsername() != session["username"]) {
      joueur2.setUsername(session["username"]);
    }
    // console.log(session);
    // partie = new Partie(plateau, joueur1, joueur2);
}

initGame();
partie.save();
