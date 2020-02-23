// Définition des variables globales
var plateau; // Le plateau du jeu
var joueur1; // Le joueur 1
var joueur2; // Le joueur 2
var rochers; // Le tableau de rocher

/**
 * Initialise les joueurs.
 */
function initJoueurs() {
    joueur1 = new Player(ElementPlateau.ELEPHANT);
    joueur2 = new Player(ElementPlateau.RHINOCEROS);
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
}

/**
 * Initialise les objets du jeux.
 */
function initGame() {
    initJoueurs();
    initRochers();
    initPlateau();

    // Pour les tests
    plateau.placerPion(joueur1.getPion(0), 0, 0);
    plateau.placerPion(joueur1.getPion(0), 1, 0);
    plateau.placerPion(joueur2.getPion(3), 4, 3);
}

initGame();
plateau.afficherTableau();
plateau.afficherImages();
joueur1.afficherInventaire(1);
joueur2.afficherInventaire(2);