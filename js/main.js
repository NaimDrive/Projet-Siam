// Définition des variables globales
var plateau; // Le plateau du jeu
var joueur1; // Le joueur 1
var joueur2; // Le joueur 2
var rochers; // Le tableau de rocher

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
    plateau.placerPion("", rochers[0], 3, 1);
    plateau.placerPion("", rochers[1], 2, 2);
    plateau.placerPion("", rochers[2], 2, 3);
}

/**
 * Initialise les objets du jeux.
 */
function initGame() {
    initJoueurs();
    initRochers();
    initPlateau();

    // Pour les tests
    plateau.placerPion(joueur1, joueur1.getPion(0), 1, 0);
    plateau.placerPion(joueur1, joueur1.getPion(2), 1, 3);
    plateau.placerPion(joueur1, joueur1.getPion(1), 2, 1);
    plateau.placerPion(joueur1, joueur1.getPion(3), 0, 1);

    plateau.placerPion(joueur2, joueur2.getPion(3), 3, 3);
    plateau.placerPion(joueur2, joueur2.getPion(0), 4, 1);
    
    plateau.pousser(joueur2, joueur2.getPion(0));
    plateau.pousser(joueur2, joueur2.getPion(0));
    plateau.pousser(joueur2, joueur2.getPion(0));
    plateau.pousser(joueur2, joueur2.getPion(3));
    plateau.pousser(joueur2, joueur2.getPion(3));
    plateau.pousser(joueur2, joueur2.getPion(3));

    plateau.enleverPion(joueur2, joueur2.getPion(3));

    plateau.actualiserAffichage(joueur1, joueur2);
}

initGame();