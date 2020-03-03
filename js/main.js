// Définition des variables globales
var plateau; // Le plateau du jeu
var joueur1; // Le joueur 1
var joueur2; // Le joueur 2
var rochers; // Le tableau de rocher
var caseCourante; // La dernière case sélectionné par un joueur
var pionCourant; // Le dernier pion sélectionné par un joueur

/**
 * Initialise les joueurs.
 */
function initJoueurs() {
    joueur1 = new Player(ElementPlateau.ELEPHANT, 1);
    joueur2 = new Player(ElementPlateau.RHINOCEROS, 2);
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
    plateau.placerPion("", rochers[0], 2, 1);
    plateau.placerPion("", rochers[1], 2, 2);
    plateau.placerPion("", rochers[2], 2, 3);
}

function initPlateauListener() {
  for (let i = 0; i < plateau.TAILLE_PLATEAU; i++) {
    for (let j = 0; j < plateau.TAILLE_PLATEAU; j++) {
      $("#case_"+i+"_"+j).click(function(){
        console.log($(this).attr('id').split('_'));
      });
    }
  }
}

/**
 * Initialise les objets du jeux.
 */
function initGame() {
    initJoueurs();
    initRochers();
    initPlateau();
    initPlateauListener();

    $("#div-joueur1").click(function(){
      $(this).addClass("selected");
    });

    //placerPion(caseCourante, pionCourant, plateau, joueur1, joueur1.getPion(2), 2, 4);

    // Pour les tests
    /*
    plateau.placerPion(joueur1, joueur1.getPion(2), 2, 4);
    plateau.placerPion(joueur1, joueur1.getPion(1), 2, 1);
    plateau.placerPion(joueur1, joueur1.getPion(3), 0, 1);

    plateau.placerPion(joueur2, joueur2.getPion(3), 3, 3);
    plateau.placerPion(joueur2, joueur2.getPion(0), 3, 0);

    joueur1.getPion(2).rotationGauche();
    joueur2.getPion(0).rotationDroite();
    */

    //plateau.pousser(joueur1, joueur2, joueur1.getPion(2));
    //plateau.pousser(joueur1, joueur2, joueur1.getPion(2));

    plateau.actualiserAffichage(joueur1, joueur2);
}

initGame();
