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
 * Créé un listener pour les boutons qui permettent de jouer.
 */
function initButtonListener() {
    placerPionListener();
    enleverPionListener();
    tournerPionListener();
    pousserPionListener();
}