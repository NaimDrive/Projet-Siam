// Définition des variables globales
var partie;
var plateau; // Le plateau du jeu
var joueur1; // Le joueur 1
var joueur2; // Le joueur 2
var joueurCourant; // Le joueur qui est entrain de jouer
var rochers; // Le tableau de rocher
var caseCourante; // La dernière case sélectionnée par un joueur
var pionCourant; // Le dernier pion sélectionné par un joueur
var imageCourante; // Image sélectionnée par un joueur.

/**
 * Initialise les joueurs.
 */
function initJoueurs() {
    joueur1 = new Player(session["username"], ElementPlateau.ELEPHANT, 1);
    joueur2 = new Player(null, ElementPlateau.RHINOCEROS, 2);
}

/**
 * Initialise le tableau de rocher.
 */
function initRochers() {
    rochers = new Array();
    rochers.push(new Rocher(ElementPlateau.ROCHER));
    rochers.push(new Rocher(ElementPlateau.ROCHER));
    rochers.push(new Rocher(ElementPlateau.ROCHER));
}

/**
 * Initialise le plateau du jeu.
 */
function initPlateau() {
  plateau = new Plateau(5);
  plateau.placerPion(rochers[0], 2, 1);
  plateau.placerPion(rochers[1], 2, 2);
  plateau.placerPion(rochers[2], 2, 3);

  initPlateauListener();
}

/**
 * Initialise les déclencheurs de chaque case du plateau.
 */
function initPlateauListener() {
  for (let i = 0; i < plateau.TAILLE_PLATEAU; i++) {
    for (let j = 0; j < plateau.TAILLE_PLATEAU; j++) {
      $("#case_"+i+"_"+j).click(function(){
        if(caseCourante != null) {
          caseCourante.removeClass("caseSelected");
        }
        caseCourante = $(this);
        caseCourante.addClass("caseSelected");
        console.log($(this).attr('id'));
        let pos = $(this).attr('id').split('_');
        console.log(plateau.getPion(pos[1], pos[2]));
        if(plateau.getPion(pos[1], pos[2]).toString() != "NullObject") {
          pionCourant = plateau.getPion(pos[1], pos[2]);
        }
      });
    }
  }
}

/**
 * Créé un listener pour les boutons qui permettent de jouer.
 */
function initButtonListener() {
    placerPionListener();
    enleverPionListener();
    tournerPionListener();
    pousserPionListener();
}

/**
 * Créé un listener pour les images du joueur.
 */
function initPlayerImagesListener(joueur) {
  for (let i = 0; i < joueur.pions.length; i++) {
    console.log(joueur.pions[i]);

    $("#image_"+joueur.id+"_"+i).click(function(){
      if(pionCourant != null) {
        imageCourante.removeClass("selected");
      }
      if(joueurCourant == joueur) {
        pionCourant = joueur.getPion(i);
        imageCourante = $(this);
        imageCourante.addClass("selected");
      }
      
      console.log("Image "+i+" joueur "+ joueur.id);
    });
  }
}

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
      console.log(partie);
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

    joueurCourant = joueur2;
    
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
